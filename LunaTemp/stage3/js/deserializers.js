var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointSpring' )
  var i1291 = data
  i1290.spring = i1291[0]
  i1290.damper = i1291[1]
  i1290.targetPosition = i1291[2]
  return i1290
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointMotor' )
  var i1293 = data
  i1292.m_TargetVelocity = i1293[0]
  i1292.m_Force = i1293[1]
  i1292.m_FreeSpin = i1293[2]
  return i1292
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.JointLimits' )
  var i1295 = data
  i1294.m_Min = i1295[0]
  i1294.m_Max = i1295[1]
  i1294.m_Bounciness = i1295[2]
  i1294.m_BounceMinVelocity = i1295[3]
  i1294.m_ContactDistance = i1295[4]
  i1294.minBounce = i1295[5]
  i1294.maxBounce = i1295[6]
  return i1294
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointDrive' )
  var i1297 = data
  i1296.m_PositionSpring = i1297[0]
  i1296.m_PositionDamper = i1297[1]
  i1296.m_MaximumForce = i1297[2]
  i1296.m_UseAcceleration = i1297[3]
  return i1296
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1299 = data
  i1298.m_Spring = i1299[0]
  i1298.m_Damper = i1299[1]
  return i1298
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1301 = data
  i1300.m_Limit = i1301[0]
  i1300.m_Bounciness = i1301[1]
  i1300.m_ContactDistance = i1301[2]
  return i1300
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1303 = data
  i1302.m_ExtremumSlip = i1303[0]
  i1302.m_ExtremumValue = i1303[1]
  i1302.m_AsymptoteSlip = i1303[2]
  i1302.m_AsymptoteValue = i1303[3]
  i1302.m_Stiffness = i1303[4]
  return i1302
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1305 = data
  i1304.m_LowerAngle = i1305[0]
  i1304.m_UpperAngle = i1305[1]
  return i1304
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1307 = data
  i1306.m_MotorSpeed = i1307[0]
  i1306.m_MaximumMotorTorque = i1307[1]
  return i1306
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1309 = data
  i1308.m_DampingRatio = i1309[0]
  i1308.m_Frequency = i1309[1]
  i1308.m_Angle = i1309[2]
  return i1308
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1311 = data
  i1310.m_LowerTranslation = i1311[0]
  i1310.m_UpperTranslation = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1312 = root || new pc.UnityMaterial()
  var i1313 = data
  i1312.name = i1313[0]
  request.r(i1313[1], i1313[2], 0, i1312, 'shader')
  i1312.renderQueue = i1313[3]
  i1312.enableInstancing = !!i1313[4]
  var i1315 = i1313[5]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1315[i + 0]) );
  }
  i1312.floatParameters = i1314
  var i1317 = i1313[6]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1317[i + 0]) );
  }
  i1312.colorParameters = i1316
  var i1319 = i1313[7]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1319[i + 0]) );
  }
  i1312.vectorParameters = i1318
  var i1321 = i1313[8]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1321[i + 0]) );
  }
  i1312.textureParameters = i1320
  var i1323 = i1313[9]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1323[i + 0]) );
  }
  i1312.materialFlags = i1322
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Color(i1331[1], i1331[2], i1331[3], i1331[4])
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = new pc.Vec4( i1335[1], i1335[2], i1335[3], i1335[4] )
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1339 = data
  i1338.name = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'value')
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.enabled = !!i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.width = i1345[1]
  i1344.height = i1345[2]
  i1344.mipmapCount = i1345[3]
  i1344.anisoLevel = i1345[4]
  i1344.filterMode = i1345[5]
  i1344.hdr = !!i1345[6]
  i1344.format = i1345[7]
  i1344.wrapMode = i1345[8]
  i1344.alphaIsTransparency = !!i1345[9]
  i1344.alphaSource = i1345[10]
  i1344.graphicsFormat = i1345[11]
  i1344.sRGBTexture = !!i1345[12]
  i1344.desiredColorSpace = i1345[13]
  i1344.wrapU = i1345[14]
  i1344.wrapV = i1345[15]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1347 = data
  i1346.name = i1347[0]
  i1346.index = i1347[1]
  i1346.startup = !!i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1349 = data
  i1348.aspect = i1349[0]
  i1348.orthographic = !!i1349[1]
  i1348.orthographicSize = i1349[2]
  i1348.backgroundColor = new pc.Color(i1349[3], i1349[4], i1349[5], i1349[6])
  i1348.nearClipPlane = i1349[7]
  i1348.farClipPlane = i1349[8]
  i1348.fieldOfView = i1349[9]
  i1348.depth = i1349[10]
  i1348.clearFlags = i1349[11]
  i1348.cullingMask = i1349[12]
  i1348.rect = i1349[13]
  request.r(i1349[14], i1349[15], 0, i1348, 'targetTexture')
  i1348.usePhysicalProperties = !!i1349[16]
  i1348.focalLength = i1349[17]
  i1348.sensorSize = new pc.Vec2( i1349[18], i1349[19] )
  i1348.lensShift = new pc.Vec2( i1349[20], i1349[21] )
  i1348.gateFit = i1349[22]
  i1348.commandBufferCount = i1349[23]
  i1348.cameraType = i1349[24]
  i1348.enabled = !!i1349[25]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.tagId = i1351[1]
  i1350.enabled = !!i1351[2]
  i1350.isStatic = !!i1351[3]
  i1350.layer = i1351[4]
  return i1350
}

