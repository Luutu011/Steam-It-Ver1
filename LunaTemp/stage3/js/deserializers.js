var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointSpring' )
  var i259 = data
  i258.spring = i259[0]
  i258.damper = i259[1]
  i258.targetPosition = i259[2]
  return i258
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointMotor' )
  var i261 = data
  i260.m_TargetVelocity = i261[0]
  i260.m_Force = i261[1]
  i260.m_FreeSpin = i261[2]
  return i260
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointLimits' )
  var i263 = data
  i262.m_Min = i263[0]
  i262.m_Max = i263[1]
  i262.m_Bounciness = i263[2]
  i262.m_BounceMinVelocity = i263[3]
  i262.m_ContactDistance = i263[4]
  i262.minBounce = i263[5]
  i262.maxBounce = i263[6]
  return i262
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointDrive' )
  var i265 = data
  i264.m_PositionSpring = i265[0]
  i264.m_PositionDamper = i265[1]
  i264.m_MaximumForce = i265[2]
  i264.m_UseAcceleration = i265[3]
  return i264
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i267 = data
  i266.m_Spring = i267[0]
  i266.m_Damper = i267[1]
  return i266
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i269 = data
  i268.m_Limit = i269[0]
  i268.m_Bounciness = i269[1]
  i268.m_ContactDistance = i269[2]
  return i268
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i271 = data
  i270.m_ExtremumSlip = i271[0]
  i270.m_ExtremumValue = i271[1]
  i270.m_AsymptoteSlip = i271[2]
  i270.m_AsymptoteValue = i271[3]
  i270.m_Stiffness = i271[4]
  return i270
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i273 = data
  i272.m_LowerAngle = i273[0]
  i272.m_UpperAngle = i273[1]
  return i272
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i275 = data
  i274.m_MotorSpeed = i275[0]
  i274.m_MaximumMotorTorque = i275[1]
  return i274
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i277 = data
  i276.m_DampingRatio = i277[0]
  i276.m_Frequency = i277[1]
  i276.m_Angle = i277[2]
  return i276
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i279 = data
  i278.m_LowerTranslation = i279[0]
  i278.m_UpperTranslation = i279[1]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i280 = root || new pc.UnityMaterial()
  var i281 = data
  i280.name = i281[0]
  request.r(i281[1], i281[2], 0, i280, 'shader')
  i280.renderQueue = i281[3]
  i280.enableInstancing = !!i281[4]
  var i283 = i281[5]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i283[i + 0]) );
  }
  i280.floatParameters = i282
  var i285 = i281[6]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i285[i + 0]) );
  }
  i280.colorParameters = i284
  var i287 = i281[7]
  var i286 = []
  for(var i = 0; i < i287.length; i += 1) {
    i286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i287[i + 0]) );
  }
  i280.vectorParameters = i286
  var i289 = i281[8]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i289[i + 0]) );
  }
  i280.textureParameters = i288
  var i291 = i281[9]
  var i290 = []
  for(var i = 0; i < i291.length; i += 1) {
    i290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i291[i + 0]) );
  }
  i280.materialFlags = i290
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i295 = data
  i294.name = i295[0]
  i294.value = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i299 = data
  i298.name = i299[0]
  i298.value = new pc.Color(i299[1], i299[2], i299[3], i299[4])
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i303 = data
  i302.name = i303[0]
  i302.value = new pc.Vec4( i303[1], i303[2], i303[3], i303[4] )
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i307 = data
  i306.name = i307[0]
  request.r(i307[1], i307[2], 0, i306, 'value')
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i311 = data
  i310.name = i311[0]
  i310.enabled = !!i311[1]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i313 = data
  i312.name = i313[0]
  i312.width = i313[1]
  i312.height = i313[2]
  i312.mipmapCount = i313[3]
  i312.anisoLevel = i313[4]
  i312.filterMode = i313[5]
  i312.hdr = !!i313[6]
  i312.format = i313[7]
  i312.wrapMode = i313[8]
  i312.alphaIsTransparency = !!i313[9]
  i312.alphaSource = i313[10]
  i312.graphicsFormat = i313[11]
  i312.sRGBTexture = !!i313[12]
  i312.desiredColorSpace = i313[13]
  i312.wrapU = i313[14]
  i312.wrapV = i313[15]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i315 = data
  i314.name = i315[0]
  i314.index = i315[1]
  i314.startup = !!i315[2]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i317 = data
  i316.aspect = i317[0]
  i316.orthographic = !!i317[1]
  i316.orthographicSize = i317[2]
  i316.backgroundColor = new pc.Color(i317[3], i317[4], i317[5], i317[6])
  i316.nearClipPlane = i317[7]
  i316.farClipPlane = i317[8]
  i316.fieldOfView = i317[9]
  i316.depth = i317[10]
  i316.clearFlags = i317[11]
  i316.cullingMask = i317[12]
  i316.rect = i317[13]
  request.r(i317[14], i317[15], 0, i316, 'targetTexture')
  i316.usePhysicalProperties = !!i317[16]
  i316.focalLength = i317[17]
  i316.sensorSize = new pc.Vec2( i317[18], i317[19] )
  i316.lensShift = new pc.Vec2( i317[20], i317[21] )
  i316.gateFit = i317[22]
  i316.commandBufferCount = i317[23]
  i316.cameraType = i317[24]
  i316.enabled = !!i317[25]
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i319 = data
  i318.name = i319[0]
  i318.tagId = i319[1]
  i318.enabled = !!i319[2]
  i318.isStatic = !!i319[3]
  i318.layer = i319[4]
  return i318
}

