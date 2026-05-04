var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointSpring' )
  var i775 = data
  i774.spring = i775[0]
  i774.damper = i775[1]
  i774.targetPosition = i775[2]
  return i774
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointMotor' )
  var i777 = data
  i776.m_TargetVelocity = i777[0]
  i776.m_Force = i777[1]
  i776.m_FreeSpin = i777[2]
  return i776
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointLimits' )
  var i779 = data
  i778.m_Min = i779[0]
  i778.m_Max = i779[1]
  i778.m_Bounciness = i779[2]
  i778.m_BounceMinVelocity = i779[3]
  i778.m_ContactDistance = i779[4]
  i778.minBounce = i779[5]
  i778.maxBounce = i779[6]
  return i778
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointDrive' )
  var i781 = data
  i780.m_PositionSpring = i781[0]
  i780.m_PositionDamper = i781[1]
  i780.m_MaximumForce = i781[2]
  i780.m_UseAcceleration = i781[3]
  return i780
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i783 = data
  i782.m_Spring = i783[0]
  i782.m_Damper = i783[1]
  return i782
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i785 = data
  i784.m_Limit = i785[0]
  i784.m_Bounciness = i785[1]
  i784.m_ContactDistance = i785[2]
  return i784
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i787 = data
  i786.m_ExtremumSlip = i787[0]
  i786.m_ExtremumValue = i787[1]
  i786.m_AsymptoteSlip = i787[2]
  i786.m_AsymptoteValue = i787[3]
  i786.m_Stiffness = i787[4]
  return i786
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i789 = data
  i788.m_LowerAngle = i789[0]
  i788.m_UpperAngle = i789[1]
  return i788
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i791 = data
  i790.m_MotorSpeed = i791[0]
  i790.m_MaximumMotorTorque = i791[1]
  return i790
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i793 = data
  i792.m_DampingRatio = i793[0]
  i792.m_Frequency = i793[1]
  i792.m_Angle = i793[2]
  return i792
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i795 = data
  i794.m_LowerTranslation = i795[0]
  i794.m_UpperTranslation = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i796 = root || new pc.UnityMaterial()
  var i797 = data
  i796.name = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'shader')
  i796.renderQueue = i797[3]
  i796.enableInstancing = !!i797[4]
  var i799 = i797[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i799[i + 0]) );
  }
  i796.floatParameters = i798
  var i801 = i797[6]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i801[i + 0]) );
  }
  i796.colorParameters = i800
  var i803 = i797[7]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i803[i + 0]) );
  }
  i796.vectorParameters = i802
  var i805 = i797[8]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i805[i + 0]) );
  }
  i796.textureParameters = i804
  var i807 = i797[9]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i807[i + 0]) );
  }
  i796.materialFlags = i806
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i815 = data
  i814.name = i815[0]
  i814.value = new pc.Color(i815[1], i815[2], i815[3], i815[4])
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i819 = data
  i818.name = i819[0]
  i818.value = new pc.Vec4( i819[1], i819[2], i819[3], i819[4] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i823 = data
  i822.name = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'value')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i827 = data
  i826.name = i827[0]
  i826.enabled = !!i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i829 = data
  i828.name = i829[0]
  i828.width = i829[1]
  i828.height = i829[2]
  i828.mipmapCount = i829[3]
  i828.anisoLevel = i829[4]
  i828.filterMode = i829[5]
  i828.hdr = !!i829[6]
  i828.format = i829[7]
  i828.wrapMode = i829[8]
  i828.alphaIsTransparency = !!i829[9]
  i828.alphaSource = i829[10]
  i828.graphicsFormat = i829[11]
  i828.sRGBTexture = !!i829[12]
  i828.desiredColorSpace = i829[13]
  i828.wrapU = i829[14]
  i828.wrapV = i829[15]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i831 = data
  i830.name = i831[0]
  i830.index = i831[1]
  i830.startup = !!i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i833 = data
  i832.aspect = i833[0]
  i832.orthographic = !!i833[1]
  i832.orthographicSize = i833[2]
  i832.backgroundColor = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.nearClipPlane = i833[7]
  i832.farClipPlane = i833[8]
  i832.fieldOfView = i833[9]
  i832.depth = i833[10]
  i832.clearFlags = i833[11]
  i832.cullingMask = i833[12]
  i832.rect = i833[13]
  request.r(i833[14], i833[15], 0, i832, 'targetTexture')
  i832.usePhysicalProperties = !!i833[16]
  i832.focalLength = i833[17]
  i832.sensorSize = new pc.Vec2( i833[18], i833[19] )
  i832.lensShift = new pc.Vec2( i833[20], i833[21] )
  i832.gateFit = i833[22]
  i832.commandBufferCount = i833[23]
  i832.cameraType = i833[24]
  i832.enabled = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i835 = data
  i834.name = i835[0]
  i834.tagId = i835[1]
  i834.enabled = !!i835[2]
  i834.isStatic = !!i835[3]
  i834.layer = i835[4]
  return i834
}

