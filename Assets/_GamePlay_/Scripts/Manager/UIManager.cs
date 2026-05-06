using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : Ply_Singleton<UIManager>
{

    [Header("Orientation Panels")]
    [Tooltip("Root panel shown when the device is in portrait mode.")]
    [SerializeField] private GameObject portraitPanel;

    [Tooltip("Root panel shown when the device is in landscape mode.")]
    [SerializeField] private GameObject landscapePanel;

    [Header("Result UI")]
    [SerializeField] private GameObject resultPanel;
    [SerializeField] private Text resultText;
    [SerializeField] private Text resultShadowText;
    [SerializeField] private Image shipperImage;
    [SerializeField] private Sprite shipperLostSprite;

    [Header("Warning VFX")]
    [SerializeField] private Image warningVFX;

    // ── Orientation ──────────────────────────────────────────────────────────

    /// <summary>Activates the correct panel based on current orientation.</summary>
    public void SetOrientation(bool isLandscape)
    {
        if (portraitPanel != null) portraitPanel.SetActive(!isLandscape);
        if (landscapePanel != null) landscapePanel.SetActive(isLandscape);
    }

    // ── Progress ─────────────────────────────────────────────────────────────

    /// <summary>Called by GameManager each time a grill is cleared.</summary>
    public void OnGrillCleared(int cleared, int total)
    {
        // Hook up score/progress display here if needed.
    }

    // ── Win / Lose ───────────────────────────────────────────────────────────

    public void LevelWon()
    {
        if (resultPanel != null) resultPanel.SetActive(true);
        if (resultText != null) resultText.text = "Level Completed";
        if (resultShadowText != null) resultShadowText.text = "Level Completed";
    }

    public void LevelFailed()
    {
        if (resultPanel != null) resultPanel.SetActive(true);
        if (shipperImage != null && shipperLostSprite != null)
            shipperImage.sprite = shipperLostSprite;
        if (resultText != null) resultText.text = "Level Failed";
        if (resultShadowText != null) resultShadowText.text = "Level Failed";
    }

    // ── Warning VFX ──────────────────────────────────────────────────────────

    public void ShowWarningVFX()
    {
        if (warningVFX != null) warningVFX.gameObject.SetActive(true);
    }

    public void HideWarningVFX()
    {
        if (warningVFX != null) warningVFX.gameObject.SetActive(false);
    }

    // ── Buttons ──────────────────────────────────────────────────────────────

    public void InstallButtonClick()
    {
        //SoundManager.Instance.PlaySoundEffect(3);
        GameManager.Ins.GoToStore();
    }
}