Deserializers["Grill"] = function (request, data, root) {
  var i320 = root || request.c( 'Grill' )
  var i321 = data
  var i323 = i321[0]
  var i322 = new (System.Collections.Generic.List$1(Bridge.ns('FoodSlot')))
  for(var i = 0; i < i323.length; i += 2) {
  request.r(i323[i + 0], i323[i + 1], 1, i322, '')
  }
  i320.foodSlots = i322
  request.r(i321[1], i321[2], 0, i320, 'graphic')
  request.r(i321[3], i321[4], 0, i320, 'dishTarget')
  return i320
}

Deserializers["GrillGraphicController"] = function (request, data, root) {
  var i326 = root || request.c( 'GrillGraphicController' )
  var i327 = data
  request.r(i327[0], i327[1], 0, i326, 'cover')
  request.r(i327[2], i327[3], 0, i326, 'coverSR')
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i329 = data
  i328.center = new pc.Vec3( i329[0], i329[1], i329[2] )
  i328.size = new pc.Vec3( i329[3], i329[4], i329[5] )
  i328.enabled = !!i329[6]
  i328.isTrigger = !!i329[7]
  request.r(i329[8], i329[9], 0, i328, 'material')
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i331 = data
  i330.color = new pc.Color(i331[0], i331[1], i331[2], i331[3])
  request.r(i331[4], i331[5], 0, i330, 'sprite')
  i330.flipX = !!i331[6]
  i330.flipY = !!i331[7]
  i330.drawMode = i331[8]
  i330.size = new pc.Vec2( i331[9], i331[10] )
  i330.tileMode = i331[11]
  i330.adaptiveModeThreshold = i331[12]
  i330.maskInteraction = i331[13]
  i330.spriteSortPoint = i331[14]
  i330.enabled = !!i331[15]
  request.r(i331[16], i331[17], 0, i330, 'sharedMaterial')
  var i333 = i331[18]
  var i332 = []
  for(var i = 0; i < i333.length; i += 2) {
  request.r(i333[i + 0], i333[i + 1], 2, i332, '')
  }
  i330.sharedMaterials = i332
  i330.receiveShadows = !!i331[19]
  i330.shadowCastingMode = i331[20]
  i330.sortingLayerID = i331[21]
  i330.sortingOrder = i331[22]
  i330.lightmapIndex = i331[23]
  i330.lightmapSceneIndex = i331[24]
  i330.lightmapScaleOffset = new pc.Vec4( i331[25], i331[26], i331[27], i331[28] )
  i330.lightProbeUsage = i331[29]
  i330.reflectionProbeUsage = i331[30]
  return i330
}

