using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class FoodSlotGraphicController : MonoBehaviour
{
    public static FoodSlotGraphicController Instance { get; private set; }

    [Tooltip("The dish/bag GameObject that food flies into.")]
    public GameObject dish;

    [Tooltip("Horizontal offset between food items in the dish.")]
    [SerializeField] private float foodOffsetWidth = 0.5f;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);

        if (dish != null) dish.SetActive(false);
    }

    private Queue<GameObject> foodAnimationPool = new Queue<GameObject>();
    private List<GameObject> activeFoodInDish = new List<GameObject>();

    /// <summary>Called when food is placed into a slot.</summary>
    public void OnAddFood(FoodSlot foodSlot, FoodData foodData)
    {
        foodSlot.sr.sprite = foodData.foodSprite;
    }

    /// <summary>
    /// Animate the food sprite flying from the slot to a specific position in the dish.
    /// indexInGrill: 0 = left, 1 = center, 2 = right.
    /// </summary>
    public void OnClearFood(FoodSlot foodSlot, Transform targetTransform, int indexInGrill, System.Action onComplete = null)
    {
        // Activate and position dish
        if (dish != null)
        {
            if (!dish.activeSelf)
            {
                // Before showing the dish for a new grill, clean up any old food still attached
                CleanupDishChildren();
                dish.SetActive(true);
                dish.transform.position = targetTransform.position;
                dish.transform.localScale = Vector3.one * 0.72f;
            }
        }

        SpriteRenderer slotSR = foodSlot.sr;
        Sprite foodSprite = slotSR != null ? slotSR.sprite : null;

        if (foodSprite == null)
        {
            onComplete?.Invoke();
            return;
        }

        // Clear the slot visual immediately
        if (slotSR != null) slotSR.sprite = null;

        // Spawn a clone to animate
        GameObject foodClone = GetFoodAnimationObject();
        SpriteRenderer sr = foodClone.GetComponent<SpriteRenderer>();
        sr.sprite = foodSprite;
        sr.sortingOrder = 100;
        foodClone.transform.position = foodSlot.transform.position;
        foodClone.transform.localScale = foodSlot.transform.lossyScale;

        // Calculate offset position relative to the dish's center
        float xOffset = (indexInGrill - 1) * foodOffsetWidth;
        Vector3 targetWorldPos = targetTransform.position + new Vector3(xOffset, 0f, 0f);

        StartCoroutine(FlyToDish(foodClone, targetWorldPos, onComplete));
    }

    private IEnumerator FlyToDish(GameObject food, Vector3 targetWorldPos, System.Action onComplete)
    {
        float duration = 0.5f;
        float elapsed = 0f;
        Vector3 startPos = food.transform.position;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            float easeT = 1f - (1f - t) * (1f - t); // ease-out

            food.transform.position = Vector3.Lerp(startPos, targetWorldPos, easeT);
            yield return null;
        }

        if (food != null && dish != null)
        {
            // Parent to dish so it moves with it
            food.transform.SetParent(dish.transform);
            activeFoodInDish.Add(food);
        }

        onComplete?.Invoke();
    }

    /// <summary>
    /// Animates the dish flying out of the screen and deactivates it.
    /// </summary>
    public void AnimateDishOut()
    {
        if (dish == null) return;

        // Move the dish away
        Vector3 targetPos = dish.transform.position + new Vector3(10f, 4f, 0f);

        dish.transform.DOMove(targetPos, 0.6f).SetEase(Ease.InQuad);
        dish.transform.DOScale(Vector3.zero, 0.6f).SetEase(Ease.InBack).OnComplete(() =>
        {
            dish.SetActive(false);
            // We'll clean up children the next time the dish is needed 
            // to avoid popping while still visible.
        });
    }

    private void CleanupDishChildren()
    {
        foreach (GameObject food in activeFoodInDish)
        {
            if (food != null)
            {
                ReturnToPool(food);
            }
        }
        activeFoodInDish.Clear();
    }

    // ── Object pool ──────────────────────────────────────────────────────────

    private GameObject GetFoodAnimationObject()
    {
        GameObject obj;
        if (foodAnimationPool.Count > 0)
        {
            obj = foodAnimationPool.Dequeue();
            obj.SetActive(true);
        }
        else
        {
            obj = new GameObject("FoodAnimation");
            obj.AddComponent<SpriteRenderer>();
        }
        return obj;
    }

    private void ReturnToPool(GameObject obj)
    {
        obj.SetActive(false);
        obj.transform.SetParent(this.transform);
        foodAnimationPool.Enqueue(obj);
    }
}
