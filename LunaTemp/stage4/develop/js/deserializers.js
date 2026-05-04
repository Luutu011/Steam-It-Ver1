var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointSpring' )
  var i257 = data
  i256.spring = i257[0]
  i256.damper = i257[1]
  i256.targetPosition = i257[2]
  return i256
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointMotor' )
  var i259 = data
  i258.m_TargetVelocity = i259[0]
  i258.m_Force = i259[1]
  i258.m_FreeSpin = i259[2]
  return i258
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointLimits' )
  var i261 = data
  i260.m_Min = i261[0]
  i260.m_Max = i261[1]
  i260.m_Bounciness = i261[2]
  i260.m_BounceMinVelocity = i261[3]
  i260.m_ContactDistance = i261[4]
  i260.minBounce = i261[5]
  i260.maxBounce = i261[6]
  return i260
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointDrive' )
  var i263 = data
  i262.m_PositionSpring = i263[0]
  i262.m_PositionDamper = i263[1]
  i262.m_MaximumForce = i263[2]
  i262.m_UseAcceleration = i263[3]
  return i262
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i265 = data
  i264.m_Spring = i265[0]
  i264.m_Damper = i265[1]
  return i264
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i267 = data
  i266.m_Limit = i267[0]
  i266.m_Bounciness = i267[1]
  i266.m_ContactDistance = i267[2]
  return i266
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i269 = data
  i268.m_ExtremumSlip = i269[0]
  i268.m_ExtremumValue = i269[1]
  i268.m_AsymptoteSlip = i269[2]
  i268.m_AsymptoteValue = i269[3]
  i268.m_Stiffness = i269[4]
  return i268
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i271 = data
  i270.m_LowerAngle = i271[0]
  i270.m_UpperAngle = i271[1]
  return i270
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i273 = data
  i272.m_MotorSpeed = i273[0]
  i272.m_MaximumMotorTorque = i273[1]
  return i272
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i275 = data
  i274.m_DampingRatio = i275[0]
  i274.m_Frequency = i275[1]
  i274.m_Angle = i275[2]
  return i274
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i277 = data
  i276.m_LowerTranslation = i277[0]
  i276.m_UpperTranslation = i277[1]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i278 = root || new pc.UnityMaterial()
  var i279 = data
  i278.name = i279[0]
  request.r(i279[1], i279[2], 0, i278, 'shader')
  i278.renderQueue = i279[3]
  i278.enableInstancing = !!i279[4]
  var i281 = i279[5]
  var i280 = []
  for(var i = 0; i < i281.length; i += 1) {
    i280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i281[i + 0]) );
  }
  i278.floatParameters = i280
  var i283 = i279[6]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i283[i + 0]) );
  }
  i278.colorParameters = i282
  var i285 = i279[7]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i285[i + 0]) );
  }
  i278.vectorParameters = i284
  var i287 = i279[8]
  var i286 = []
  for(var i = 0; i < i287.length; i += 1) {
    i286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i287[i + 0]) );
  }
  i278.textureParameters = i286
  var i289 = i279[9]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i289[i + 0]) );
  }
  i278.materialFlags = i288
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i293 = data
  i292.name = i293[0]
  i292.value = i293[1]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i297 = data
  i296.name = i297[0]
  i296.value = new pc.Color(i297[1], i297[2], i297[3], i297[4])
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i301 = data
  i300.name = i301[0]
  i300.value = new pc.Vec4( i301[1], i301[2], i301[3], i301[4] )
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i305 = data
  i304.name = i305[0]
  request.r(i305[1], i305[2], 0, i304, 'value')
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i309 = data
  i308.name = i309[0]
  i308.enabled = !!i309[1]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i311 = data
  i310.name = i311[0]
  i310.width = i311[1]
  i310.height = i311[2]
  i310.mipmapCount = i311[3]
  i310.anisoLevel = i311[4]
  i310.filterMode = i311[5]
  i310.hdr = !!i311[6]
  i310.format = i311[7]
  i310.wrapMode = i311[8]
  i310.alphaIsTransparency = !!i311[9]
  i310.alphaSource = i311[10]
  i310.graphicsFormat = i311[11]
  i310.sRGBTexture = !!i311[12]
  i310.desiredColorSpace = i311[13]
  i310.wrapU = i311[14]
  i310.wrapV = i311[15]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i313 = data
  i312.name = i313[0]
  i312.index = i313[1]
  i312.startup = !!i313[2]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i315 = data
  i314.aspect = i315[0]
  i314.orthographic = !!i315[1]
  i314.orthographicSize = i315[2]
  i314.backgroundColor = new pc.Color(i315[3], i315[4], i315[5], i315[6])
  i314.nearClipPlane = i315[7]
  i314.farClipPlane = i315[8]
  i314.fieldOfView = i315[9]
  i314.depth = i315[10]
  i314.clearFlags = i315[11]
  i314.cullingMask = i315[12]
  i314.rect = i315[13]
  request.r(i315[14], i315[15], 0, i314, 'targetTexture')
  i314.usePhysicalProperties = !!i315[16]
  i314.focalLength = i315[17]
  i314.sensorSize = new pc.Vec2( i315[18], i315[19] )
  i314.lensShift = new pc.Vec2( i315[20], i315[21] )
  i314.gateFit = i315[22]
  i314.commandBufferCount = i315[23]
  i314.cameraType = i315[24]
  i314.enabled = !!i315[25]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i317 = data
  i316.name = i317[0]
  i316.tagId = i317[1]
  i316.enabled = !!i317[2]
  i316.isStatic = !!i317[3]
  i316.layer = i317[4]
  return i316
}

