using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Populates all grills from a LevelData ScriptableObject.
/// Also acts as the central provider for food data (sprites).
/// </summary>
public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance { get; private set; }

    [Header("Level Data")]
    [Tooltip("ScriptableObject that defines food categories and their sprites.")]
    [SerializeField] private LevelData levelData;

    [Header("Grills")]
    [Tooltip("All Grill objects in the scene. Order matters for tutorial slot pinning.")]
    [SerializeField] private List<Grill> grills = new List<Grill>();

    [Header("Tutorial Pinning")]
    [Tooltip("Index into 'grills' for the grill that gets the tutorial match.")]
    [SerializeField] private int guideTargetGrillIndex = 0;

    [Tooltip("Index into 'grills' for the grill that donates the 3rd tutorial slot.")]
    [SerializeField] private int guideDonorGrillIndex = 1;

    // ── Unity ────────────────────────────────────────────────────────────────

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
    }

    private void Start()
    {
        GenerateLevel();
    }

    // ── Public ───────────────────────────────────────────────────────────────

    public FoodData GetFoodData(FoodEnum type)
    {
        if (levelData == null) return default(FoodData);
        return levelData.GetFoodData(type);
    }

    public void GenerateLevel()
    {
        if (levelData == null || levelData.categories.Count == 0 || grills.Count == 0) return;

        // ── Step 1: collect all food slots ───────────────────────────
        List<FoodSlot> allSlots = new List<FoodSlot>();
        foreach (Grill grill in grills)
        {
            if (grill == null) continue;
            foreach (FoodSlot slot in grill.foodSlots)
                if (slot != null) allSlots.Add(slot);
        }

        // ── Step 2: build assignment list (3 copies of each category) ─────
        List<FoodData> assignments = new List<FoodData>();
        foreach (FoodData entry in levelData.categories)
        {
            assignments.Add(entry);
            assignments.Add(entry);
            assignments.Add(entry);
        }

        // Clamp to available slots
        if (assignments.Count > allSlots.Count)
            assignments = assignments.GetRange(0, allSlots.Count);

        // ── Step 3: pin the tutorial category ────────────────────────────
        // Target: Slot 0 (Empty), Slot 1 (Cat 1), Slot 2 (Cat 1)
        // Donor: Slot 0 (Cat 1)
        FoodData tutorialEntry = levelData.categories[0];

        bool tutorialPinned = TryPinTutorial(tutorialEntry,
                                              out FoodSlot emptySlot,
                                              out FoodSlot donorSlot,
                                              out FoodSlot target1,
                                              out FoodSlot target2);

        // ── Step 4: shuffle and fill remaining ───────────────────────────
        List<FoodSlot> remainingSlots = new List<FoodSlot>(allSlots);
        if (tutorialPinned)
        {
            remainingSlots.Remove(emptySlot);
            remainingSlots.Remove(donorSlot);
            remainingSlots.Remove(target1);
            remainingSlots.Remove(target2);

            // Remove 3 cat1 entries from the assignment pool
            for (int i = 0; i < 3; i++) RemoveFirst(assignments, tutorialEntry);
        }

        int safety = 0;
        bool hasStartingMatch;
        do
        {
            hasStartingMatch = false;
            Utilities.Shuffle(assignments);
            Utilities.Shuffle(remainingSlots);

            int count = Mathf.Min(assignments.Count, remainingSlots.Count);
            for (int i = 0; i < count; i++)
                remainingSlots[i].AddFood(assignments[i]);

            // Check if any grill is already in a clearable state
            foreach (Grill grill in grills)
            {
                if (grill != null && grill.IsClearable())
                {
                    Debug.Log("Bat duoc r nha");
                    hasStartingMatch = true;
                    break;
                }
            }

            // If we found a match, clear the random assignments and try again
            if (hasStartingMatch && safety < 100)
            {
                foreach (FoodSlot slot in remainingSlots)
                {
                    if (slot != null) slot.Clear();
                }
            }

            safety++;
        } while (hasStartingMatch && safety < 100);

        // ── Step 5: notify GuideManager ──────────────────────────────────
        if (tutorialPinned)
        {
            // Hand moves from donor to the empty slot in the target grill
            GuideManager.Instance?.SetTutorialMove(donorSlot, emptySlot, target1, target2);
            TutorialManager.Instance?.StartHandGuide(donorSlot.TF.position, emptySlot.TF.position);
        }
    }

    private bool TryPinTutorial([Bridge.Ref] FoodData entry, out FoodSlot emptySlot, out FoodSlot donorSlot, out FoodSlot t1, out FoodSlot t2)
    {
        emptySlot = donorSlot = t1 = t2 = null;
        if (grills.Count < 2) return false;

        Grill targetGrill = grills[guideTargetGrillIndex];
        Grill donorGrill = grills[guideDonorGrillIndex];

        if (targetGrill == null || targetGrill.foodSlots.Count < 3) return false;
        if (donorGrill == null || donorGrill.foodSlots.Count < 1) return false;

        emptySlot = targetGrill.foodSlots[0]; // Stay empty
        t1 = targetGrill.foodSlots[1];
        t2 = targetGrill.foodSlots[2];
        donorSlot = donorGrill.foodSlots[0];

        t1.AddFood(entry);
        t2.AddFood(entry);
        donorSlot.AddFood(entry);

        return true;
    }

    public static void RemoveFirst<T>(List<T> list, T item)
    {
        int idx = list.FindIndex(x => EqualityComparer<T>.Default.Equals(x, item));
        if (idx >= 0) list.RemoveAt(idx);
    }
}