Deserializers["FoodSlot"] = function (request, data, root) {
  var i336 = root || request.c( 'FoodSlot' )
  var i337 = data
  i336.food = request.d('FoodData', i337[0], i336.food)
  request.r(i337[1], i337[2], 0, i336, 'sr')
  return i336
}

Deserializers["FoodData"] = function (request, data, root) {
  var i338 = root || request.c( 'FoodData' )
  var i339 = data
  i338.foodType = i339[0]
  request.r(i339[1], i339[2], 0, i338, 'foodSprite')
  return i338
}

Deserializers["FoodSlotGraphicController"] = function (request, data, root) {
  var i340 = root || request.c( 'FoodSlotGraphicController' )
  var i341 = data
  request.r(i341[0], i341[1], 0, i340, 'dish')
  i340.foodOffsetWidth = i341[2]
  i340.foodOffsetHeight = i341[3]
  return i340
}

Deserializers["GameManager"] = function (request, data, root) {
  var i342 = root || request.c( 'GameManager' )
  var i343 = data
  i342.numberOfClearableCategories = i343[0]
  i342.numberOfCategories = i343[1]
  i342.isGameStart = !!i343[2]
  i342.isGameOver = !!i343[3]
  return i342
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i344 = root || request.c( 'LevelManager' )
  var i345 = data
  request.r(i345[0], i345[1], 0, i344, 'levelData')
  var i347 = i345[2]
  var i346 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i347.length; i += 2) {
  request.r(i347[i + 0], i347[i + 1], 1, i346, '')
  }
  i344.grills = i346
  i344.guideTargetGrillIndex = i345[3]
  i344.guideDonorGrillIndex = i345[4]
  return i344
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i350 = root || request.c( 'TutorialManager' )
  var i351 = data
  i350.isTutorial = !!i351[0]
  request.r(i351[1], i351[2], 0, i350, 'handGuide')
  return i350
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i352 = root || request.c( 'GuideManager' )
  var i353 = data
  i352.idleThreshold = i353[0]
  i352.wobbleAngle = i353[1]
  i352.wobbleSpeed = i353[2]
  return i352
}

