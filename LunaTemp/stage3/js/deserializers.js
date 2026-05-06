var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointSpring' )
  var i275 = data
  i274.spring = i275[0]
  i274.damper = i275[1]
  i274.targetPosition = i275[2]
  return i274
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointMotor' )
  var i277 = data
  i276.m_TargetVelocity = i277[0]
  i276.m_Force = i277[1]
  i276.m_FreeSpin = i277[2]
  return i276
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointLimits' )
  var i279 = data
  i278.m_Min = i279[0]
  i278.m_Max = i279[1]
  i278.m_Bounciness = i279[2]
  i278.m_BounceMinVelocity = i279[3]
  i278.m_ContactDistance = i279[4]
  i278.minBounce = i279[5]
  i278.maxBounce = i279[6]
  return i278
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointDrive' )
  var i281 = data
  i280.m_PositionSpring = i281[0]
  i280.m_PositionDamper = i281[1]
  i280.m_MaximumForce = i281[2]
  i280.m_UseAcceleration = i281[3]
  return i280
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i283 = data
  i282.m_Spring = i283[0]
  i282.m_Damper = i283[1]
  return i282
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i285 = data
  i284.m_Limit = i285[0]
  i284.m_Bounciness = i285[1]
  i284.m_ContactDistance = i285[2]
  return i284
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i287 = data
  i286.m_ExtremumSlip = i287[0]
  i286.m_ExtremumValue = i287[1]
  i286.m_AsymptoteSlip = i287[2]
  i286.m_AsymptoteValue = i287[3]
  i286.m_Stiffness = i287[4]
  return i286
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i289 = data
  i288.m_LowerAngle = i289[0]
  i288.m_UpperAngle = i289[1]
  return i288
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i291 = data
  i290.m_MotorSpeed = i291[0]
  i290.m_MaximumMotorTorque = i291[1]
  return i290
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i293 = data
  i292.m_DampingRatio = i293[0]
  i292.m_Frequency = i293[1]
  i292.m_Angle = i293[2]
  return i292
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i295 = data
  i294.m_LowerTranslation = i295[0]
  i294.m_UpperTranslation = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i296 = root || new pc.UnityMaterial()
  var i297 = data
  i296.name = i297[0]
  request.r(i297[1], i297[2], 0, i296, 'shader')
  i296.renderQueue = i297[3]
  i296.enableInstancing = !!i297[4]
  var i299 = i297[5]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i299[i + 0]) );
  }
  i296.floatParameters = i298
  var i301 = i297[6]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i301[i + 0]) );
  }
  i296.colorParameters = i300
  var i303 = i297[7]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i303[i + 0]) );
  }
  i296.vectorParameters = i302
  var i305 = i297[8]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i305[i + 0]) );
  }
  i296.textureParameters = i304
  var i307 = i297[9]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i307[i + 0]) );
  }
  i296.materialFlags = i306
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i311 = data
  i310.name = i311[0]
  i310.value = i311[1]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = new pc.Color(i315[1], i315[2], i315[3], i315[4])
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i319 = data
  i318.name = i319[0]
  i318.value = new pc.Vec4( i319[1], i319[2], i319[3], i319[4] )
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i323 = data
  i322.name = i323[0]
  request.r(i323[1], i323[2], 0, i322, 'value')
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i327 = data
  i326.name = i327[0]
  i326.enabled = !!i327[1]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i329 = data
  i328.name = i329[0]
  i328.width = i329[1]
  i328.height = i329[2]
  i328.mipmapCount = i329[3]
  i328.anisoLevel = i329[4]
  i328.filterMode = i329[5]
  i328.hdr = !!i329[6]
  i328.format = i329[7]
  i328.wrapMode = i329[8]
  i328.alphaIsTransparency = !!i329[9]
  i328.alphaSource = i329[10]
  i328.graphicsFormat = i329[11]
  i328.sRGBTexture = !!i329[12]
  i328.desiredColorSpace = i329[13]
  i328.wrapU = i329[14]
  i328.wrapV = i329[15]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i331 = data
  i330.name = i331[0]
  i330.index = i331[1]
  i330.startup = !!i331[2]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i333 = data
  i332.aspect = i333[0]
  i332.orthographic = !!i333[1]
  i332.orthographicSize = i333[2]
  i332.backgroundColor = new pc.Color(i333[3], i333[4], i333[5], i333[6])
  i332.nearClipPlane = i333[7]
  i332.farClipPlane = i333[8]
  i332.fieldOfView = i333[9]
  i332.depth = i333[10]
  i332.clearFlags = i333[11]
  i332.cullingMask = i333[12]
  i332.rect = i333[13]
  request.r(i333[14], i333[15], 0, i332, 'targetTexture')
  i332.usePhysicalProperties = !!i333[16]
  i332.focalLength = i333[17]
  i332.sensorSize = new pc.Vec2( i333[18], i333[19] )
  i332.lensShift = new pc.Vec2( i333[20], i333[21] )
  i332.gateFit = i333[22]
  i332.commandBufferCount = i333[23]
  i332.cameraType = i333[24]
  i332.enabled = !!i333[25]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i335 = data
  i334.name = i335[0]
  i334.tagId = i335[1]
  i334.enabled = !!i335[2]
  i334.isStatic = !!i335[3]
  i334.layer = i335[4]
  return i334
}