Deserializers["Grill"] = function (request, data, root) {
  var i1352 = root || request.c( 'Grill' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('FoodSlot')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1352.foodSlots = i1354
  request.r(i1353[1], i1353[2], 0, i1352, 'graphic')
  request.r(i1353[3], i1353[4], 0, i1352, 'dishTarget')
  return i1352
}

Deserializers["GrillGraphicController"] = function (request, data, root) {
  var i1358 = root || request.c( 'GrillGraphicController' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'cover')
  request.r(i1359[2], i1359[3], 0, i1358, 'coverSR')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1361 = data
  i1360.center = new pc.Vec3( i1361[0], i1361[1], i1361[2] )
  i1360.size = new pc.Vec3( i1361[3], i1361[4], i1361[5] )
  i1360.enabled = !!i1361[6]
  i1360.isTrigger = !!i1361[7]
  request.r(i1361[8], i1361[9], 0, i1360, 'material')
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1363 = data
  i1362.color = new pc.Color(i1363[0], i1363[1], i1363[2], i1363[3])
  request.r(i1363[4], i1363[5], 0, i1362, 'sprite')
  i1362.flipX = !!i1363[6]
  i1362.flipY = !!i1363[7]
  i1362.drawMode = i1363[8]
  i1362.size = new pc.Vec2( i1363[9], i1363[10] )
  i1362.tileMode = i1363[11]
  i1362.adaptiveModeThreshold = i1363[12]
  i1362.maskInteraction = i1363[13]
  i1362.spriteSortPoint = i1363[14]
  i1362.enabled = !!i1363[15]
  request.r(i1363[16], i1363[17], 0, i1362, 'sharedMaterial')
  var i1365 = i1363[18]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 2, i1364, '')
  }
  i1362.sharedMaterials = i1364
  i1362.receiveShadows = !!i1363[19]
  i1362.shadowCastingMode = i1363[20]
  i1362.sortingLayerID = i1363[21]
  i1362.sortingOrder = i1363[22]
  i1362.lightmapIndex = i1363[23]
  i1362.lightmapSceneIndex = i1363[24]
  i1362.lightmapScaleOffset = new pc.Vec4( i1363[25], i1363[26], i1363[27], i1363[28] )
  i1362.lightProbeUsage = i1363[29]
  i1362.reflectionProbeUsage = i1363[30]
  return i1362
}

Deserializers["FoodSlot"] = function (request, data, root) {
  var i1368 = root || request.c( 'FoodSlot' )
  var i1369 = data
  i1368.food = request.d('FoodData', i1369[0], i1368.food)
  request.r(i1369[1], i1369[2], 0, i1368, 'sr')
  return i1368
}

Deserializers["FoodData"] = function (request, data, root) {
  var i1370 = root || request.c( 'FoodData' )
  var i1371 = data
  i1370.foodType = i1371[0]
  request.r(i1371[1], i1371[2], 0, i1370, 'foodSprite')
  return i1370
}

