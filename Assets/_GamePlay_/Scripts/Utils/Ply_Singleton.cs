using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ply_Singleton<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T ins;

    public static T Ins
    {
        get
        {
            return ins;
        }
    }

    public virtual void Awake()
    {
        if (ins == null)
        {
            // Find singleton
            ins = FindObjectOfType<T>();

            // Create new instance if one doesn't already exist.
            if (ins == null)
            {
                // Need to create a new GameObject to attach the singleton to.
                ins = new GameObject(nameof(T)).AddComponent<T>();
            }

        }
    }
}