Deserializers["Grill"] = function (request, data, root) {
  var i336 = root || request.c( 'Grill' )
  var i337 = data
  var i339 = i337[0]
  var i338 = new (System.Collections.Generic.List$1(Bridge.ns('FoodSlot')))
  for(var i = 0; i < i339.length; i += 2) {
  request.r(i339[i + 0], i339[i + 1], 1, i338, '')
  }
  i336.foodSlots = i338
  request.r(i337[1], i337[2], 0, i336, 'graphic')
  request.r(i337[3], i337[4], 0, i336, 'dishTarget')
  return i336
}

Deserializers["GrillGraphicController"] = function (request, data, root) {
  var i342 = root || request.c( 'GrillGraphicController' )
  var i343 = data
  request.r(i343[0], i343[1], 0, i342, 'cover')
  request.r(i343[2], i343[3], 0, i342, 'coverSR')
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i345 = data
  i344.center = new pc.Vec3( i345[0], i345[1], i345[2] )
  i344.size = new pc.Vec3( i345[3], i345[4], i345[5] )
  i344.enabled = !!i345[6]
  i344.isTrigger = !!i345[7]
  request.r(i345[8], i345[9], 0, i344, 'material')
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i347 = data
  i346.color = new pc.Color(i347[0], i347[1], i347[2], i347[3])
  request.r(i347[4], i347[5], 0, i346, 'sprite')
  i346.flipX = !!i347[6]
  i346.flipY = !!i347[7]
  i346.drawMode = i347[8]
  i346.size = new pc.Vec2( i347[9], i347[10] )
  i346.tileMode = i347[11]
  i346.adaptiveModeThreshold = i347[12]
  i346.maskInteraction = i347[13]
  i346.spriteSortPoint = i347[14]
  i346.enabled = !!i347[15]
  request.r(i347[16], i347[17], 0, i346, 'sharedMaterial')
  var i349 = i347[18]
  var i348 = []
  for(var i = 0; i < i349.length; i += 2) {
  request.r(i349[i + 0], i349[i + 1], 2, i348, '')
  }
  i346.sharedMaterials = i348
  i346.receiveShadows = !!i347[19]
  i346.shadowCastingMode = i347[20]
  i346.sortingLayerID = i347[21]
  i346.sortingOrder = i347[22]
  i346.lightmapIndex = i347[23]
  i346.lightmapSceneIndex = i347[24]
  i346.lightmapScaleOffset = new pc.Vec4( i347[25], i347[26], i347[27], i347[28] )
  i346.lightProbeUsage = i347[29]
  i346.reflectionProbeUsage = i347[30]
  return i346
}