Deserializers["FoodSlotGraphicController"] = function (request, data, root) {
  var i1372 = root || request.c( 'FoodSlotGraphicController' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'dish')
  i1372.foodOffsetWidth = i1373[2]
  i1372.foodOffsetHeight = i1373[3]
  request.r(i1373[4], i1373[5], 0, i1372, 'leftPositionInDish')
  request.r(i1373[6], i1373[7], 0, i1372, 'middlePositionInDish')
  request.r(i1373[8], i1373[9], 0, i1372, 'rightPositionInDish')
  return i1372
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1374 = root || request.c( 'GameManager' )
  var i1375 = data
  i1374.numberOfClearableCategories = i1375[0]
  i1374.numberOfCategories = i1375[1]
  i1374.isGameStart = !!i1375[2]
  i1374.isGameOver = !!i1375[3]
  return i1374
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i1376 = root || request.c( 'LevelManager' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'levelData')
  var i1379 = i1377[2]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 1, i1378, '')
  }
  i1376.grills = i1378
  i1376.guideTargetGrillIndex = i1377[3]
  i1376.guideDonorGrillIndex = i1377[4]
  return i1376
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1382 = root || request.c( 'TutorialManager' )
  var i1383 = data
  i1382.isTutorial = !!i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'handGuide')
  return i1382
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i1384 = root || request.c( 'GuideManager' )
  var i1385 = data
  i1384.idleThreshold = i1385[0]
  i1384.wobbleAngle = i1385[1]
  i1384.wobbleSpeed = i1385[2]
  return i1384
}