Deserializers["Grill"] = function (request, data, root) {
  var i318 = root || request.c( 'Grill' )
  var i319 = data
  var i321 = i319[0]
  var i320 = new (System.Collections.Generic.List$1(Bridge.ns('FoodSlot')))
  for(var i = 0; i < i321.length; i += 2) {
  request.r(i321[i + 0], i321[i + 1], 1, i320, '')
  }
  i318.foodSlots = i320
  request.r(i319[1], i319[2], 0, i318, 'graphic')
  request.r(i319[3], i319[4], 0, i318, 'dishTarget')
  return i318
}

Deserializers["GrillGraphicController"] = function (request, data, root) {
  var i324 = root || request.c( 'GrillGraphicController' )
  var i325 = data
  request.r(i325[0], i325[1], 0, i324, 'cover')
  request.r(i325[2], i325[3], 0, i324, 'coverSR')
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i327 = data
  i326.color = new pc.Color(i327[0], i327[1], i327[2], i327[3])
  request.r(i327[4], i327[5], 0, i326, 'sprite')
  i326.flipX = !!i327[6]
  i326.flipY = !!i327[7]
  i326.drawMode = i327[8]
  i326.size = new pc.Vec2( i327[9], i327[10] )
  i326.tileMode = i327[11]
  i326.adaptiveModeThreshold = i327[12]
  i326.maskInteraction = i327[13]
  i326.spriteSortPoint = i327[14]
  i326.enabled = !!i327[15]
  request.r(i327[16], i327[17], 0, i326, 'sharedMaterial')
  var i329 = i327[18]
  var i328 = []
  for(var i = 0; i < i329.length; i += 2) {
  request.r(i329[i + 0], i329[i + 1], 2, i328, '')
  }
  i326.sharedMaterials = i328
  i326.receiveShadows = !!i327[19]
  i326.shadowCastingMode = i327[20]
  i326.sortingLayerID = i327[21]
  i326.sortingOrder = i327[22]
  i326.lightmapIndex = i327[23]
  i326.lightmapSceneIndex = i327[24]
  i326.lightmapScaleOffset = new pc.Vec4( i327[25], i327[26], i327[27], i327[28] )
  i326.lightProbeUsage = i327[29]
  i326.reflectionProbeUsage = i327[30]
  return i326
}

