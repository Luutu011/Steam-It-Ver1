using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Manages visual guidance.
/// 1. Hand Tutorial: Only shows at the very start of the game.
/// 2. Guide Wobble: Appears after 5 seconds of inactivity. 
///    Finds 3 matching items on the board to highlight.
/// </summary>
public class GuideManager : Ply_Singleton<GuideManager>
{
    [Header("Timings")]
    [Tooltip("Seconds of inactivity before the guide appears.")]
    [SerializeField] private float idleThreshold = 5f;

    [Header("Visual Settings")]
    [SerializeField] private float wobbleAngle = 12f;
    [SerializeField] private float wobbleSpeed = 2.5f;

    // ── State ────────────────────────────────────────────────────────────────

    private FoodSlot tutorialDonor;
    private FoodSlot tutorialTarget;
    private List<FoodSlot> tutorialTriplet = new List<FoodSlot>();

    private List<FoodSlot> currentGuideSlots = new List<FoodSlot>();
    private float idleTimer;
    private bool isShowing;
    private bool isTutorialActive = true;
    private Coroutine wobbleCoroutine;

    private void Update()
    {
        // Reset timer on any mouse input
        if (Input.GetMouseButtonDown(0))
        {
            ResetIdle();
            return;
        }

        // Increment idle timer
        if (!isShowing)
        {
            idleTimer += Time.deltaTime;
            if (idleTimer >= idleThreshold)
            {
                ShowHint();
            }
        }
    }

    // ── Public API ───────────────────────────────────────────────────────────

    /// <summary>
    /// Initial tutorial setup called by LevelManager.
    /// </summary>
    public void SetTutorialMove(FoodSlot donor, FoodSlot empty, FoodSlot t1, FoodSlot t2)
    {
        tutorialDonor = donor;
        tutorialTarget = empty;

        tutorialTriplet.Clear();
        tutorialTriplet.Add(donor);
        tutorialTriplet.Add(t1);
        tutorialTriplet.Add(t2);

        // Show tutorial immediately at start
        ShowHint();
    }

    /// <summary>Called by DragManager on interaction.</summary>
    public void Hide()
    {
        // After the first interaction, the hand tutorial is never shown again
        isTutorialActive = false;
        ResetIdle();
    }

    // ── Hint Logic ───────────────────────────────────────────────────────────

    private void ShowHint()
    {
        isShowing = true;
        currentGuideSlots.Clear();

        if (isTutorialActive)
        {
            // ── Mode A: Initial Hand Tutorial ─────────────────────────────
            if (tutorialTriplet.Count > 0)
            {
                currentGuideSlots.AddRange(tutorialTriplet);

                // Show Hand only during tutorial
                if (tutorialDonor != null && tutorialTarget != null)
                {
                    TutorialManager.Ins?.StartHandGuide(tutorialDonor.TF.position, tutorialTarget.TF.position);
                }
            }
        }
        else
        {
            // ── Mode B: Dynamic Idle Hint ──────────────────────────────────
            // Find any 3 slots that share the same category
            List<FoodSlot> match = FindAnyMatch();
            if (match != null)
            {
                currentGuideSlots.AddRange(match);
            }
        }

        // Start Wobble if we found slots to highlight
        if (currentGuideSlots.Count > 0)
        {
            if (wobbleCoroutine != null) StopCoroutine(wobbleCoroutine);
            wobbleCoroutine = StartCoroutine(WobbleLoop());
        }
    }

    private void ResetIdle()
    {
        idleTimer = 0f;

        if (isShowing)
        {
            isShowing = false;

            if (wobbleCoroutine != null)
            {
                StopCoroutine(wobbleCoroutine);
                wobbleCoroutine = null;
            }

            // Reset rotations
            foreach (var slot in currentGuideSlots)
            {
                if (slot != null) slot.TF.localRotation = Quaternion.identity;
            }

            // Always hide hand when player interacts
            TutorialManager.Ins?.HideHand();

            // If it was the tutorial hand, permanently disable tutorial mode now
            if (isTutorialActive) isTutorialActive = false;
        }
    }

    /// <summary>
    /// Searches all open grills for 3 slots with the same non-None category.
    /// </summary>
    private List<FoodSlot> FindAnyMatch()
    {
        Dictionary<FoodEnum, List<FoodSlot>> categoryMap = new Dictionary<FoodEnum, List<FoodSlot>>();

        // Collect all slots from all grills
        foreach (var grill in FindObjectsOfType<Grill>())
        {
            if (grill.IsClosed) continue;
            foreach (var slot in grill.foodSlots)
            {
                if (slot == null || slot.food.foodType == FoodEnum.None) continue;

                if (!categoryMap.ContainsKey(slot.food.foodType))
                    categoryMap[slot.food.foodType] = new List<FoodSlot>();

                categoryMap[slot.food.foodType].Add(slot);
            }
        }

        // Return the first triplet we find
        foreach (var pair in categoryMap)
        {
            if (pair.Value.Count >= 3)
            {
                return pair.Value.GetRange(0, 3);
            }
        }

        return null;
    }

    private IEnumerator WobbleLoop()
    {
        float time = 0f;
        while (isShowing)
        {
            time += Time.deltaTime * wobbleSpeed * Mathf.PI * 2f;
            float angle = Mathf.Sin(time) * wobbleAngle;

            foreach (var slot in currentGuideSlots)
            {
                if (slot != null)
                    slot.TF.localRotation = Quaternion.Euler(0f, 0f, angle);
            }
            yield return null;
        }
    }
}