Deserializers["DragManager"] = function (request, data, root) {
  var i1386 = root || request.c( 'DragManager' )
  var i1387 = data
  i1386.draggableLayer = UnityEngine.LayerMask.FromIntegerValue( i1387[0] )
  i1386.grillLayer = UnityEngine.LayerMask.FromIntegerValue( i1387[1] )
  i1386.canDrag = !!i1387[2]
  i1386.limitDragTime = i1387[3]
  request.r(i1387[4], i1387[5], 0, i1386, 'dragVisual')
  return i1386
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1388 = root || request.c( 'SoundManager' )
  var i1389 = data
  var i1391 = i1389[0]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 2, i1390, '')
  }
  i1388.audioClips = i1390
  request.r(i1389[1], i1389[2], 0, i1388, 'sound')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'clip')
  request.r(i1395[2], i1395[3], 0, i1394, 'outputAudioMixerGroup')
  i1394.playOnAwake = !!i1395[4]
  i1394.loop = !!i1395[5]
  i1394.time = i1395[6]
  i1394.volume = i1395[7]
  i1394.pitch = i1395[8]
  i1394.enabled = !!i1395[9]
  return i1394
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i1396 = root || request.c( 'CameraManager' )
  var i1397 = data
  i1396.refWidth = i1397[0]
  i1396.refHeight = i1397[1]
  i1396.refOrthoSize = i1397[2]
  request.r(i1397[3], i1397[4], 0, i1396, 'mainCamera')
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1399 = data
  i1398.ambientIntensity = i1399[0]
  i1398.reflectionIntensity = i1399[1]
  i1398.ambientMode = i1399[2]
  i1398.ambientLight = new pc.Color(i1399[3], i1399[4], i1399[5], i1399[6])
  i1398.ambientSkyColor = new pc.Color(i1399[7], i1399[8], i1399[9], i1399[10])
  i1398.ambientGroundColor = new pc.Color(i1399[11], i1399[12], i1399[13], i1399[14])
  i1398.ambientEquatorColor = new pc.Color(i1399[15], i1399[16], i1399[17], i1399[18])
  i1398.fogColor = new pc.Color(i1399[19], i1399[20], i1399[21], i1399[22])
  i1398.fogEndDistance = i1399[23]
  i1398.fogStartDistance = i1399[24]
  i1398.fogDensity = i1399[25]
  i1398.fog = !!i1399[26]
  request.r(i1399[27], i1399[28], 0, i1398, 'skybox')
  i1398.fogMode = i1399[29]
  var i1401 = i1399[30]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1401[i + 0]) );
  }
  i1398.lightmaps = i1400
  i1398.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1399[31], i1398.lightProbes)
  i1398.lightmapsMode = i1399[32]
  i1398.mixedBakeMode = i1399[33]
  i1398.environmentLightingMode = i1399[34]
  i1398.ambientProbe = new pc.SphericalHarmonicsL2(i1399[35])
  i1398.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1399[36])
  i1398.useReferenceAmbientProbe = !!i1399[37]
  request.r(i1399[38], i1399[39], 0, i1398, 'customReflection')
  request.r(i1399[40], i1399[41], 0, i1398, 'defaultReflection')
  i1398.defaultReflectionMode = i1399[42]
  i1398.defaultReflectionResolution = i1399[43]
  i1398.sunLightObjectId = i1399[44]
  i1398.pixelLightCount = i1399[45]
  i1398.defaultReflectionHDR = !!i1399[46]
  i1398.hasLightDataAsset = !!i1399[47]
  i1398.hasManualGenerate = !!i1399[48]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'lightmapColor')
  request.r(i1405[2], i1405[3], 0, i1404, 'lightmapDirection')
  request.r(i1405[4], i1405[5], 0, i1404, 'shadowMask')
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1406 = root || new UnityEngine.LightProbes()
  var i1407 = data
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1415 = data
  var i1417 = i1415[0]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1417[i + 0]));
  }
  i1414.ShaderCompilationErrors = i1416
  i1414.name = i1415[1]
  i1414.guid = i1415[2]
  var i1419 = i1415[3]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1414.shaderDefinedKeywords = i1418
  var i1421 = i1415[4]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1421[i + 0]) );
  }
  i1414.passes = i1420
  var i1423 = i1415[5]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1423[i + 0]) );
  }
  i1414.usePasses = i1422
  var i1425 = i1415[6]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1425[i + 0]) );
  }
  i1414.defaultParameterValues = i1424
  request.r(i1415[7], i1415[8], 0, i1414, 'unityFallbackShader')
  i1414.readDepth = !!i1415[9]
  i1414.hasDepthOnlyPass = !!i1415[10]
  i1414.isCreatedByShaderGraph = !!i1415[11]
  i1414.disableBatching = !!i1415[12]
  i1414.compiled = !!i1415[13]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1429 = data
  i1428.shaderName = i1429[0]
  i1428.errorMessage = i1429[1]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1434 = root || new pc.UnityShaderPass()
  var i1435 = data
  i1434.id = i1435[0]
  i1434.subShaderIndex = i1435[1]
  i1434.name = i1435[2]
  i1434.passType = i1435[3]
  i1434.grabPassTextureName = i1435[4]
  i1434.usePass = !!i1435[5]
  i1434.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[6], i1434.zTest)
  i1434.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[7], i1434.zWrite)
  i1434.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[8], i1434.culling)
  i1434.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1435[9], i1434.blending)
  i1434.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1435[10], i1434.alphaBlending)
  i1434.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[11], i1434.colorWriteMask)
  i1434.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[12], i1434.offsetUnits)
  i1434.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[13], i1434.offsetFactor)
  i1434.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[14], i1434.stencilRef)
  i1434.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[15], i1434.stencilReadMask)
  i1434.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[16], i1434.stencilWriteMask)
  i1434.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1435[17], i1434.stencilOp)
  i1434.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1435[18], i1434.stencilOpFront)
  i1434.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1435[19], i1434.stencilOpBack)
  var i1437 = i1435[20]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1437[i + 0]) );
  }
  i1434.tags = i1436
  var i1439 = i1435[21]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( i1439[i + 0] );
  }
  i1434.passDefinedKeywords = i1438
  var i1441 = i1435[22]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1441[i + 0]) );
  }
  i1434.passDefinedKeywordGroups = i1440
  var i1443 = i1435[23]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1443[i + 0]) );
  }
  i1434.variants = i1442
  var i1445 = i1435[24]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1445[i + 0]) );
  }
  i1434.excludedVariants = i1444
  i1434.hasDepthReader = !!i1435[25]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1447 = data
  i1446.val = i1447[0]
  i1446.name = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1449 = data
  i1448.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[0], i1448.src)
  i1448.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[1], i1448.dst)
  i1448.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[2], i1448.op)
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1451 = data
  i1450.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[0], i1450.pass)
  i1450.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[1], i1450.fail)
  i1450.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[2], i1450.zFail)
  i1450.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1451[3], i1450.comp)
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1455 = data
  i1454.name = i1455[0]
  i1454.value = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( i1461[i + 0] );
  }
  i1458.keywords = i1460
  i1458.hasDiscard = !!i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1465 = data
  i1464.passId = i1465[0]
  i1464.subShaderIndex = i1465[1]
  var i1467 = i1465[2]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1464.keywords = i1466
  i1464.vertexProgram = i1465[3]
  i1464.fragmentProgram = i1465[4]
  i1464.exportedForWebGl2 = !!i1465[5]
  i1464.readDepth = !!i1465[6]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1471 = data
  request.r(i1471[0], i1471[1], 0, i1470, 'shader')
  i1470.pass = i1471[2]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.type = i1475[1]
  i1474.value = new pc.Vec4( i1475[2], i1475[3], i1475[4], i1475[5] )
  i1474.textureValue = i1475[6]
  i1474.shaderPropertyFlag = i1475[7]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1477 = data
  i1476.name = i1477[0]
  request.r(i1477[1], i1477[2], 0, i1476, 'texture')
  i1476.aabb = i1477[3]
  i1476.vertices = i1477[4]
  i1476.triangles = i1477[5]
  i1476.textureRect = UnityEngine.Rect.MinMaxRect(i1477[6], i1477[7], i1477[8], i1477[9])
  i1476.packedRect = UnityEngine.Rect.MinMaxRect(i1477[10], i1477[11], i1477[12], i1477[13])
  i1476.border = new pc.Vec4( i1477[14], i1477[15], i1477[16], i1477[17] )
  i1476.transparency = i1477[18]
  i1476.bounds = i1477[19]
  i1476.pixelsPerUnit = i1477[20]
  i1476.textureWidth = i1477[21]
  i1476.textureHeight = i1477[22]
  i1476.nativeSize = new pc.Vec2( i1477[23], i1477[24] )
  i1476.pivot = new pc.Vec2( i1477[25], i1477[26] )
  i1476.textureRectOffset = new pc.Vec2( i1477[27], i1477[28] )
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1479 = data
  i1478.name = i1479[0]
  return i1478
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1480 = root || request.c( 'LevelData' )
  var i1481 = data
  var i1483 = i1481[0]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('FoodData')))
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.add(request.d('FoodData', i1483[i + 0]));
  }
  i1480.categories = i1482
  return i1480
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1487 = data
  i1486.useSafeMode = !!i1487[0]
  i1486.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1487[1], i1486.safeModeOptions)
  i1486.timeScale = i1487[2]
  i1486.unscaledTimeScale = i1487[3]
  i1486.useSmoothDeltaTime = !!i1487[4]
  i1486.maxSmoothUnscaledTime = i1487[5]
  i1486.rewindCallbackMode = i1487[6]
  i1486.showUnityEditorReport = !!i1487[7]
  i1486.logBehaviour = i1487[8]
  i1486.drawGizmos = !!i1487[9]
  i1486.defaultRecyclable = !!i1487[10]
  i1486.defaultAutoPlay = i1487[11]
  i1486.defaultUpdateType = i1487[12]
  i1486.defaultTimeScaleIndependent = !!i1487[13]
  i1486.defaultEaseType = i1487[14]
  i1486.defaultEaseOvershootOrAmplitude = i1487[15]
  i1486.defaultEasePeriod = i1487[16]
  i1486.defaultAutoKill = !!i1487[17]
  i1486.defaultLoopType = i1487[18]
  i1486.debugMode = !!i1487[19]
  i1486.debugStoreTargetId = !!i1487[20]
  i1486.showPreviewPanel = !!i1487[21]
  i1486.storeSettingsLocation = i1487[22]
  i1486.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1487[23], i1486.modules)
  i1486.createASMDEF = !!i1487[24]
  i1486.showPlayingTweens = !!i1487[25]
  i1486.showPausedTweens = !!i1487[26]
  return i1486
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1488 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1489 = data
  i1488.logBehaviour = i1489[0]
  i1488.nestedTweenFailureBehaviour = i1489[1]
  return i1488
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1491 = data
  i1490.showPanel = !!i1491[0]
  i1490.audioEnabled = !!i1491[1]
  i1490.physicsEnabled = !!i1491[2]
  i1490.physics2DEnabled = !!i1491[3]
  i1490.spriteEnabled = !!i1491[4]
  i1490.uiEnabled = !!i1491[5]
  i1490.uiToolkitEnabled = !!i1491[6]
  i1490.textMeshProEnabled = !!i1491[7]
  i1490.tk2DEnabled = !!i1491[8]
  i1490.deAudioEnabled = !!i1491[9]
  i1490.deUnityExtendedEnabled = !!i1491[10]
  i1490.epoOutlineEnabled = !!i1491[11]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1493 = data
  var i1495 = i1493[0]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1495[i + 0]) );
  }
  i1492.files = i1494
  i1492.componentToPrefabIds = i1493[1]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1499 = data
  i1498.path = i1499[0]
  request.r(i1499[1], i1499[2], 0, i1498, 'unityObject')
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1501 = data
  var i1503 = i1501[0]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1503[i + 0]) );
  }
  i1500.scriptsExecutionOrder = i1502
  var i1505 = i1501[1]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1505[i + 0]) );
  }
  i1500.sortingLayers = i1504
  var i1507 = i1501[2]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1507[i + 0]) );
  }
  i1500.cullingLayers = i1506
  i1500.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1501[3], i1500.timeSettings)
  i1500.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1501[4], i1500.physicsSettings)
  i1500.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1501[5], i1500.physics2DSettings)
  i1500.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1501[6], i1500.qualitySettings)
  i1500.enableRealtimeShadows = !!i1501[7]
  i1500.enableAutoInstancing = !!i1501[8]
  i1500.enableStaticBatching = !!i1501[9]
  i1500.enableDynamicBatching = !!i1501[10]
  i1500.lightmapEncodingQuality = i1501[11]
  i1500.desiredColorSpace = i1501[12]
  var i1509 = i1501[13]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( i1509[i + 0] );
  }
  i1500.allTags = i1508
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.value = i1513[1]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1517 = data
  i1516.id = i1517[0]
  i1516.name = i1517[1]
  i1516.value = i1517[2]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1521 = data
  i1520.id = i1521[0]
  i1520.name = i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1523 = data
  i1522.fixedDeltaTime = i1523[0]
  i1522.maximumDeltaTime = i1523[1]
  i1522.timeScale = i1523[2]
  i1522.maximumParticleTimestep = i1523[3]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1525 = data
  i1524.gravity = new pc.Vec3( i1525[0], i1525[1], i1525[2] )
  i1524.defaultSolverIterations = i1525[3]
  i1524.bounceThreshold = i1525[4]
  i1524.autoSyncTransforms = !!i1525[5]
  i1524.autoSimulation = !!i1525[6]
  var i1527 = i1525[7]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1527[i + 0]) );
  }
  i1524.collisionMatrix = i1526
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1531 = data
  i1530.enabled = !!i1531[0]
  i1530.layerId = i1531[1]
  i1530.otherLayerId = i1531[2]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'material')
  i1532.gravity = new pc.Vec2( i1533[2], i1533[3] )
  i1532.positionIterations = i1533[4]
  i1532.velocityIterations = i1533[5]
  i1532.velocityThreshold = i1533[6]
  i1532.maxLinearCorrection = i1533[7]
  i1532.maxAngularCorrection = i1533[8]
  i1532.maxTranslationSpeed = i1533[9]
  i1532.maxRotationSpeed = i1533[10]
  i1532.baumgarteScale = i1533[11]
  i1532.baumgarteTOIScale = i1533[12]
  i1532.timeToSleep = i1533[13]
  i1532.linearSleepTolerance = i1533[14]
  i1532.angularSleepTolerance = i1533[15]
  i1532.defaultContactOffset = i1533[16]
  i1532.autoSimulation = !!i1533[17]
  i1532.queriesHitTriggers = !!i1533[18]
  i1532.queriesStartInColliders = !!i1533[19]
  i1532.callbacksOnDisable = !!i1533[20]
  i1532.reuseCollisionCallbacks = !!i1533[21]
  i1532.autoSyncTransforms = !!i1533[22]
  var i1535 = i1533[23]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1535[i + 0]) );
  }
  i1532.collisionMatrix = i1534
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1539 = data
  i1538.enabled = !!i1539[0]
  i1538.layerId = i1539[1]
  i1538.otherLayerId = i1539[2]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1543[i + 0]) );
  }
  i1540.qualityLevels = i1542
  var i1545 = i1541[1]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( i1545[i + 0] );
  }
  i1540.names = i1544
  i1540.shadows = i1541[2]
  i1540.anisotropicFiltering = i1541[3]
  i1540.antiAliasing = i1541[4]
  i1540.lodBias = i1541[5]
  i1540.shadowCascades = i1541[6]
  i1540.shadowDistance = i1541[7]
  i1540.shadowmaskMode = i1541[8]
  i1540.shadowProjection = i1541[9]
  i1540.shadowResolution = i1541[10]
  i1540.softParticles = !!i1541[11]
  i1540.softVegetation = !!i1541[12]
  i1540.activeColorSpace = i1541[13]
  i1540.desiredColorSpace = i1541[14]
  i1540.masterTextureLimit = i1541[15]
  i1540.maxQueuedFrames = i1541[16]
  i1540.particleRaycastBudget = i1541[17]
  i1540.pixelLightCount = i1541[18]
  i1540.realtimeReflectionProbes = !!i1541[19]
  i1540.shadowCascade2Split = i1541[20]
  i1540.shadowCascade4Split = new pc.Vec3( i1541[21], i1541[22], i1541[23] )
  i1540.streamingMipmapsActive = !!i1541[24]
  i1540.vSyncCount = i1541[25]
  i1540.asyncUploadBufferSize = i1541[26]
  i1540.asyncUploadTimeSlice = i1541[27]
  i1540.billboardsFaceCameraPosition = !!i1541[28]
  i1540.shadowNearPlaneOffset = i1541[29]
  i1540.streamingMipmapsMemoryBudget = i1541[30]
  i1540.maximumLODLevel = i1541[31]
  i1540.streamingMipmapsAddAllCameras = !!i1541[32]
  i1540.streamingMipmapsMaxLevelReduction = i1541[33]
  i1540.streamingMipmapsRenderersPerFrame = i1541[34]
  i1540.resolutionScalingFixedDPIFactor = i1541[35]
  i1540.streamingMipmapsMaxFileIORequests = i1541[36]
  i1540.currentQualityLevel = i1541[37]
  return i1540
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[1],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[44],"52":[44],"53":[44],"54":[44],"55":[44],"56":[44],"57":[1],"58":[59],"60":[61],"62":[61],"63":[64],"65":[9],"66":[1],"67":[68],"69":[70],"71":[63],"72":[64],"73":[59,64],"74":[64,75],"76":[64],"77":[75,64],"78":[59],"79":[75,64],"80":[64],"81":[82],"83":[82],"84":[82],"85":[64],"86":[64],"87":[63],"88":[75,64],"89":[64],"90":[63],"91":[64],"92":[64],"93":[64],"94":[64],"95":[64],"96":[64],"97":[64],"98":[64],"99":[64],"100":[75,64],"101":[64],"102":[64],"103":[64],"104":[64],"105":[75,64],"106":[64],"107":[70],"108":[70],"109":[70],"110":[70],"111":[1],"112":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Grill","FoodSlot","GrillGraphicController","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.Sprite","UnityEngine.Material","FoodSlotGraphicController","GameManager","LevelManager","LevelData","TutorialManager","GuideManager","DragManager","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","CameraManager","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "Steam It Ver1";

Deserializers.lunaInitializationTime = "05/05/2026 01:55:51";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "f19f0f28-0e5e-476e-aefe-8ba2e0b5c9ec";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