Deserializers["FoodSlot"] = function (request, data, root) {
  var i352 = root || request.c( 'FoodSlot' )
  var i353 = data
  i352.food = request.d('FoodData', i353[0], i352.food)
  request.r(i353[1], i353[2], 0, i352, 'sr')
  return i352
}

Deserializers["FoodData"] = function (request, data, root) {
  var i354 = root || request.c( 'FoodData' )
  var i355 = data
  i354.foodType = i355[0]
  request.r(i355[1], i355[2], 0, i354, 'foodSprite')
  return i354
}

Deserializers["FoodSlotGraphicController"] = function (request, data, root) {
  var i356 = root || request.c( 'FoodSlotGraphicController' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'dish')
  i356.foodOffsetWidth = i357[2]
  i356.foodOffsetHeight = i357[3]
  request.r(i357[4], i357[5], 0, i356, 'leftPositionInDish')
  request.r(i357[6], i357[7], 0, i356, 'middlePositionInDish')
  request.r(i357[8], i357[9], 0, i356, 'rightPositionInDish')
  return i356
}

Deserializers["GameManager"] = function (request, data, root) {
  var i358 = root || request.c( 'GameManager' )
  var i359 = data
  i358.numberOfClearableCategories = i359[0]
  i358.numberOfCategories = i359[1]
  i358.isGameStart = !!i359[2]
  i358.isGameOver = !!i359[3]
  return i358
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i360 = root || request.c( 'LevelManager' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'levelData')
  var i363 = i361[2]
  var i362 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i363.length; i += 2) {
  request.r(i363[i + 0], i363[i + 1], 1, i362, '')
  }
  i360.grills = i362
  i360.guideTargetGrillIndex = i361[3]
  i360.guideDonorGrillIndex = i361[4]
  return i360
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i366 = root || request.c( 'TutorialManager' )
  var i367 = data
  i366.isTutorial = !!i367[0]
  request.r(i367[1], i367[2], 0, i366, 'handGuide')
  return i366
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i368 = root || request.c( 'GuideManager' )
  var i369 = data
  i368.idleThreshold = i369[0]
  i368.wobbleAngle = i369[1]
  i368.wobbleSpeed = i369[2]
  return i368
}