Deserializers["Grill"] = function (request, data, root) {
  var i836 = root || request.c( 'Grill' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('FoodSlot')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i836.foodSlots = i838
  request.r(i837[1], i837[2], 0, i836, 'graphic')
  request.r(i837[3], i837[4], 0, i836, 'dishTarget')
  return i836
}

Deserializers["GrillGraphicController"] = function (request, data, root) {
  var i842 = root || request.c( 'GrillGraphicController' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'cover')
  request.r(i843[2], i843[3], 0, i842, 'coverSR')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i845 = data
  i844.color = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  request.r(i845[4], i845[5], 0, i844, 'sprite')
  i844.flipX = !!i845[6]
  i844.flipY = !!i845[7]
  i844.drawMode = i845[8]
  i844.size = new pc.Vec2( i845[9], i845[10] )
  i844.tileMode = i845[11]
  i844.adaptiveModeThreshold = i845[12]
  i844.maskInteraction = i845[13]
  i844.spriteSortPoint = i845[14]
  i844.enabled = !!i845[15]
  request.r(i845[16], i845[17], 0, i844, 'sharedMaterial')
  var i847 = i845[18]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[19]
  i844.shadowCastingMode = i845[20]
  i844.sortingLayerID = i845[21]
  i844.sortingOrder = i845[22]
  i844.lightmapIndex = i845[23]
  i844.lightmapSceneIndex = i845[24]
  i844.lightmapScaleOffset = new pc.Vec4( i845[25], i845[26], i845[27], i845[28] )
  i844.lightProbeUsage = i845[29]
  i844.reflectionProbeUsage = i845[30]
  return i844
}

Deserializers["FoodSlot"] = function (request, data, root) {
  var i850 = root || request.c( 'FoodSlot' )
  var i851 = data
  i850.food = request.d('FoodData', i851[0], i850.food)
  request.r(i851[1], i851[2], 0, i850, 'sr')
  return i850
}

Deserializers["FoodData"] = function (request, data, root) {
  var i852 = root || request.c( 'FoodData' )
  var i853 = data
  i852.foodType = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'foodSprite')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i855 = data
  i854.center = new pc.Vec3( i855[0], i855[1], i855[2] )
  i854.size = new pc.Vec3( i855[3], i855[4], i855[5] )
  i854.enabled = !!i855[6]
  i854.isTrigger = !!i855[7]
  request.r(i855[8], i855[9], 0, i854, 'material')
  return i854
}

Deserializers["FoodSlotGraphicController"] = function (request, data, root) {
  var i856 = root || request.c( 'FoodSlotGraphicController' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'dish')
  i856.foodOffsetWidth = i857[2]
  return i856
}

Deserializers["GameManager"] = function (request, data, root) {
  var i858 = root || request.c( 'GameManager' )
  var i859 = data
  i858.numberOfClearableCategories = i859[0]
  i858.numberOfCategories = i859[1]
  i858.isGameStart = !!i859[2]
  i858.isGameOver = !!i859[3]
  return i858
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i860 = root || request.c( 'LevelManager' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'levelData')
  var i863 = i861[2]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 1, i862, '')
  }
  i860.grills = i862
  i860.guideTargetGrillIndex = i861[3]
  i860.guideDonorGrillIndex = i861[4]
  return i860
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i866 = root || request.c( 'TutorialManager' )
  var i867 = data
  i866.isTutorial = !!i867[0]
  request.r(i867[1], i867[2], 0, i866, 'handGuide')
  return i866
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i868 = root || request.c( 'GuideManager' )
  var i869 = data
  i868.idleThreshold = i869[0]
  i868.wobbleAngle = i869[1]
  i868.wobbleSpeed = i869[2]
  return i868
}

