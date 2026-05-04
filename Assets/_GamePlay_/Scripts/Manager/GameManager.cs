using System;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("Win Condition")]
    [Tooltip("How many distinct grill categories must be cleared to win.")]
    public int numberOfClearableCategories = 26;
    public int numberOfCategories = 28;

    [Header("State")]
    public bool isGameStart = false;
    public bool isGameOver = false;

    private int clearedCount = 0;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
    }

    private void Update()
    {
        // When the category threshold is reached (or game is over),
        // any tap redirects to the store instead of triggering a drag.
        if ((isGameOver || HasReachedLimit()) && Input.GetMouseButtonDown(0))
        {
            GoToStore();
        }
    }

    /// <summary>Returns true when the cleared count has reached the configured limit.</summary>
    public bool HasReachedLimit()
    {
        return clearedCount >= numberOfClearableCategories;
    }

    /// <summary>Called by Grill when a 3-of-a-kind clear animation completes.</summary>
    public void OnGrillCleared()
    {
        clearedCount++;
        //UIManager.Instance.OnGrillCleared(clearedCount, numberOfClearableCategories);

        if (clearedCount >= numberOfCategories && !isGameOver)
        {
            Invoke(nameof(WinLevel), 1f);
        }
    }

    private void WinLevel()
    {
        isGameOver = true;
        //SoundManager.Instance.PlaySoundEffect(4);
        UIManager.Instance.LevelWon();
        GoToStore();
    }

    public void GoToStore()
    {
        // Luna / MRAID install prompt
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }
}