Deserializers["FoodSlot"] = function (request, data, root) {
  var i332 = root || request.c( 'FoodSlot' )
  var i333 = data
  i332.food = request.d('FoodData', i333[0], i332.food)
  request.r(i333[1], i333[2], 0, i332, 'sr')
  return i332
}

Deserializers["FoodData"] = function (request, data, root) {
  var i334 = root || request.c( 'FoodData' )
  var i335 = data
  i334.foodType = i335[0]
  request.r(i335[1], i335[2], 0, i334, 'foodSprite')
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i337 = data
  i336.center = new pc.Vec3( i337[0], i337[1], i337[2] )
  i336.size = new pc.Vec3( i337[3], i337[4], i337[5] )
  i336.enabled = !!i337[6]
  i336.isTrigger = !!i337[7]
  request.r(i337[8], i337[9], 0, i336, 'material')
  return i336
}

Deserializers["FoodSlotGraphicController"] = function (request, data, root) {
  var i338 = root || request.c( 'FoodSlotGraphicController' )
  var i339 = data
  request.r(i339[0], i339[1], 0, i338, 'dish')
  i338.foodOffsetWidth = i339[2]
  return i338
}

Deserializers["GameManager"] = function (request, data, root) {
  var i340 = root || request.c( 'GameManager' )
  var i341 = data
  i340.numberOfClearableCategories = i341[0]
  i340.numberOfCategories = i341[1]
  i340.isGameStart = !!i341[2]
  i340.isGameOver = !!i341[3]
  return i340
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i342 = root || request.c( 'LevelManager' )
  var i343 = data
  request.r(i343[0], i343[1], 0, i342, 'levelData')
  var i345 = i343[2]
  var i344 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i345.length; i += 2) {
  request.r(i345[i + 0], i345[i + 1], 1, i344, '')
  }
  i342.grills = i344
  i342.guideTargetGrillIndex = i343[3]
  i342.guideDonorGrillIndex = i343[4]
  return i342
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i348 = root || request.c( 'TutorialManager' )
  var i349 = data
  i348.isTutorial = !!i349[0]
  request.r(i349[1], i349[2], 0, i348, 'handGuide')
  return i348
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i350 = root || request.c( 'GuideManager' )
  var i351 = data
  i350.idleThreshold = i351[0]
  i350.wobbleAngle = i351[1]
  i350.wobbleSpeed = i351[2]
  return i350
}