Deserializers["DragManager"] = function (request, data, root) {
  var i870 = root || request.c( 'DragManager' )
  var i871 = data
  i870.draggableLayer = UnityEngine.LayerMask.FromIntegerValue( i871[0] )
  i870.canDrag = !!i871[1]
  i870.limitDragTime = i871[2]
  request.r(i871[3], i871[4], 0, i870, 'dragVisual')
  return i870
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i872 = root || request.c( 'SoundManager' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.audioClips = i874
  request.r(i873[1], i873[2], 0, i872, 'sound')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'clip')
  request.r(i879[2], i879[3], 0, i878, 'outputAudioMixerGroup')
  i878.playOnAwake = !!i879[4]
  i878.loop = !!i879[5]
  i878.time = i879[6]
  i878.volume = i879[7]
  i878.pitch = i879[8]
  i878.enabled = !!i879[9]
  return i878
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i880 = root || request.c( 'CameraManager' )
  var i881 = data
  i880.refWidth = i881[0]
  i880.refHeight = i881[1]
  i880.refOrthoSize = i881[2]
  request.r(i881[3], i881[4], 0, i880, 'mainCamera')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i883 = data
  i882.ambientIntensity = i883[0]
  i882.reflectionIntensity = i883[1]
  i882.ambientMode = i883[2]
  i882.ambientLight = new pc.Color(i883[3], i883[4], i883[5], i883[6])
  i882.ambientSkyColor = new pc.Color(i883[7], i883[8], i883[9], i883[10])
  i882.ambientGroundColor = new pc.Color(i883[11], i883[12], i883[13], i883[14])
  i882.ambientEquatorColor = new pc.Color(i883[15], i883[16], i883[17], i883[18])
  i882.fogColor = new pc.Color(i883[19], i883[20], i883[21], i883[22])
  i882.fogEndDistance = i883[23]
  i882.fogStartDistance = i883[24]
  i882.fogDensity = i883[25]
  i882.fog = !!i883[26]
  request.r(i883[27], i883[28], 0, i882, 'skybox')
  i882.fogMode = i883[29]
  var i885 = i883[30]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i885[i + 0]) );
  }
  i882.lightmaps = i884
  i882.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i883[31], i882.lightProbes)
  i882.lightmapsMode = i883[32]
  i882.mixedBakeMode = i883[33]
  i882.environmentLightingMode = i883[34]
  i882.ambientProbe = new pc.SphericalHarmonicsL2(i883[35])
  request.r(i883[36], i883[37], 0, i882, 'customReflection')
  request.r(i883[38], i883[39], 0, i882, 'defaultReflection')
  i882.defaultReflectionMode = i883[40]
  i882.defaultReflectionResolution = i883[41]
  i882.sunLightObjectId = i883[42]
  i882.pixelLightCount = i883[43]
  i882.defaultReflectionHDR = !!i883[44]
  i882.hasLightDataAsset = !!i883[45]
  i882.hasManualGenerate = !!i883[46]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'lightmapColor')
  request.r(i889[2], i889[3], 0, i888, 'lightmapDirection')
  request.r(i889[4], i889[5], 0, i888, 'shadowMask')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i890 = root || new UnityEngine.LightProbes()
  var i891 = data
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i899 = data
  var i901 = i899[0]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i901[i + 0]));
  }
  i898.ShaderCompilationErrors = i900
  i898.name = i899[1]
  i898.guid = i899[2]
  var i903 = i899[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i898.shaderDefinedKeywords = i902
  var i905 = i899[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i905[i + 0]) );
  }
  i898.passes = i904
  var i907 = i899[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i907[i + 0]) );
  }
  i898.usePasses = i906
  var i909 = i899[6]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i909[i + 0]) );
  }
  i898.defaultParameterValues = i908
  request.r(i899[7], i899[8], 0, i898, 'unityFallbackShader')
  i898.readDepth = !!i899[9]
  i898.hasDepthOnlyPass = !!i899[10]
  i898.isCreatedByShaderGraph = !!i899[11]
  i898.disableBatching = !!i899[12]
  i898.compiled = !!i899[13]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i913 = data
  i912.shaderName = i913[0]
  i912.errorMessage = i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i918 = root || new pc.UnityShaderPass()
  var i919 = data
  i918.id = i919[0]
  i918.subShaderIndex = i919[1]
  i918.name = i919[2]
  i918.passType = i919[3]
  i918.grabPassTextureName = i919[4]
  i918.usePass = !!i919[5]
  i918.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[6], i918.zTest)
  i918.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[7], i918.zWrite)
  i918.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[8], i918.culling)
  i918.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i919[9], i918.blending)
  i918.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i919[10], i918.alphaBlending)
  i918.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[11], i918.colorWriteMask)
  i918.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[12], i918.offsetUnits)
  i918.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[13], i918.offsetFactor)
  i918.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[14], i918.stencilRef)
  i918.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[15], i918.stencilReadMask)
  i918.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[16], i918.stencilWriteMask)
  i918.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[17], i918.stencilOp)
  i918.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[18], i918.stencilOpFront)
  i918.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[19], i918.stencilOpBack)
  var i921 = i919[20]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i921[i + 0]) );
  }
  i918.tags = i920
  var i923 = i919[21]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.passDefinedKeywords = i922
  var i925 = i919[22]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i925[i + 0]) );
  }
  i918.passDefinedKeywordGroups = i924
  var i927 = i919[23]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i927[i + 0]) );
  }
  i918.variants = i926
  var i929 = i919[24]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i929[i + 0]) );
  }
  i918.excludedVariants = i928
  i918.hasDepthReader = !!i919[25]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i931 = data
  i930.val = i931[0]
  i930.name = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i933 = data
  i932.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[0], i932.src)
  i932.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[1], i932.dst)
  i932.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[2], i932.op)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i935 = data
  i934.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[0], i934.pass)
  i934.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[1], i934.fail)
  i934.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[2], i934.zFail)
  i934.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[3], i934.comp)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i939 = data
  i938.name = i939[0]
  i938.value = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.hasDiscard = !!i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i949 = data
  i948.passId = i949[0]
  i948.subShaderIndex = i949[1]
  var i951 = i949[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i948.keywords = i950
  i948.vertexProgram = i949[3]
  i948.fragmentProgram = i949[4]
  i948.exportedForWebGl2 = !!i949[5]
  i948.readDepth = !!i949[6]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'shader')
  i954.pass = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i959 = data
  i958.name = i959[0]
  i958.type = i959[1]
  i958.value = new pc.Vec4( i959[2], i959[3], i959[4], i959[5] )
  i958.textureValue = i959[6]
  i958.shaderPropertyFlag = i959[7]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i961 = data
  i960.name = i961[0]
  request.r(i961[1], i961[2], 0, i960, 'texture')
  i960.aabb = i961[3]
  i960.vertices = i961[4]
  i960.triangles = i961[5]
  i960.textureRect = UnityEngine.Rect.MinMaxRect(i961[6], i961[7], i961[8], i961[9])
  i960.packedRect = UnityEngine.Rect.MinMaxRect(i961[10], i961[11], i961[12], i961[13])
  i960.border = new pc.Vec4( i961[14], i961[15], i961[16], i961[17] )
  i960.transparency = i961[18]
  i960.bounds = i961[19]
  i960.pixelsPerUnit = i961[20]
  i960.textureWidth = i961[21]
  i960.textureHeight = i961[22]
  i960.nativeSize = new pc.Vec2( i961[23], i961[24] )
  i960.pivot = new pc.Vec2( i961[25], i961[26] )
  i960.textureRectOffset = new pc.Vec2( i961[27], i961[28] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i963 = data
  i962.name = i963[0]
  return i962
}

