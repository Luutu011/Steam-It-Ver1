using UnityEngine;

public class FoodSlot : Ply_GameUnit
{
    public FoodData food;
    public SpriteRenderer sr;

    internal void AddFood(FoodData foodData)
    {
        this.food = foodData;
        if (sr != null) sr.enabled = true;
        FoodSlotGraphicController.Instance.OnAddFood(this, foodData);
    }

    /// <summary>Clears data and sprite.</summary>
    internal void Clear()
    {
        this.food = default;
        if (sr != null)
        {
            this.sr.sprite = null;
            this.sr.enabled = true;
        }
    }
}