Deserializers["DragManager"] = function (request, data, root) {
  var i352 = root || request.c( 'DragManager' )
  var i353 = data
  i352.draggableLayer = UnityEngine.LayerMask.FromIntegerValue( i353[0] )
  i352.canDrag = !!i353[1]
  request.r(i353[2], i353[3], 0, i352, 'dragVisual')
  return i352
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i354 = root || request.c( 'SoundManager' )
  var i355 = data
  var i357 = i355[0]
  var i356 = []
  for(var i = 0; i < i357.length; i += 2) {
  request.r(i357[i + 0], i357[i + 1], 2, i356, '')
  }
  i354.audioClips = i356
  request.r(i355[1], i355[2], 0, i354, 'sound')
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'clip')
  request.r(i361[2], i361[3], 0, i360, 'outputAudioMixerGroup')
  i360.playOnAwake = !!i361[4]
  i360.loop = !!i361[5]
  i360.time = i361[6]
  i360.volume = i361[7]
  i360.pitch = i361[8]
  i360.enabled = !!i361[9]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i363 = data
  i362.ambientIntensity = i363[0]
  i362.reflectionIntensity = i363[1]
  i362.ambientMode = i363[2]
  i362.ambientLight = new pc.Color(i363[3], i363[4], i363[5], i363[6])
  i362.ambientSkyColor = new pc.Color(i363[7], i363[8], i363[9], i363[10])
  i362.ambientGroundColor = new pc.Color(i363[11], i363[12], i363[13], i363[14])
  i362.ambientEquatorColor = new pc.Color(i363[15], i363[16], i363[17], i363[18])
  i362.fogColor = new pc.Color(i363[19], i363[20], i363[21], i363[22])
  i362.fogEndDistance = i363[23]
  i362.fogStartDistance = i363[24]
  i362.fogDensity = i363[25]
  i362.fog = !!i363[26]
  request.r(i363[27], i363[28], 0, i362, 'skybox')
  i362.fogMode = i363[29]
  var i365 = i363[30]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i365[i + 0]) );
  }
  i362.lightmaps = i364
  i362.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i363[31], i362.lightProbes)
  i362.lightmapsMode = i363[32]
  i362.mixedBakeMode = i363[33]
  i362.environmentLightingMode = i363[34]
  i362.ambientProbe = new pc.SphericalHarmonicsL2(i363[35])
  request.r(i363[36], i363[37], 0, i362, 'customReflection')
  request.r(i363[38], i363[39], 0, i362, 'defaultReflection')
  i362.defaultReflectionMode = i363[40]
  i362.defaultReflectionResolution = i363[41]
  i362.sunLightObjectId = i363[42]
  i362.pixelLightCount = i363[43]
  i362.defaultReflectionHDR = !!i363[44]
  i362.hasLightDataAsset = !!i363[45]
  i362.hasManualGenerate = !!i363[46]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i369 = data
  request.r(i369[0], i369[1], 0, i368, 'lightmapColor')
  request.r(i369[2], i369[3], 0, i368, 'lightmapDirection')
  request.r(i369[4], i369[5], 0, i368, 'shadowMask')
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i370 = root || new UnityEngine.LightProbes()
  var i371 = data
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i379 = data
  var i381 = i379[0]
  var i380 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i381.length; i += 1) {
    i380.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i381[i + 0]));
  }
  i378.ShaderCompilationErrors = i380
  i378.name = i379[1]
  i378.guid = i379[2]
  var i383 = i379[3]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( i383[i + 0] );
  }
  i378.shaderDefinedKeywords = i382
  var i385 = i379[4]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i385[i + 0]) );
  }
  i378.passes = i384
  var i387 = i379[5]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i387[i + 0]) );
  }
  i378.usePasses = i386
  var i389 = i379[6]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i389[i + 0]) );
  }
  i378.defaultParameterValues = i388
  request.r(i379[7], i379[8], 0, i378, 'unityFallbackShader')
  i378.readDepth = !!i379[9]
  i378.hasDepthOnlyPass = !!i379[10]
  i378.isCreatedByShaderGraph = !!i379[11]
  i378.disableBatching = !!i379[12]
  i378.compiled = !!i379[13]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i393 = data
  i392.shaderName = i393[0]
  i392.errorMessage = i393[1]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i398 = root || new pc.UnityShaderPass()
  var i399 = data
  i398.id = i399[0]
  i398.subShaderIndex = i399[1]
  i398.name = i399[2]
  i398.passType = i399[3]
  i398.grabPassTextureName = i399[4]
  i398.usePass = !!i399[5]
  i398.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[6], i398.zTest)
  i398.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[7], i398.zWrite)
  i398.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[8], i398.culling)
  i398.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i399[9], i398.blending)
  i398.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i399[10], i398.alphaBlending)
  i398.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[11], i398.colorWriteMask)
  i398.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[12], i398.offsetUnits)
  i398.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[13], i398.offsetFactor)
  i398.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[14], i398.stencilRef)
  i398.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[15], i398.stencilReadMask)
  i398.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i399[16], i398.stencilWriteMask)
  i398.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i399[17], i398.stencilOp)
  i398.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i399[18], i398.stencilOpFront)
  i398.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i399[19], i398.stencilOpBack)
  var i401 = i399[20]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i401[i + 0]) );
  }
  i398.tags = i400
  var i403 = i399[21]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( i403[i + 0] );
  }
  i398.passDefinedKeywords = i402
  var i405 = i399[22]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i405[i + 0]) );
  }
  i398.passDefinedKeywordGroups = i404
  var i407 = i399[23]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i407[i + 0]) );
  }
  i398.variants = i406
  var i409 = i399[24]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i409[i + 0]) );
  }
  i398.excludedVariants = i408
  i398.hasDepthReader = !!i399[25]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i411 = data
  i410.val = i411[0]
  i410.name = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i413 = data
  i412.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[0], i412.src)
  i412.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[1], i412.dst)
  i412.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[2], i412.op)
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i415 = data
  i414.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[0], i414.pass)
  i414.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[1], i414.fail)
  i414.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[2], i414.zFail)
  i414.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[3], i414.comp)
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i419 = data
  i418.name = i419[0]
  i418.value = i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i423 = data
  var i425 = i423[0]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( i425[i + 0] );
  }
  i422.keywords = i424
  i422.hasDiscard = !!i423[1]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i429 = data
  i428.passId = i429[0]
  i428.subShaderIndex = i429[1]
  var i431 = i429[2]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( i431[i + 0] );
  }
  i428.keywords = i430
  i428.vertexProgram = i429[3]
  i428.fragmentProgram = i429[4]
  i428.exportedForWebGl2 = !!i429[5]
  i428.readDepth = !!i429[6]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'shader')
  i434.pass = i435[2]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i439 = data
  i438.name = i439[0]
  i438.type = i439[1]
  i438.value = new pc.Vec4( i439[2], i439[3], i439[4], i439[5] )
  i438.textureValue = i439[6]
  i438.shaderPropertyFlag = i439[7]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i441 = data
  i440.name = i441[0]
  request.r(i441[1], i441[2], 0, i440, 'texture')
  i440.aabb = i441[3]
  i440.vertices = i441[4]
  i440.triangles = i441[5]
  i440.textureRect = UnityEngine.Rect.MinMaxRect(i441[6], i441[7], i441[8], i441[9])
  i440.packedRect = UnityEngine.Rect.MinMaxRect(i441[10], i441[11], i441[12], i441[13])
  i440.border = new pc.Vec4( i441[14], i441[15], i441[16], i441[17] )
  i440.transparency = i441[18]
  i440.bounds = i441[19]
  i440.pixelsPerUnit = i441[20]
  i440.textureWidth = i441[21]
  i440.textureHeight = i441[22]
  i440.nativeSize = new pc.Vec2( i441[23], i441[24] )
  i440.pivot = new pc.Vec2( i441[25], i441[26] )
  i440.textureRectOffset = new pc.Vec2( i441[27], i441[28] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i443 = data
  i442.name = i443[0]
  return i442
}