Deserializers["LevelData"] = function (request, data, root) {
  var i964 = root || request.c( 'LevelData' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('FoodData')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('FoodData', i967[i + 0]));
  }
  i964.categories = i966
  return i964
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i971 = data
  i970.useSafeMode = !!i971[0]
  i970.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i971[1], i970.safeModeOptions)
  i970.timeScale = i971[2]
  i970.unscaledTimeScale = i971[3]
  i970.useSmoothDeltaTime = !!i971[4]
  i970.maxSmoothUnscaledTime = i971[5]
  i970.rewindCallbackMode = i971[6]
  i970.showUnityEditorReport = !!i971[7]
  i970.logBehaviour = i971[8]
  i970.drawGizmos = !!i971[9]
  i970.defaultRecyclable = !!i971[10]
  i970.defaultAutoPlay = i971[11]
  i970.defaultUpdateType = i971[12]
  i970.defaultTimeScaleIndependent = !!i971[13]
  i970.defaultEaseType = i971[14]
  i970.defaultEaseOvershootOrAmplitude = i971[15]
  i970.defaultEasePeriod = i971[16]
  i970.defaultAutoKill = !!i971[17]
  i970.defaultLoopType = i971[18]
  i970.debugMode = !!i971[19]
  i970.debugStoreTargetId = !!i971[20]
  i970.showPreviewPanel = !!i971[21]
  i970.storeSettingsLocation = i971[22]
  i970.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i971[23], i970.modules)
  i970.createASMDEF = !!i971[24]
  i970.showPlayingTweens = !!i971[25]
  i970.showPausedTweens = !!i971[26]
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i973 = data
  i972.logBehaviour = i973[0]
  i972.nestedTweenFailureBehaviour = i973[1]
  return i972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i975 = data
  i974.showPanel = !!i975[0]
  i974.audioEnabled = !!i975[1]
  i974.physicsEnabled = !!i975[2]
  i974.physics2DEnabled = !!i975[3]
  i974.spriteEnabled = !!i975[4]
  i974.uiEnabled = !!i975[5]
  i974.uiToolkitEnabled = !!i975[6]
  i974.textMeshProEnabled = !!i975[7]
  i974.tk2DEnabled = !!i975[8]
  i974.deAudioEnabled = !!i975[9]
  i974.deUnityExtendedEnabled = !!i975[10]
  i974.epoOutlineEnabled = !!i975[11]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i979[i + 0]) );
  }
  i976.files = i978
  i976.componentToPrefabIds = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i983 = data
  i982.path = i983[0]
  request.r(i983[1], i983[2], 0, i982, 'unityObject')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i987[i + 0]) );
  }
  i984.scriptsExecutionOrder = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i989[i + 0]) );
  }
  i984.sortingLayers = i988
  var i991 = i985[2]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i991[i + 0]) );
  }
  i984.cullingLayers = i990
  i984.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i985[3], i984.timeSettings)
  i984.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i985[4], i984.physicsSettings)
  i984.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i985[5], i984.physics2DSettings)
  i984.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i985[6], i984.qualitySettings)
  i984.enableRealtimeShadows = !!i985[7]
  i984.enableAutoInstancing = !!i985[8]
  i984.enableStaticBatching = !!i985[9]
  i984.enableDynamicBatching = !!i985[10]
  i984.usePreservativeDynamicBatching = !!i985[11]
  i984.lightmapEncodingQuality = i985[12]
  i984.desiredColorSpace = i985[13]
  var i993 = i985[14]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i984.allTags = i992
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i997 = data
  i996.name = i997[0]
  i996.value = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  i1000.value = i1001[2]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1005 = data
  i1004.id = i1005[0]
  i1004.name = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1007 = data
  i1006.fixedDeltaTime = i1007[0]
  i1006.maximumDeltaTime = i1007[1]
  i1006.timeScale = i1007[2]
  i1006.maximumParticleTimestep = i1007[3]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1009 = data
  i1008.gravity = new pc.Vec3( i1009[0], i1009[1], i1009[2] )
  i1008.defaultSolverIterations = i1009[3]
  i1008.bounceThreshold = i1009[4]
  i1008.autoSyncTransforms = !!i1009[5]
  i1008.autoSimulation = !!i1009[6]
  var i1011 = i1009[7]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1011[i + 0]) );
  }
  i1008.collisionMatrix = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.layerId = i1015[1]
  i1014.otherLayerId = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'material')
  i1016.gravity = new pc.Vec2( i1017[2], i1017[3] )
  i1016.positionIterations = i1017[4]
  i1016.velocityIterations = i1017[5]
  i1016.velocityThreshold = i1017[6]
  i1016.maxLinearCorrection = i1017[7]
  i1016.maxAngularCorrection = i1017[8]
  i1016.maxTranslationSpeed = i1017[9]
  i1016.maxRotationSpeed = i1017[10]
  i1016.baumgarteScale = i1017[11]
  i1016.baumgarteTOIScale = i1017[12]
  i1016.timeToSleep = i1017[13]
  i1016.linearSleepTolerance = i1017[14]
  i1016.angularSleepTolerance = i1017[15]
  i1016.defaultContactOffset = i1017[16]
  i1016.autoSimulation = !!i1017[17]
  i1016.queriesHitTriggers = !!i1017[18]
  i1016.queriesStartInColliders = !!i1017[19]
  i1016.callbacksOnDisable = !!i1017[20]
  i1016.reuseCollisionCallbacks = !!i1017[21]
  i1016.autoSyncTransforms = !!i1017[22]
  var i1019 = i1017[23]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1019[i + 0]) );
  }
  i1016.collisionMatrix = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1023 = data
  i1022.enabled = !!i1023[0]
  i1022.layerId = i1023[1]
  i1022.otherLayerId = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1027[i + 0]) );
  }
  i1024.qualityLevels = i1026
  var i1029 = i1025[1]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1024.names = i1028
  i1024.shadows = i1025[2]
  i1024.anisotropicFiltering = i1025[3]
  i1024.antiAliasing = i1025[4]
  i1024.lodBias = i1025[5]
  i1024.shadowCascades = i1025[6]
  i1024.shadowDistance = i1025[7]
  i1024.shadowmaskMode = i1025[8]
  i1024.shadowProjection = i1025[9]
  i1024.shadowResolution = i1025[10]
  i1024.softParticles = !!i1025[11]
  i1024.softVegetation = !!i1025[12]
  i1024.activeColorSpace = i1025[13]
  i1024.desiredColorSpace = i1025[14]
  i1024.masterTextureLimit = i1025[15]
  i1024.maxQueuedFrames = i1025[16]
  i1024.particleRaycastBudget = i1025[17]
  i1024.pixelLightCount = i1025[18]
  i1024.realtimeReflectionProbes = !!i1025[19]
  i1024.shadowCascade2Split = i1025[20]
  i1024.shadowCascade4Split = new pc.Vec3( i1025[21], i1025[22], i1025[23] )
  i1024.streamingMipmapsActive = !!i1025[24]
  i1024.vSyncCount = i1025[25]
  i1024.asyncUploadBufferSize = i1025[26]
  i1024.asyncUploadTimeSlice = i1025[27]
  i1024.billboardsFaceCameraPosition = !!i1025[28]
  i1024.shadowNearPlaneOffset = i1025[29]
  i1024.streamingMipmapsMemoryBudget = i1025[30]
  i1024.maximumLODLevel = i1025[31]
  i1024.streamingMipmapsAddAllCameras = !!i1025[32]
  i1024.streamingMipmapsMaxLevelReduction = i1025[33]
  i1024.streamingMipmapsRenderersPerFrame = i1025[34]
  i1024.resolutionScalingFixedDPIFactor = i1025[35]
  i1024.streamingMipmapsMaxFileIORequests = i1025[36]
  i1024.currentQualityLevel = i1025[37]
  return i1024
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[1],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[44],"52":[44],"53":[44],"54":[44],"55":[44],"56":[44],"57":[1],"58":[59],"60":[61],"62":[61],"63":[64],"65":[9],"66":[1],"67":[68],"69":[70],"71":[63],"72":[64],"73":[59,64],"74":[64,75],"76":[64],"77":[75,64],"78":[59],"79":[75,64],"80":[64],"81":[82],"83":[82],"84":[82],"85":[64],"86":[64],"87":[63],"88":[75,64],"89":[64],"90":[63],"91":[64],"92":[64],"93":[64],"94":[64],"95":[64],"96":[64],"97":[64],"98":[64],"99":[64],"100":[75,64],"101":[64],"102":[64],"103":[64],"104":[64],"105":[75,64],"106":[64],"107":[70],"108":[70],"109":[70],"110":[70],"111":[1],"112":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Grill","FoodSlot","GrillGraphicController","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider","FoodSlotGraphicController","GameManager","LevelManager","LevelData","TutorialManager","GuideManager","DragManager","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","CameraManager","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "Steam It Ver1";

Deserializers.lunaInitializationTime = "05/04/2026 08:13:28";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PLY_SteamIt_050426_Tu_Test";

Deserializers.lunaAppID = "22477";

Deserializers.projectId = "50589960236e40f4eb795c5fe143becf";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1883";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3939";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "349c4096-9667-413b-9394-8d83cd0403ab";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