Deserializers["DragManager"] = function (request, data, root) {
  var i370 = root || request.c( 'DragManager' )
  var i371 = data
  i370.draggableLayer = UnityEngine.LayerMask.FromIntegerValue( i371[0] )
  i370.grillLayer = UnityEngine.LayerMask.FromIntegerValue( i371[1] )
  i370.canDrag = !!i371[2]
  i370.limitDragTime = i371[3]
  i370.isPlayMusic = !!i371[4]
  request.r(i371[5], i371[6], 0, i370, 'bgMusic')
  request.r(i371[7], i371[8], 0, i370, 'dragVisual')
  return i370
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i372 = root || request.c( 'SoundManager' )
  var i373 = data
  var i375 = i373[0]
  var i374 = []
  for(var i = 0; i < i375.length; i += 2) {
  request.r(i375[i + 0], i375[i + 1], 2, i374, '')
  }
  i372.audioClips = i374
  request.r(i373[1], i373[2], 0, i372, 'sound')
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i379 = data
  request.r(i379[0], i379[1], 0, i378, 'clip')
  request.r(i379[2], i379[3], 0, i378, 'outputAudioMixerGroup')
  i378.playOnAwake = !!i379[4]
  i378.loop = !!i379[5]
  i378.time = i379[6]
  i378.volume = i379[7]
  i378.pitch = i379[8]
  i378.enabled = !!i379[9]
  return i378
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i380 = root || request.c( 'CameraManager' )
  var i381 = data
  i380.refWidth = i381[0]
  i380.refHeight = i381[1]
  i380.refOrthoSize = i381[2]
  request.r(i381[3], i381[4], 0, i380, 'mainCamera')
  return i380
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i383 = data
  request.r(i383[0], i383[1], 0, i382, 'm_FirstSelected')
  i382.m_sendNavigationEvents = !!i383[2]
  i382.m_DragThreshold = i383[3]
  return i382
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i385 = data
  i384.m_HorizontalAxis = i385[0]
  i384.m_VerticalAxis = i385[1]
  i384.m_SubmitButton = i385[2]
  i384.m_CancelButton = i385[3]
  i384.m_InputActionsPerSecond = i385[4]
  i384.m_RepeatDelay = i385[5]
  i384.m_ForceModuleActive = !!i385[6]
  i384.m_SendPointerHoverToParent = !!i385[7]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i387 = data
  i386.pivot = new pc.Vec2( i387[0], i387[1] )
  i386.anchorMin = new pc.Vec2( i387[2], i387[3] )
  i386.anchorMax = new pc.Vec2( i387[4], i387[5] )
  i386.sizeDelta = new pc.Vec2( i387[6], i387[7] )
  i386.anchoredPosition3D = new pc.Vec3( i387[8], i387[9], i387[10] )
  i386.rotation = new pc.Quat(i387[11], i387[12], i387[13], i387[14])
  i386.scale = new pc.Vec3( i387[15], i387[16], i387[17] )
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i389 = data
  i388.planeDistance = i389[0]
  i388.referencePixelsPerUnit = i389[1]
  i388.isFallbackOverlay = !!i389[2]
  i388.renderMode = i389[3]
  i388.renderOrder = i389[4]
  i388.sortingLayerName = i389[5]
  i388.sortingOrder = i389[6]
  i388.scaleFactor = i389[7]
  request.r(i389[8], i389[9], 0, i388, 'worldCamera')
  i388.overrideSorting = !!i389[10]
  i388.pixelPerfect = !!i389[11]
  i388.targetDisplay = i389[12]
  i388.overridePixelPerfect = !!i389[13]
  i388.enabled = !!i389[14]
  return i388
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i391 = data
  i390.m_UiScaleMode = i391[0]
  i390.m_ReferencePixelsPerUnit = i391[1]
  i390.m_ScaleFactor = i391[2]
  i390.m_ReferenceResolution = new pc.Vec2( i391[3], i391[4] )
  i390.m_ScreenMatchMode = i391[5]
  i390.m_MatchWidthOrHeight = i391[6]
  i390.m_PhysicalUnit = i391[7]
  i390.m_FallbackScreenDPI = i391[8]
  i390.m_DefaultSpriteDPI = i391[9]
  i390.m_DynamicPixelsPerUnit = i391[10]
  i390.m_PresetInfoIsWorld = !!i391[11]
  return i390
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i393 = data
  i392.m_IgnoreReversedGraphics = !!i393[0]
  i392.m_BlockingObjects = i393[1]
  i392.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i393[2] )
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i395 = data
  i394.cullTransparentMesh = !!i395[0]
  return i394
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.UI.Image' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'm_Sprite')
  i396.m_Type = i397[2]
  i396.m_PreserveAspect = !!i397[3]
  i396.m_FillCenter = !!i397[4]
  i396.m_FillMethod = i397[5]
  i396.m_FillAmount = i397[6]
  i396.m_FillClockwise = !!i397[7]
  i396.m_FillOrigin = i397[8]
  i396.m_UseSpriteMesh = !!i397[9]
  i396.m_PixelsPerUnitMultiplier = i397[10]
  request.r(i397[11], i397[12], 0, i396, 'm_Material')
  i396.m_Maskable = !!i397[13]
  i396.m_Color = new pc.Color(i397[14], i397[15], i397[16], i397[17])
  i396.m_RaycastTarget = !!i397[18]
  i396.m_RaycastPadding = new pc.Vec4( i397[19], i397[20], i397[21], i397[22] )
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i399 = data
  i398.ambientIntensity = i399[0]
  i398.reflectionIntensity = i399[1]
  i398.ambientMode = i399[2]
  i398.ambientLight = new pc.Color(i399[3], i399[4], i399[5], i399[6])
  i398.ambientSkyColor = new pc.Color(i399[7], i399[8], i399[9], i399[10])
  i398.ambientGroundColor = new pc.Color(i399[11], i399[12], i399[13], i399[14])
  i398.ambientEquatorColor = new pc.Color(i399[15], i399[16], i399[17], i399[18])
  i398.fogColor = new pc.Color(i399[19], i399[20], i399[21], i399[22])
  i398.fogEndDistance = i399[23]
  i398.fogStartDistance = i399[24]
  i398.fogDensity = i399[25]
  i398.fog = !!i399[26]
  request.r(i399[27], i399[28], 0, i398, 'skybox')
  i398.fogMode = i399[29]
  var i401 = i399[30]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i401[i + 0]) );
  }
  i398.lightmaps = i400
  i398.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i399[31], i398.lightProbes)
  i398.lightmapsMode = i399[32]
  i398.mixedBakeMode = i399[33]
  i398.environmentLightingMode = i399[34]
  i398.ambientProbe = new pc.SphericalHarmonicsL2(i399[35])
  i398.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i399[36])
  i398.useReferenceAmbientProbe = !!i399[37]
  request.r(i399[38], i399[39], 0, i398, 'customReflection')
  request.r(i399[40], i399[41], 0, i398, 'defaultReflection')
  i398.defaultReflectionMode = i399[42]
  i398.defaultReflectionResolution = i399[43]
  i398.sunLightObjectId = i399[44]
  i398.pixelLightCount = i399[45]
  i398.defaultReflectionHDR = !!i399[46]
  i398.hasLightDataAsset = !!i399[47]
  i398.hasManualGenerate = !!i399[48]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i405 = data
  request.r(i405[0], i405[1], 0, i404, 'lightmapColor')
  request.r(i405[2], i405[3], 0, i404, 'lightmapDirection')
  request.r(i405[4], i405[5], 0, i404, 'shadowMask')
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i406 = root || new UnityEngine.LightProbes()
  var i407 = data
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i415 = data
  var i417 = i415[0]
  var i416 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i417.length; i += 1) {
    i416.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i417[i + 0]));
  }
  i414.ShaderCompilationErrors = i416
  i414.name = i415[1]
  i414.guid = i415[2]
  var i419 = i415[3]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( i419[i + 0] );
  }
  i414.shaderDefinedKeywords = i418
  var i421 = i415[4]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i421[i + 0]) );
  }
  i414.passes = i420
  var i423 = i415[5]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i423[i + 0]) );
  }
  i414.usePasses = i422
  var i425 = i415[6]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i425[i + 0]) );
  }
  i414.defaultParameterValues = i424
  request.r(i415[7], i415[8], 0, i414, 'unityFallbackShader')
  i414.readDepth = !!i415[9]
  i414.hasDepthOnlyPass = !!i415[10]
  i414.isCreatedByShaderGraph = !!i415[11]
  i414.disableBatching = !!i415[12]
  i414.compiled = !!i415[13]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i429 = data
  i428.shaderName = i429[0]
  i428.errorMessage = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i434 = root || new pc.UnityShaderPass()
  var i435 = data
  i434.id = i435[0]
  i434.subShaderIndex = i435[1]
  i434.name = i435[2]
  i434.passType = i435[3]
  i434.grabPassTextureName = i435[4]
  i434.usePass = !!i435[5]
  i434.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[6], i434.zTest)
  i434.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[7], i434.zWrite)
  i434.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[8], i434.culling)
  i434.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i435[9], i434.blending)
  i434.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i435[10], i434.alphaBlending)
  i434.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[11], i434.colorWriteMask)
  i434.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[12], i434.offsetUnits)
  i434.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[13], i434.offsetFactor)
  i434.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[14], i434.stencilRef)
  i434.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[15], i434.stencilReadMask)
  i434.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[16], i434.stencilWriteMask)
  i434.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[17], i434.stencilOp)
  i434.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[18], i434.stencilOpFront)
  i434.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[19], i434.stencilOpBack)
  var i437 = i435[20]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i437[i + 0]) );
  }
  i434.tags = i436
  var i439 = i435[21]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( i439[i + 0] );
  }
  i434.passDefinedKeywords = i438
  var i441 = i435[22]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i441[i + 0]) );
  }
  i434.passDefinedKeywordGroups = i440
  var i443 = i435[23]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i443[i + 0]) );
  }
  i434.variants = i442
  var i445 = i435[24]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i445[i + 0]) );
  }
  i434.excludedVariants = i444
  i434.hasDepthReader = !!i435[25]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i447 = data
  i446.val = i447[0]
  i446.name = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i449 = data
  i448.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[0], i448.src)
  i448.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[1], i448.dst)
  i448.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[2], i448.op)
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i451 = data
  i450.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[0], i450.pass)
  i450.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[1], i450.fail)
  i450.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[2], i450.zFail)
  i450.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[3], i450.comp)
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i455 = data
  i454.name = i455[0]
  i454.value = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i459 = data
  var i461 = i459[0]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( i461[i + 0] );
  }
  i458.keywords = i460
  i458.hasDiscard = !!i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i465 = data
  i464.passId = i465[0]
  i464.subShaderIndex = i465[1]
  var i467 = i465[2]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( i467[i + 0] );
  }
  i464.keywords = i466
  i464.vertexProgram = i465[3]
  i464.fragmentProgram = i465[4]
  i464.exportedForWebGl2 = !!i465[5]
  i464.readDepth = !!i465[6]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'shader')
  i470.pass = i471[2]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i475 = data
  i474.name = i475[0]
  i474.type = i475[1]
  i474.value = new pc.Vec4( i475[2], i475[3], i475[4], i475[5] )
  i474.textureValue = i475[6]
  i474.shaderPropertyFlag = i475[7]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'texture')
  i476.aabb = i477[3]
  i476.vertices = i477[4]
  i476.triangles = i477[5]
  i476.textureRect = UnityEngine.Rect.MinMaxRect(i477[6], i477[7], i477[8], i477[9])
  i476.packedRect = UnityEngine.Rect.MinMaxRect(i477[10], i477[11], i477[12], i477[13])
  i476.border = new pc.Vec4( i477[14], i477[15], i477[16], i477[17] )
  i476.transparency = i477[18]
  i476.bounds = i477[19]
  i476.pixelsPerUnit = i477[20]
  i476.textureWidth = i477[21]
  i476.textureHeight = i477[22]
  i476.nativeSize = new pc.Vec2( i477[23], i477[24] )
  i476.pivot = new pc.Vec2( i477[25], i477[26] )
  i476.textureRectOffset = new pc.Vec2( i477[27], i477[28] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i479 = data
  i478.name = i479[0]
  return i478
}