Deserializers["LevelData"] = function (request, data, root) {
  var i444 = root || request.c( 'LevelData' )
  var i445 = data
  var i447 = i445[0]
  var i446 = new (System.Collections.Generic.List$1(Bridge.ns('FoodData')))
  for(var i = 0; i < i447.length; i += 1) {
    i446.add(request.d('FoodData', i447[i + 0]));
  }
  i444.categories = i446
  return i444
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i450 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i451 = data
  i450.useSafeMode = !!i451[0]
  i450.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i451[1], i450.safeModeOptions)
  i450.timeScale = i451[2]
  i450.unscaledTimeScale = i451[3]
  i450.useSmoothDeltaTime = !!i451[4]
  i450.maxSmoothUnscaledTime = i451[5]
  i450.rewindCallbackMode = i451[6]
  i450.showUnityEditorReport = !!i451[7]
  i450.logBehaviour = i451[8]
  i450.drawGizmos = !!i451[9]
  i450.defaultRecyclable = !!i451[10]
  i450.defaultAutoPlay = i451[11]
  i450.defaultUpdateType = i451[12]
  i450.defaultTimeScaleIndependent = !!i451[13]
  i450.defaultEaseType = i451[14]
  i450.defaultEaseOvershootOrAmplitude = i451[15]
  i450.defaultEasePeriod = i451[16]
  i450.defaultAutoKill = !!i451[17]
  i450.defaultLoopType = i451[18]
  i450.debugMode = !!i451[19]
  i450.debugStoreTargetId = !!i451[20]
  i450.showPreviewPanel = !!i451[21]
  i450.storeSettingsLocation = i451[22]
  i450.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i451[23], i450.modules)
  i450.createASMDEF = !!i451[24]
  i450.showPlayingTweens = !!i451[25]
  i450.showPausedTweens = !!i451[26]
  return i450
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i452 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i453 = data
  i452.logBehaviour = i453[0]
  i452.nestedTweenFailureBehaviour = i453[1]
  return i452
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i454 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i455 = data
  i454.showPanel = !!i455[0]
  i454.audioEnabled = !!i455[1]
  i454.physicsEnabled = !!i455[2]
  i454.physics2DEnabled = !!i455[3]
  i454.spriteEnabled = !!i455[4]
  i454.uiEnabled = !!i455[5]
  i454.uiToolkitEnabled = !!i455[6]
  i454.textMeshProEnabled = !!i455[7]
  i454.tk2DEnabled = !!i455[8]
  i454.deAudioEnabled = !!i455[9]
  i454.deUnityExtendedEnabled = !!i455[10]
  i454.epoOutlineEnabled = !!i455[11]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i459[i + 0]) );
  }
  i456.files = i458
  i456.componentToPrefabIds = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i463 = data
  i462.path = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'unityObject')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i465 = data
  var i467 = i465[0]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i467[i + 0]) );
  }
  i464.scriptsExecutionOrder = i466
  var i469 = i465[1]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i469[i + 0]) );
  }
  i464.sortingLayers = i468
  var i471 = i465[2]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i471[i + 0]) );
  }
  i464.cullingLayers = i470
  i464.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i465[3], i464.timeSettings)
  i464.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i465[4], i464.physicsSettings)
  i464.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i465[5], i464.physics2DSettings)
  i464.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i465[6], i464.qualitySettings)
  i464.enableRealtimeShadows = !!i465[7]
  i464.enableAutoInstancing = !!i465[8]
  i464.enableStaticBatching = !!i465[9]
  i464.enableDynamicBatching = !!i465[10]
  i464.usePreservativeDynamicBatching = !!i465[11]
  i464.lightmapEncodingQuality = i465[12]
  i464.desiredColorSpace = i465[13]
  var i473 = i465[14]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( i473[i + 0] );
  }
  i464.allTags = i472
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i477 = data
  i476.name = i477[0]
  i476.value = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i481 = data
  i480.id = i481[0]
  i480.name = i481[1]
  i480.value = i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i485 = data
  i484.id = i485[0]
  i484.name = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i487 = data
  i486.fixedDeltaTime = i487[0]
  i486.maximumDeltaTime = i487[1]
  i486.timeScale = i487[2]
  i486.maximumParticleTimestep = i487[3]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i489 = data
  i488.gravity = new pc.Vec3( i489[0], i489[1], i489[2] )
  i488.defaultSolverIterations = i489[3]
  i488.bounceThreshold = i489[4]
  i488.autoSyncTransforms = !!i489[5]
  i488.autoSimulation = !!i489[6]
  var i491 = i489[7]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i491[i + 0]) );
  }
  i488.collisionMatrix = i490
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.layerId = i495[1]
  i494.otherLayerId = i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'material')
  i496.gravity = new pc.Vec2( i497[2], i497[3] )
  i496.positionIterations = i497[4]
  i496.velocityIterations = i497[5]
  i496.velocityThreshold = i497[6]
  i496.maxLinearCorrection = i497[7]
  i496.maxAngularCorrection = i497[8]
  i496.maxTranslationSpeed = i497[9]
  i496.maxRotationSpeed = i497[10]
  i496.baumgarteScale = i497[11]
  i496.baumgarteTOIScale = i497[12]
  i496.timeToSleep = i497[13]
  i496.linearSleepTolerance = i497[14]
  i496.angularSleepTolerance = i497[15]
  i496.defaultContactOffset = i497[16]
  i496.autoSimulation = !!i497[17]
  i496.queriesHitTriggers = !!i497[18]
  i496.queriesStartInColliders = !!i497[19]
  i496.callbacksOnDisable = !!i497[20]
  i496.reuseCollisionCallbacks = !!i497[21]
  i496.autoSyncTransforms = !!i497[22]
  var i499 = i497[23]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i499[i + 0]) );
  }
  i496.collisionMatrix = i498
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.layerId = i503[1]
  i502.otherLayerId = i503[2]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i505 = data
  var i507 = i505[0]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i507[i + 0]) );
  }
  i504.qualityLevels = i506
  var i509 = i505[1]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i504.names = i508
  i504.shadows = i505[2]
  i504.anisotropicFiltering = i505[3]
  i504.antiAliasing = i505[4]
  i504.lodBias = i505[5]
  i504.shadowCascades = i505[6]
  i504.shadowDistance = i505[7]
  i504.shadowmaskMode = i505[8]
  i504.shadowProjection = i505[9]
  i504.shadowResolution = i505[10]
  i504.softParticles = !!i505[11]
  i504.softVegetation = !!i505[12]
  i504.activeColorSpace = i505[13]
  i504.desiredColorSpace = i505[14]
  i504.masterTextureLimit = i505[15]
  i504.maxQueuedFrames = i505[16]
  i504.particleRaycastBudget = i505[17]
  i504.pixelLightCount = i505[18]
  i504.realtimeReflectionProbes = !!i505[19]
  i504.shadowCascade2Split = i505[20]
  i504.shadowCascade4Split = new pc.Vec3( i505[21], i505[22], i505[23] )
  i504.streamingMipmapsActive = !!i505[24]
  i504.vSyncCount = i505[25]
  i504.asyncUploadBufferSize = i505[26]
  i504.asyncUploadTimeSlice = i505[27]
  i504.billboardsFaceCameraPosition = !!i505[28]
  i504.shadowNearPlaneOffset = i505[29]
  i504.streamingMipmapsMemoryBudget = i505[30]
  i504.maximumLODLevel = i505[31]
  i504.streamingMipmapsAddAllCameras = !!i505[32]
  i504.streamingMipmapsMaxLevelReduction = i505[33]
  i504.streamingMipmapsRenderersPerFrame = i505[34]
  i504.resolutionScalingFixedDPIFactor = i505[35]
  i504.streamingMipmapsMaxFileIORequests = i505[36]
  i504.currentQualityLevel = i505[37]
  return i504
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[33],"34":[1],"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[43],"51":[43],"52":[43],"53":[43],"54":[43],"55":[43],"56":[1],"57":[58],"59":[60],"61":[60],"62":[63],"64":[9],"65":[1],"66":[67],"68":[69],"70":[62],"71":[63],"72":[58,63],"73":[63,74],"75":[63],"76":[74,63],"77":[58],"78":[74,63],"79":[63],"80":[81],"82":[81],"83":[81],"84":[63],"85":[63],"86":[62],"87":[74,63],"88":[63],"89":[62],"90":[63],"91":[63],"92":[63],"93":[63],"94":[63],"95":[63],"96":[63],"97":[63],"98":[63],"99":[74,63],"100":[63],"101":[63],"102":[63],"103":[63],"104":[74,63],"105":[63],"106":[69],"107":[69],"108":[69],"109":[69],"110":[1],"111":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Grill","FoodSlot","GrillGraphicController","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider","FoodSlotGraphicController","GameManager","LevelManager","LevelData","TutorialManager","GuideManager","DragManager","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "Steam It Ver1";

Deserializers.lunaInitializationTime = "05/04/2026 08:13:28";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1884";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3920";

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

Deserializers.buildID = "d9a07456-bcfc-4d3d-984a-e27ad0af8f00";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