Deserializers["DragManager"] = function (request, data, root) {
  var i354 = root || request.c( 'DragManager' )
  var i355 = data
  i354.draggableLayer = UnityEngine.LayerMask.FromIntegerValue( i355[0] )
  i354.grillLayer = UnityEngine.LayerMask.FromIntegerValue( i355[1] )
  i354.canDrag = !!i355[2]
  i354.limitDragTime = i355[3]
  request.r(i355[4], i355[5], 0, i354, 'dragVisual')
  return i354
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i356 = root || request.c( 'SoundManager' )
  var i357 = data
  var i359 = i357[0]
  var i358 = []
  for(var i = 0; i < i359.length; i += 2) {
  request.r(i359[i + 0], i359[i + 1], 2, i358, '')
  }
  i356.audioClips = i358
  request.r(i357[1], i357[2], 0, i356, 'sound')
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, 'clip')
  request.r(i363[2], i363[3], 0, i362, 'outputAudioMixerGroup')
  i362.playOnAwake = !!i363[4]
  i362.loop = !!i363[5]
  i362.time = i363[6]
  i362.volume = i363[7]
  i362.pitch = i363[8]
  i362.enabled = !!i363[9]
  return i362
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i364 = root || request.c( 'CameraManager' )
  var i365 = data
  i364.refWidth = i365[0]
  i364.refHeight = i365[1]
  i364.refOrthoSize = i365[2]
  request.r(i365[3], i365[4], 0, i364, 'mainCamera')
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i367 = data
  i366.ambientIntensity = i367[0]
  i366.reflectionIntensity = i367[1]
  i366.ambientMode = i367[2]
  i366.ambientLight = new pc.Color(i367[3], i367[4], i367[5], i367[6])
  i366.ambientSkyColor = new pc.Color(i367[7], i367[8], i367[9], i367[10])
  i366.ambientGroundColor = new pc.Color(i367[11], i367[12], i367[13], i367[14])
  i366.ambientEquatorColor = new pc.Color(i367[15], i367[16], i367[17], i367[18])
  i366.fogColor = new pc.Color(i367[19], i367[20], i367[21], i367[22])
  i366.fogEndDistance = i367[23]
  i366.fogStartDistance = i367[24]
  i366.fogDensity = i367[25]
  i366.fog = !!i367[26]
  request.r(i367[27], i367[28], 0, i366, 'skybox')
  i366.fogMode = i367[29]
  var i369 = i367[30]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i369[i + 0]) );
  }
  i366.lightmaps = i368
  i366.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i367[31], i366.lightProbes)
  i366.lightmapsMode = i367[32]
  i366.mixedBakeMode = i367[33]
  i366.environmentLightingMode = i367[34]
  i366.ambientProbe = new pc.SphericalHarmonicsL2(i367[35])
  request.r(i367[36], i367[37], 0, i366, 'customReflection')
  request.r(i367[38], i367[39], 0, i366, 'defaultReflection')
  i366.defaultReflectionMode = i367[40]
  i366.defaultReflectionResolution = i367[41]
  i366.sunLightObjectId = i367[42]
  i366.pixelLightCount = i367[43]
  i366.defaultReflectionHDR = !!i367[44]
  i366.hasLightDataAsset = !!i367[45]
  i366.hasManualGenerate = !!i367[46]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i373 = data
  request.r(i373[0], i373[1], 0, i372, 'lightmapColor')
  request.r(i373[2], i373[3], 0, i372, 'lightmapDirection')
  request.r(i373[4], i373[5], 0, i372, 'shadowMask')
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i374 = root || new UnityEngine.LightProbes()
  var i375 = data
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i383 = data
  var i385 = i383[0]
  var i384 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i385.length; i += 1) {
    i384.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i385[i + 0]));
  }
  i382.ShaderCompilationErrors = i384
  i382.name = i383[1]
  i382.guid = i383[2]
  var i387 = i383[3]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( i387[i + 0] );
  }
  i382.shaderDefinedKeywords = i386
  var i389 = i383[4]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i389[i + 0]) );
  }
  i382.passes = i388
  var i391 = i383[5]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i391[i + 0]) );
  }
  i382.usePasses = i390
  var i393 = i383[6]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i393[i + 0]) );
  }
  i382.defaultParameterValues = i392
  request.r(i383[7], i383[8], 0, i382, 'unityFallbackShader')
  i382.readDepth = !!i383[9]
  i382.hasDepthOnlyPass = !!i383[10]
  i382.isCreatedByShaderGraph = !!i383[11]
  i382.disableBatching = !!i383[12]
  i382.compiled = !!i383[13]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i397 = data
  i396.shaderName = i397[0]
  i396.errorMessage = i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i402 = root || new pc.UnityShaderPass()
  var i403 = data
  i402.id = i403[0]
  i402.subShaderIndex = i403[1]
  i402.name = i403[2]
  i402.passType = i403[3]
  i402.grabPassTextureName = i403[4]
  i402.usePass = !!i403[5]
  i402.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[6], i402.zTest)
  i402.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[7], i402.zWrite)
  i402.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[8], i402.culling)
  i402.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i403[9], i402.blending)
  i402.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i403[10], i402.alphaBlending)
  i402.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[11], i402.colorWriteMask)
  i402.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[12], i402.offsetUnits)
  i402.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[13], i402.offsetFactor)
  i402.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[14], i402.stencilRef)
  i402.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[15], i402.stencilReadMask)
  i402.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[16], i402.stencilWriteMask)
  i402.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i403[17], i402.stencilOp)
  i402.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i403[18], i402.stencilOpFront)
  i402.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i403[19], i402.stencilOpBack)
  var i405 = i403[20]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i405[i + 0]) );
  }
  i402.tags = i404
  var i407 = i403[21]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( i407[i + 0] );
  }
  i402.passDefinedKeywords = i406
  var i409 = i403[22]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i409[i + 0]) );
  }
  i402.passDefinedKeywordGroups = i408
  var i411 = i403[23]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i411[i + 0]) );
  }
  i402.variants = i410
  var i413 = i403[24]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i413[i + 0]) );
  }
  i402.excludedVariants = i412
  i402.hasDepthReader = !!i403[25]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i415 = data
  i414.val = i415[0]
  i414.name = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i417 = data
  i416.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[0], i416.src)
  i416.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[1], i416.dst)
  i416.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[2], i416.op)
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i419 = data
  i418.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[0], i418.pass)
  i418.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[1], i418.fail)
  i418.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[2], i418.zFail)
  i418.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[3], i418.comp)
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i423 = data
  i422.name = i423[0]
  i422.value = i423[1]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i427 = data
  var i429 = i427[0]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i426.keywords = i428
  i426.hasDiscard = !!i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i433 = data
  i432.passId = i433[0]
  i432.subShaderIndex = i433[1]
  var i435 = i433[2]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( i435[i + 0] );
  }
  i432.keywords = i434
  i432.vertexProgram = i433[3]
  i432.fragmentProgram = i433[4]
  i432.exportedForWebGl2 = !!i433[5]
  i432.readDepth = !!i433[6]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i439 = data
  request.r(i439[0], i439[1], 0, i438, 'shader')
  i438.pass = i439[2]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i443 = data
  i442.name = i443[0]
  i442.type = i443[1]
  i442.value = new pc.Vec4( i443[2], i443[3], i443[4], i443[5] )
  i442.textureValue = i443[6]
  i442.shaderPropertyFlag = i443[7]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i445 = data
  i444.name = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'texture')
  i444.aabb = i445[3]
  i444.vertices = i445[4]
  i444.triangles = i445[5]
  i444.textureRect = UnityEngine.Rect.MinMaxRect(i445[6], i445[7], i445[8], i445[9])
  i444.packedRect = UnityEngine.Rect.MinMaxRect(i445[10], i445[11], i445[12], i445[13])
  i444.border = new pc.Vec4( i445[14], i445[15], i445[16], i445[17] )
  i444.transparency = i445[18]
  i444.bounds = i445[19]
  i444.pixelsPerUnit = i445[20]
  i444.textureWidth = i445[21]
  i444.textureHeight = i445[22]
  i444.nativeSize = new pc.Vec2( i445[23], i445[24] )
  i444.pivot = new pc.Vec2( i445[25], i445[26] )
  i444.textureRectOffset = new pc.Vec2( i445[27], i445[28] )
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i447 = data
  i446.name = i447[0]
  return i446
}

