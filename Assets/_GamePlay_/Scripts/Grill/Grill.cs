using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Grill : Ply_GameUnit
{
    [Tooltip("The individual food slots that belong to this grill (exactly 3).")]
    public List<FoodSlot> foodSlots = new List<FoodSlot>();

    [SerializeField] private GrillGraphicController graphic;

    [Tooltip("The dish/target transform that food flies to when cleared.")]
    [SerializeField] private Transform dishTarget;

    public bool IsClosed { get; private set; } = false;

    private void Update()
    {
        if (!IsClosed && IsClearable())
            StartCoroutine(DoClear());
    }

    /// <summary>Returns true when all 3 slots share the same non-None food type.</summary>
    public bool IsClearable()
    {
        if (IsClosed) return false;
        if (foodSlots.Count < 3) return false;

        FoodEnum type = foodSlots[0].food.foodType;
        if (type == FoodEnum.None) return false;

        for (int i = 1; i < 3; i++)
        {
            if (foodSlots[i].food.foodType != type) return false;
        }
        return true;
    }

    /// <summary>
    /// Animate food flying to the dish, then close the grill cover.
    /// </summary>
    private IEnumerator DoClear()
    {
        IsClosed = true; // prevent re-triggering

        // Play clearing SFX
        SoundManager.Ins.PlayFx(FxType.FlyToDish);

        // Animate each food slot's visual to fly to the dish target with index offset
        int pending = foodSlots.Count;
        for (int i = 0; i < foodSlots.Count; i++)
        {
            FoodSlot slot = foodSlots[i];
            FoodSlotGraphicController.Instance.OnClearFood(slot, dishTarget, i, () =>
            {
                pending--;
            });
        }

        // Clear data immediately so slots appear empty
        foreach (FoodSlot slot in foodSlots)
            slot.Clear();

        // Wait until all animations finish (or a max 2s timeout)
        float elapsed = 0f;
        while (pending > 0 && elapsed < 2f)
        {
            elapsed += Time.deltaTime;
            yield return null;
        }

        // Animate dish flying out
        FoodSlotGraphicController.Instance.AnimateDishOut();

        // Close grill cover
        graphic.CloseCoverAnimation();

        GameManager.Instance.OnGrillCleared();
    }

    /// <summary>
    /// Try to place food of the given type into the target slot.
    /// Only succeeds if the slot is currently empty and the grill is open.
    /// </summary>
    public bool TryAddFood(FoodEnum foodType, FoodSlot targetSlot)
    {
        if (IsClosed) return false;
        if (!foodSlots.Contains(targetSlot)) return false;
        if (targetSlot.food.foodType != FoodEnum.None) return false;

        targetSlot.AddFood(LevelManager.Instance.GetFoodData(foodType));
        return true;
    }

    /// <summary>
    /// Returns the first empty slot in the grill.
    /// </summary>
    public FoodSlot GetFirstEmptySlot()
    {
        if (IsClosed) return null;
        foreach (var slot in foodSlots)
        {
            if (slot.food.foodType == FoodEnum.None)
                return slot;
        }
        return null;
    }
}