Deserializers["LevelData"] = function (request, data, root) {
  var i480 = root || request.c( 'LevelData' )
  var i481 = data
  var i483 = i481[0]
  var i482 = new (System.Collections.Generic.List$1(Bridge.ns('FoodData')))
  for(var i = 0; i < i483.length; i += 1) {
    i482.add(request.d('FoodData', i483[i + 0]));
  }
  i480.categories = i482
  return i480
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i487 = data
  i486.useSafeMode = !!i487[0]
  i486.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i487[1], i486.safeModeOptions)
  i486.timeScale = i487[2]
  i486.unscaledTimeScale = i487[3]
  i486.useSmoothDeltaTime = !!i487[4]
  i486.maxSmoothUnscaledTime = i487[5]
  i486.rewindCallbackMode = i487[6]
  i486.showUnityEditorReport = !!i487[7]
  i486.logBehaviour = i487[8]
  i486.drawGizmos = !!i487[9]
  i486.defaultRecyclable = !!i487[10]
  i486.defaultAutoPlay = i487[11]
  i486.defaultUpdateType = i487[12]
  i486.defaultTimeScaleIndependent = !!i487[13]
  i486.defaultEaseType = i487[14]
  i486.defaultEaseOvershootOrAmplitude = i487[15]
  i486.defaultEasePeriod = i487[16]
  i486.defaultAutoKill = !!i487[17]
  i486.defaultLoopType = i487[18]
  i486.debugMode = !!i487[19]
  i486.debugStoreTargetId = !!i487[20]
  i486.showPreviewPanel = !!i487[21]
  i486.storeSettingsLocation = i487[22]
  i486.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i487[23], i486.modules)
  i486.createASMDEF = !!i487[24]
  i486.showPlayingTweens = !!i487[25]
  i486.showPausedTweens = !!i487[26]
  return i486
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i488 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i489 = data
  i488.logBehaviour = i489[0]
  i488.nestedTweenFailureBehaviour = i489[1]
  return i488
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i491 = data
  i490.showPanel = !!i491[0]
  i490.audioEnabled = !!i491[1]
  i490.physicsEnabled = !!i491[2]
  i490.physics2DEnabled = !!i491[3]
  i490.spriteEnabled = !!i491[4]
  i490.uiEnabled = !!i491[5]
  i490.uiToolkitEnabled = !!i491[6]
  i490.textMeshProEnabled = !!i491[7]
  i490.tk2DEnabled = !!i491[8]
  i490.deAudioEnabled = !!i491[9]
  i490.deUnityExtendedEnabled = !!i491[10]
  i490.epoOutlineEnabled = !!i491[11]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i493 = data
  var i495 = i493[0]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i495[i + 0]) );
  }
  i492.files = i494
  i492.componentToPrefabIds = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i499 = data
  i498.path = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'unityObject')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i501 = data
  var i503 = i501[0]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i503[i + 0]) );
  }
  i500.scriptsExecutionOrder = i502
  var i505 = i501[1]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i505[i + 0]) );
  }
  i500.sortingLayers = i504
  var i507 = i501[2]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i507[i + 0]) );
  }
  i500.cullingLayers = i506
  i500.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i501[3], i500.timeSettings)
  i500.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i501[4], i500.physicsSettings)
  i500.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i501[5], i500.physics2DSettings)
  i500.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i501[6], i500.qualitySettings)
  i500.enableRealtimeShadows = !!i501[7]
  i500.enableAutoInstancing = !!i501[8]
  i500.enableStaticBatching = !!i501[9]
  i500.enableDynamicBatching = !!i501[10]
  i500.lightmapEncodingQuality = i501[11]
  i500.desiredColorSpace = i501[12]
  var i509 = i501[13]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i500.allTags = i508
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i513 = data
  i512.name = i513[0]
  i512.value = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i517 = data
  i516.id = i517[0]
  i516.name = i517[1]
  i516.value = i517[2]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i521 = data
  i520.id = i521[0]
  i520.name = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i523 = data
  i522.fixedDeltaTime = i523[0]
  i522.maximumDeltaTime = i523[1]
  i522.timeScale = i523[2]
  i522.maximumParticleTimestep = i523[3]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i525 = data
  i524.gravity = new pc.Vec3( i525[0], i525[1], i525[2] )
  i524.defaultSolverIterations = i525[3]
  i524.bounceThreshold = i525[4]
  i524.autoSyncTransforms = !!i525[5]
  i524.autoSimulation = !!i525[6]
  var i527 = i525[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i527[i + 0]) );
  }
  i524.collisionMatrix = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.layerId = i531[1]
  i530.otherLayerId = i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'material')
  i532.gravity = new pc.Vec2( i533[2], i533[3] )
  i532.positionIterations = i533[4]
  i532.velocityIterations = i533[5]
  i532.velocityThreshold = i533[6]
  i532.maxLinearCorrection = i533[7]
  i532.maxAngularCorrection = i533[8]
  i532.maxTranslationSpeed = i533[9]
  i532.maxRotationSpeed = i533[10]
  i532.baumgarteScale = i533[11]
  i532.baumgarteTOIScale = i533[12]
  i532.timeToSleep = i533[13]
  i532.linearSleepTolerance = i533[14]
  i532.angularSleepTolerance = i533[15]
  i532.defaultContactOffset = i533[16]
  i532.autoSimulation = !!i533[17]
  i532.queriesHitTriggers = !!i533[18]
  i532.queriesStartInColliders = !!i533[19]
  i532.callbacksOnDisable = !!i533[20]
  i532.reuseCollisionCallbacks = !!i533[21]
  i532.autoSyncTransforms = !!i533[22]
  var i535 = i533[23]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i535[i + 0]) );
  }
  i532.collisionMatrix = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.layerId = i539[1]
  i538.otherLayerId = i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i541 = data
  var i543 = i541[0]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i543[i + 0]) );
  }
  i540.qualityLevels = i542
  var i545 = i541[1]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i540.names = i544
  i540.shadows = i541[2]
  i540.anisotropicFiltering = i541[3]
  i540.antiAliasing = i541[4]
  i540.lodBias = i541[5]
  i540.shadowCascades = i541[6]
  i540.shadowDistance = i541[7]
  i540.shadowmaskMode = i541[8]
  i540.shadowProjection = i541[9]
  i540.shadowResolution = i541[10]
  i540.softParticles = !!i541[11]
  i540.softVegetation = !!i541[12]
  i540.activeColorSpace = i541[13]
  i540.desiredColorSpace = i541[14]
  i540.masterTextureLimit = i541[15]
  i540.maxQueuedFrames = i541[16]
  i540.particleRaycastBudget = i541[17]
  i540.pixelLightCount = i541[18]
  i540.realtimeReflectionProbes = !!i541[19]
  i540.shadowCascade2Split = i541[20]
  i540.shadowCascade4Split = new pc.Vec3( i541[21], i541[22], i541[23] )
  i540.streamingMipmapsActive = !!i541[24]
  i540.vSyncCount = i541[25]
  i540.asyncUploadBufferSize = i541[26]
  i540.asyncUploadTimeSlice = i541[27]
  i540.billboardsFaceCameraPosition = !!i541[28]
  i540.shadowNearPlaneOffset = i541[29]
  i540.streamingMipmapsMemoryBudget = i541[30]
  i540.maximumLODLevel = i541[31]
  i540.streamingMipmapsAddAllCameras = !!i541[32]
  i540.streamingMipmapsMaxLevelReduction = i541[33]
  i540.streamingMipmapsRenderersPerFrame = i541[34]
  i540.resolutionScalingFixedDPIFactor = i541[35]
  i540.streamingMipmapsMaxFileIORequests = i541[36]
  i540.currentQualityLevel = i541[37]
  return i540
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[1],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[1],"68":[69],"70":[71],"72":[71],"28":[27],"73":[9],"74":[1],"75":[76],"77":[25],"78":[28],"79":[27],"80":[69,27],"81":[27,31],"82":[27],"83":[31,27],"84":[69],"85":[31,27],"86":[27],"87":[88],"89":[88],"90":[88],"91":[27],"92":[27],"30":[28],"32":[31,27],"93":[27],"29":[28],"94":[27],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[31,27],"104":[27],"105":[27],"106":[27],"107":[27],"108":[31,27],"109":[27],"110":[25],"111":[25],"26":[25],"112":[25],"113":[1],"114":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Grill","FoodSlot","GrillGraphicController","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.Sprite","UnityEngine.Material","FoodSlotGraphicController","GameManager","LevelManager","LevelData","TutorialManager","GuideManager","DragManager","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","CameraManager","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "Steam It Ver1";

Deserializers.lunaInitializationTime = "05/05/2026 01:55:51";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_SteamIt_050526_Tu_4x8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1849";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4059";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "195aa24e-1723-48ed-a4af-2bb248a1041e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

