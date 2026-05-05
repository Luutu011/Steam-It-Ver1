using DG.Tweening;
using UnityEngine;

/// <summary>
/// Central drag handler. Handles picking up food data from a slot and 
/// dropping it onto an EMPTY slot.
/// Only transfers the 'FoodData'; the FoodSlot GameObjects stay fixed in their grills.
/// </summary>
public class DragManager : Ply_Singleton<DragManager>
{
    [Header("Layer Masks")]
    public LayerMask draggableLayer;
    public LayerMask grillLayer;

    [Header("Drag Visual")]
    [Tooltip("A SpriteRenderer used to show the food while dragging. Should be an object in the scene.")]
    [SerializeField] private SpriteRenderer dragVisual;

    // ── Private state ────────────────────────────────────────────────────────

    private FoodSlot currentSourceSlot;
    private Vector3 startWorldPos;
    private float zDistanceToCamera;
    private Vector3 offset;

    private Camera mainCamera;
    private int draggableLayerIndex;

    public bool IsDragging { get; private set; }
    public bool canDrag = true;

    public int limitDragTime = 20;

    // ── Unity ────────────────────────────────────────────────────────────────

    private void Start()
    {
        mainCamera = Camera.main;
        if (dragVisual != null) dragVisual.gameObject.SetActive(false);
    }

    private void Update()
    {
        HandleDragging();
    }

    // ── Drag logic ───────────────────────────────────────────────────────────

    private void HandleDragging()
    {
        if (limitDragTime <= 0)
        {
            GameManager.Instance.GoToStore();
            GameManager.Instance.isGameOver = true;
            return;
        }

        if (GameManager.Instance.isGameOver || GameManager.Instance.HasReachedLimit()) return;
        if (!canDrag) return;

        // ── Mouse / Touch Down ────────────────────────────────────────────
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity, draggableLayer))
            {
                FoodSlot slot = hit.collider.GetComponent<FoodSlot>();
                if (slot == null) slot = hit.collider.GetComponentInParent<FoodSlot>();

                // Can only drag if slot has food and its grill is open
                if (slot != null && slot.food.foodType != FoodEnum.None)
                {
                    Grill parentGrill = slot.GetComponentInParent<Grill>();
                    if (parentGrill != null && parentGrill.IsClosed) return;

                    // End tutorial
                    TutorialManager.Instance?.EndTutorial();
                    GuideManager.Instance?.Hide();

                    currentSourceSlot = slot;
                    startWorldPos = slot.TF.position;
                    zDistanceToCamera = Mathf.Abs(startWorldPos.z - mainCamera.transform.position.z);

                    Vector3 mouseWorld = mainCamera.ScreenToWorldPoint(
                        new Vector3(Input.mousePosition.x, Input.mousePosition.y, zDistanceToCamera));
                    offset = startWorldPos - mouseWorld;

                    // Setup drag visual
                    if (dragVisual != null)
                    {
                        dragVisual.gameObject.SetActive(true);
                        dragVisual.sprite = slot.food.foodSprite;
                        dragVisual.transform.position = startWorldPos;
                        dragVisual.transform.localScale = slot.TF.lossyScale * 1.2f;
                    }

                    // Hide original visual
                    if (slot.sr != null) slot.sr.enabled = false;

                    // Play Tap SFX
                    SoundManager.Ins?.PlayFx(FxType.Tap);

                    IsDragging = true;
                    GameManager.Instance.isGameStart = true;
                    limitDragTime--;
                }
            }
        }

        // ── Mouse Drag ────────────────────────────────────────────────────
        if (Input.GetMouseButton(0) && currentSourceSlot != null)
        {
            Vector3 mouseWorld = mainCamera.ScreenToWorldPoint(
                new Vector3(Input.mousePosition.x, Input.mousePosition.y, zDistanceToCamera));

            if (dragVisual != null)
                dragVisual.transform.position = mouseWorld + offset;
        }

        // ── Mouse / Touch Up ──────────────────────────────────────────────
        if (Input.GetMouseButtonUp(0) && currentSourceSlot != null)
        {
            IsDragging = false;

            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            bool placed = false;

            // Check for target (either a specific slot or a grill)
            if (Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity, grillLayer))
            {
                FoodSlot targetSlot = hit.collider.GetComponent<FoodSlot>();
                if (targetSlot == null) targetSlot = hit.collider.GetComponentInParent<FoodSlot>();

                Grill targetGrill = hit.collider.GetComponent<Grill>();
                if (targetGrill == null) targetGrill = hit.collider.GetComponentInParent<Grill>();

                // If we hit a grill but no specific slot (or if the slot is occupied/null), 
                // try to find the first empty slot in that grill.
                if (targetGrill != null && (targetSlot == null || targetSlot.food.foodType != FoodEnum.None))
                {
                    targetSlot = targetGrill.GetFirstEmptySlot();
                }

                if (targetSlot != null && targetSlot != currentSourceSlot && targetSlot.food.foodType == FoodEnum.None)
                {
                    Grill actualTargetGrill = targetSlot.GetComponentInParent<Grill>();
                    if (actualTargetGrill != null && !actualTargetGrill.IsClosed)
                    {
                        // Transfer Data
                        targetSlot.AddFood(currentSourceSlot.food);
                        currentSourceSlot.Clear();
                        placed = true;

                        // Play Placed SFX
                        SoundManager.Ins?.PlayFx(FxType.Placed);
                    }
                }
            }

            if (dragVisual != null)
            {
                if (placed)
                {
                    dragVisual.gameObject.SetActive(false);
                }
                else
                {
                    // Animate visual back to source
                    FoodSlot sourceToRestore = currentSourceSlot;
                    dragVisual.transform.DOMove(startWorldPos, 0.25f).SetEase(Ease.OutBack).OnComplete(() =>
                    {
                        if (sourceToRestore != null && sourceToRestore.sr != null)
                            sourceToRestore.sr.enabled = true;

                        dragVisual.gameObject.SetActive(false);
                    });
                }
            }
            else
            {
                // Fallback: just show source visual again if not placed
                if (!placed && currentSourceSlot.sr != null)
                    currentSourceSlot.sr.enabled = true;
            }

            currentSourceSlot = null;
        }
    }
}