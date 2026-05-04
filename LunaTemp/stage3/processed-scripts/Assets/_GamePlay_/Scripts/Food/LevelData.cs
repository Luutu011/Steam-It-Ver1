using System;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Data structure for a food type and its associated visual sprite.
/// </summary>
[Serializable]
public struct FoodData
{
    public FoodEnum foodType;
    public Sprite   foodSprite;
}

/// <summary>
/// ScriptableObject that defines which food categories exist in a level
/// and what sprite each one uses.
/// Create via: Assets → Create → SteamIt → LevelData
/// </summary>
[CreateAssetMenu(menuName = "SteamIt/LevelData", fileName = "LevelData")]
public class LevelData : ScriptableObject
{
    [Tooltip("All food categories available for this level. Each category will be placed 3 times.")]
    public List<FoodData> categories = new List<FoodData>();

    public FoodData GetFoodData(FoodEnum type)
    {
        return categories.Find(x => x.foodType == type);
    }
}
