using UnityEngine;

/// <summary>
/// Adjusts the orthographic camera size to maintain consistent gameplay framing,
/// and notifies UIManager when the orientation changes between portrait and landscape.
/// </summary>
public class CameraManager : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;

    [Header("Reference Resolution (Portrait)")]
    public float refWidth    = 1080f;
    public float refHeight   = 1920f;
    public float refOrthoSize = 12f;

    private bool wasLandscape = false;

    private void Awake()
    {
        if (mainCamera == null) mainCamera = GetComponent<Camera>();
        if (mainCamera == null) mainCamera = Camera.main;

        // Determine initial orientation
        wasLandscape = Screen.width > Screen.height;
        //UIManager.Instance?.SetOrientation(wasLandscape);
    }

    private void Update()
    {
        if (mainCamera == null) return;

        bool isLandscape = Screen.width > Screen.height;

        // Notify UIManager on orientation change
        if (isLandscape != wasLandscape)
        {
            wasLandscape = isLandscape;
            //UIManager.Instance?.SetOrientation(isLandscape);
        }

        // Adjust orthographic size so the reference width always fits on screen
        float currentAspect = (float)Screen.width / Screen.height;
        float baseAspect    = refWidth / refHeight;

        mainCamera.orthographicSize = currentAspect < baseAspect
            ? refOrthoSize * (baseAspect / currentAspect)
            : refOrthoSize;
    }
}