Deserializers["LevelData"] = function (request, data, root) {
  var i448 = root || request.c( 'LevelData' )
  var i449 = data
  var i451 = i449[0]
  var i450 = new (System.Collections.Generic.List$1(Bridge.ns('FoodData')))
  for(var i = 0; i < i451.length; i += 1) {
    i450.add(request.d('FoodData', i451[i + 0]));
  }
  i448.categories = i450
  return i448
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i454 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i455 = data
  i454.useSafeMode = !!i455[0]
  i454.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i455[1], i454.safeModeOptions)
  i454.timeScale = i455[2]
  i454.unscaledTimeScale = i455[3]
  i454.useSmoothDeltaTime = !!i455[4]
  i454.maxSmoothUnscaledTime = i455[5]
  i454.rewindCallbackMode = i455[6]
  i454.showUnityEditorReport = !!i455[7]
  i454.logBehaviour = i455[8]
  i454.drawGizmos = !!i455[9]
  i454.defaultRecyclable = !!i455[10]
  i454.defaultAutoPlay = i455[11]
  i454.defaultUpdateType = i455[12]
  i454.defaultTimeScaleIndependent = !!i455[13]
  i454.defaultEaseType = i455[14]
  i454.defaultEaseOvershootOrAmplitude = i455[15]
  i454.defaultEasePeriod = i455[16]
  i454.defaultAutoKill = !!i455[17]
  i454.defaultLoopType = i455[18]
  i454.debugMode = !!i455[19]
  i454.debugStoreTargetId = !!i455[20]
  i454.showPreviewPanel = !!i455[21]
  i454.storeSettingsLocation = i455[22]
  i454.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i455[23], i454.modules)
  i454.createASMDEF = !!i455[24]
  i454.showPlayingTweens = !!i455[25]
  i454.showPausedTweens = !!i455[26]
  return i454
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i456 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i457 = data
  i456.logBehaviour = i457[0]
  i456.nestedTweenFailureBehaviour = i457[1]
  return i456
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i459 = data
  i458.showPanel = !!i459[0]
  i458.audioEnabled = !!i459[1]
  i458.physicsEnabled = !!i459[2]
  i458.physics2DEnabled = !!i459[3]
  i458.spriteEnabled = !!i459[4]
  i458.uiEnabled = !!i459[5]
  i458.uiToolkitEnabled = !!i459[6]
  i458.textMeshProEnabled = !!i459[7]
  i458.tk2DEnabled = !!i459[8]
  i458.deAudioEnabled = !!i459[9]
  i458.deUnityExtendedEnabled = !!i459[10]
  i458.epoOutlineEnabled = !!i459[11]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i463[i + 0]) );
  }
  i460.files = i462
  i460.componentToPrefabIds = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i467 = data
  i466.path = i467[0]
  request.r(i467[1], i467[2], 0, i466, 'unityObject')
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i469 = data
  var i471 = i469[0]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i471[i + 0]) );
  }
  i468.scriptsExecutionOrder = i470
  var i473 = i469[1]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i473[i + 0]) );
  }
  i468.sortingLayers = i472
  var i475 = i469[2]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i475[i + 0]) );
  }
  i468.cullingLayers = i474
  i468.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i469[3], i468.timeSettings)
  i468.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i469[4], i468.physicsSettings)
  i468.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i469[5], i468.physics2DSettings)
  i468.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i469[6], i468.qualitySettings)
  i468.enableRealtimeShadows = !!i469[7]
  i468.enableAutoInstancing = !!i469[8]
  i468.enableStaticBatching = !!i469[9]
  i468.enableDynamicBatching = !!i469[10]
  i468.usePreservativeDynamicBatching = !!i469[11]
  i468.lightmapEncodingQuality = i469[12]
  i468.desiredColorSpace = i469[13]
  var i477 = i469[14]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i468.allTags = i476
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i481 = data
  i480.name = i481[0]
  i480.value = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i485 = data
  i484.id = i485[0]
  i484.name = i485[1]
  i484.value = i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i489 = data
  i488.id = i489[0]
  i488.name = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i491 = data
  i490.fixedDeltaTime = i491[0]
  i490.maximumDeltaTime = i491[1]
  i490.timeScale = i491[2]
  i490.maximumParticleTimestep = i491[3]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i493 = data
  i492.gravity = new pc.Vec3( i493[0], i493[1], i493[2] )
  i492.defaultSolverIterations = i493[3]
  i492.bounceThreshold = i493[4]
  i492.autoSyncTransforms = !!i493[5]
  i492.autoSimulation = !!i493[6]
  var i495 = i493[7]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i495[i + 0]) );
  }
  i492.collisionMatrix = i494
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i499 = data
  i498.enabled = !!i499[0]
  i498.layerId = i499[1]
  i498.otherLayerId = i499[2]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'material')
  i500.gravity = new pc.Vec2( i501[2], i501[3] )
  i500.positionIterations = i501[4]
  i500.velocityIterations = i501[5]
  i500.velocityThreshold = i501[6]
  i500.maxLinearCorrection = i501[7]
  i500.maxAngularCorrection = i501[8]
  i500.maxTranslationSpeed = i501[9]
  i500.maxRotationSpeed = i501[10]
  i500.baumgarteScale = i501[11]
  i500.baumgarteTOIScale = i501[12]
  i500.timeToSleep = i501[13]
  i500.linearSleepTolerance = i501[14]
  i500.angularSleepTolerance = i501[15]
  i500.defaultContactOffset = i501[16]
  i500.autoSimulation = !!i501[17]
  i500.queriesHitTriggers = !!i501[18]
  i500.queriesStartInColliders = !!i501[19]
  i500.callbacksOnDisable = !!i501[20]
  i500.reuseCollisionCallbacks = !!i501[21]
  i500.autoSyncTransforms = !!i501[22]
  var i503 = i501[23]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i503[i + 0]) );
  }
  i500.collisionMatrix = i502
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.layerId = i507[1]
  i506.otherLayerId = i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i509 = data
  var i511 = i509[0]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i511[i + 0]) );
  }
  i508.qualityLevels = i510
  var i513 = i509[1]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( i513[i + 0] );
  }
  i508.names = i512
  i508.shadows = i509[2]
  i508.anisotropicFiltering = i509[3]
  i508.antiAliasing = i509[4]
  i508.lodBias = i509[5]
  i508.shadowCascades = i509[6]
  i508.shadowDistance = i509[7]
  i508.shadowmaskMode = i509[8]
  i508.shadowProjection = i509[9]
  i508.shadowResolution = i509[10]
  i508.softParticles = !!i509[11]
  i508.softVegetation = !!i509[12]
  i508.activeColorSpace = i509[13]
  i508.desiredColorSpace = i509[14]
  i508.masterTextureLimit = i509[15]
  i508.maxQueuedFrames = i509[16]
  i508.particleRaycastBudget = i509[17]
  i508.pixelLightCount = i509[18]
  i508.realtimeReflectionProbes = !!i509[19]
  i508.shadowCascade2Split = i509[20]
  i508.shadowCascade4Split = new pc.Vec3( i509[21], i509[22], i509[23] )
  i508.streamingMipmapsActive = !!i509[24]
  i508.vSyncCount = i509[25]
  i508.asyncUploadBufferSize = i509[26]
  i508.asyncUploadTimeSlice = i509[27]
  i508.billboardsFaceCameraPosition = !!i509[28]
  i508.shadowNearPlaneOffset = i509[29]
  i508.streamingMipmapsMemoryBudget = i509[30]
  i508.maximumLODLevel = i509[31]
  i508.streamingMipmapsAddAllCameras = !!i509[32]
  i508.streamingMipmapsMaxLevelReduction = i509[33]
  i508.streamingMipmapsRenderersPerFrame = i509[34]
  i508.resolutionScalingFixedDPIFactor = i509[35]
  i508.streamingMipmapsMaxFileIORequests = i509[36]
  i508.currentQualityLevel = i509[37]
  return i508
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[1],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[44],"52":[44],"53":[44],"54":[44],"55":[44],"56":[44],"57":[1],"58":[59],"60":[61],"62":[61],"63":[64],"65":[9],"66":[1],"67":[68],"69":[70],"71":[63],"72":[64],"73":[59,64],"74":[64,75],"76":[64],"77":[75,64],"78":[59],"79":[75,64],"80":[64],"81":[82],"83":[82],"84":[82],"85":[64],"86":[64],"87":[63],"88":[75,64],"89":[64],"90":[63],"91":[64],"92":[64],"93":[64],"94":[64],"95":[64],"96":[64],"97":[64],"98":[64],"99":[64],"100":[75,64],"101":[64],"102":[64],"103":[64],"104":[64],"105":[75,64],"106":[64],"107":[70],"108":[70],"109":[70],"110":[70],"111":[1],"112":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Grill","FoodSlot","GrillGraphicController","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.Sprite","UnityEngine.Material","FoodSlotGraphicController","GameManager","LevelManager","LevelData","TutorialManager","GuideManager","DragManager","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","CameraManager","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "Steam It Ver1";

Deserializers.lunaInitializationTime = "05/05/2026 01:55:51";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "fecc4b01-eefd-4a7a-8d89-5c867e026ddd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

