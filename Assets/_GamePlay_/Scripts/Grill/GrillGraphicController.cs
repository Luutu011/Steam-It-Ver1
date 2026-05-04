using DG.Tweening;
using UnityEngine;

public class GrillGraphicController : MonoBehaviour
{
    [SerializeField] private GameObject cover;
    [SerializeField] private SpriteRenderer coverSR;

    public void CloseCoverAnimation()
    {
        cover.SetActive(true);
        coverSR.DOColor(new Color(1, 1, 1, 1f), 0.2f);
        cover.transform.DOLocalMoveY(0.53f, 0.2f);
    }
}
