using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum FxType
{
    Tap = 0,
    Placed = 1,
    FlyToDish = 2,
}

public class SoundManager : Ply_Singleton<SoundManager>
{
    public AudioClip[] audioClips;
    public AudioSource sound;
    private AudioSource[] fx = new AudioSource[10];

    bool isMute = false;
    bool isMusicPlay = false;

    public void PlayFx(FxType fxType)
    {
        if (isMute) return;

        int index = (int)fxType;
        if (index >= audioClips.Length || audioClips[index] == null) return;

        if (fx[index] == null)
        {
            fx[index] = new GameObject(fxType.ToString()).AddComponent<AudioSource>();
            fx[index].clip = audioClips[index];
        }
        fx[index].Play();
    }

    public void Mute()
    {
        sound.Stop();
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
        }
    }

    public void PlayMusic()
    {
        // if(!isMusicPlay)sound.Play();
        isMusicPlay = true;
    }
}
