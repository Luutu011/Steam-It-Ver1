using System.Collections;
using UnityEngine;
using DG.Tweening;

/// <summary>
/// Manages the hand-guide tutorial visual.
/// </summary>
public class TutorialManager : MonoBehaviour
{
    public static TutorialManager Instance { get; private set; }

    [Tooltip("The hand-guide GameObject placed manually in the scene.")]
    [SerializeField] private GameObject handGuide;

    public bool isTutorial = true;
    private Tween handTween;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
    }

    /// <summary>
    /// Starts the hand animation moving from 'startPos' to 'endPos'.
    /// </summary>
    public void StartHandGuide([Bridge.Ref] Vector3 startPos, [Bridge.Ref] Vector3 endPos)
    {
        if (handGuide == null) return;
        
        if (handTween != null) handTween.Kill();

        handGuide.SetActive(true);
        handGuide.transform.position = startPos;

        // Loop movement: Move to end, wait, jump back to start
        handTween = handGuide.transform.DOMove(endPos, 1.2f)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Restart)
            .SetDelay(0.5f);
    }

    /// <summary>Temporarily hides the hand visual.</summary>
    public void HideHand()
    {
        if (handTween != null)
        {
            handTween.Kill();
            handTween = null;
        }

        if (handGuide != null)
            handGuide.SetActive(false);
    }

    /// <summary>Hides the hand and marks the tutorial as finished.</summary>
    public void EndTutorial()
    {
        isTutorial = false;
        HideHand();
    }
}
