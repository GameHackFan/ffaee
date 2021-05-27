const level6EnemyGroup =
{
  group1:
  {
    label: "Enemy Group 1",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 100,
    screenPositionEnd: 450,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,  // -192 + 0
    levelEditorLimitEnd: 450,
    levelEditorShiftX: 492,       // 492 - 0
    defaultAmount: 7,
    maxAmount: 20,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group2:
  {
    label: "Enemy Group 2",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 460,
    screenPositionEnd: 900,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 450, 
    levelEditorLimitEnd: 900,
    levelEditorShiftX: 492,       // 492 - 0
    defaultAmount: 9,
    maxAmount: 30,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group3:
  {
    label: "Enemy Group 3",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 910,
    screenPositionEnd: 1400,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 900, 
    levelEditorLimitEnd: 1728,
    levelEditorShiftX: 492,       // 492 - 0
    defaultAmount: 9,
    maxAmount: 30,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  lockGroup1:
  {
    label: "Lock Enemy Group 1",
    background: "level6A",
    startPosition: 510924,
    endPosition: 511581,
    enemyAmountOffset: -10,
    screenPositionStart: 1536,
    screenPositionEnd: 1536,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1344,
    levelEditorLimitEnd: 1728,
    levelEditorShiftX: 492,       // 492 - 0
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList"]
  },


  group4:
  {
    label: "Enemy Group 4",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 1700,
    screenPositionEnd: 2220,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 1496,  // -192 + 1536 + 152
    levelEditorLimitEnd: 2240,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 4,
    maxAmount: 30,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group5:
  {
    label: "Enemy Group 5",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 2240,
    screenPositionEnd: 2780,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 2240,
    levelEditorLimitEnd: 2800,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 11,
    maxAmount: 30,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group6:
  {
    label: "Enemy Group 6",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 2800,
    screenPositionEnd: 3200,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 2800,
    levelEditorLimitEnd: 3394,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 3,
    maxAmount: 20,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup2:
  {
    label: "Lock Enemy Group 2",
    background: "level6B",
    startPosition: 511606,
    endPosition: 512259,
    enemyAmountOffset: -10,
    screenPositionStart: 3202,
    screenPositionEnd: 3202,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3010,
    levelEditorLimitEnd: 3394,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList"]
  },


  group7:
  {
    label: "Enemy Group 7",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 3400,
    screenPositionEnd: 4100,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 3394,
    levelEditorLimitEnd: 4110,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 12,
    maxAmount: 40,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group8:
  {
    label: "Enemy Group 8",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 4120,
    screenPositionEnd: 4600,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 4110,
    levelEditorLimitEnd: 4928,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 14,
    maxAmount: 40,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList"]
  },
  lockGroup3:
  {
    label: "Lock Enemy Group 3",
    background: "level6B",
    startPosition: 512284,
    endPosition: 512953,
    enemyAmountOffset: -10,
    screenPositionStart: 4736,
    screenPositionEnd: 4736,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 4544,
    levelEditorLimitEnd: 4928,
    levelEditorShiftX: -1044,     // 492 - 1536
    defaultAmount: 1,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group9:
  {
    label: "Enemy Group 9",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 5250,
    screenPositionEnd: 5890,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 4944,  // -192 + 5136
    levelEditorLimitEnd: 5900,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 7,
    maxAmount: 50
  },
  group10:
  {
    label: "Enemy Group 10",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 5900,
    screenPositionEnd: 6640,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 5900,
    levelEditorLimitEnd: 6650,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 17,
    maxAmount: 50
  },
  extraLockGroup1:
  {
    label: "Extra Lock Enemy Group 1",
    background: "level6C",
    startPosition: 517254,
    endPosition: 517913,
    enemyAmountOffset: -10,
    screenPositionStart: 6736,
    screenPositionEnd: 6736,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 6544,
    levelEditorLimitEnd: 6928,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy"
  },
  group11:
  {
    label: "Enemy Group 11",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 6650,
    screenPositionEnd: 7390,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 6650,
    levelEditorLimitEnd: 7400,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 5,
    maxAmount: 50
  },
  group12:
  {
    label: "Enemy Group 12",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 7400,
    screenPositionEnd: 8050,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 7400,
    levelEditorLimitEnd: 8256,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 5,
    maxAmount: 50
  },
  lockGroup4:
  {
    label: "Lock Enemy Group 4",
    background: "level6C",
    startPosition: 517938,
    endPosition: 518591,
    enemyAmountOffset: -10,
    screenPositionStart: 8064,
    screenPositionEnd: 8064,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 7872,
    levelEditorLimitEnd: 8256,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy"
  },


  group13:
  {
    label: "Enemy Group 13",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 8270,
    screenPositionEnd: 8850,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 8256,
    levelEditorLimitEnd: 8860,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 6,
    maxAmount: 50
  },
  group14:
  {
    label: "Enemy Group 14",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 8860,
    screenPositionEnd: 9350,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 8860,
    levelEditorLimitEnd: 9648,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 6,
    maxAmount: 50,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  lockGroup5:
  {
    label: "Lock Enemy Group 5",
    background: "level6C",
    startPosition: 518616,
    endPosition: 519271,
    enemyAmountOffset: -10,
    screenPositionStart: 9456,
    screenPositionEnd: 9456,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 9264,
    levelEditorLimitEnd: 9648,
    levelEditorShiftX: -4644,     // 492 - 5136
    defaultAmount: 10,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList"]
  },


  group15:
  {
    label: "Enemy Group 15",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 10130,
    screenPositionEnd: 10640,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 9792,  // -192 + 9984
    levelEditorLimitEnd: 10650,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 16,
    maxAmount: 40
  },
  group16:
  {
    label: "Enemy Group 16",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 10650,
    screenPositionEnd: 11250,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 10650,
    levelEditorLimitEnd: 11456,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 14,
    maxAmount: 40
  },
  lockGroup6:
  {
    label: "Lock Enemy Group 6",
    background: "level6D",
    startPosition: 521304,
    endPosition: 521957,
    enemyAmountOffset: -10,
    screenPositionStart: 11264,
    screenPositionEnd: 11264,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 11072,
    levelEditorLimitEnd: 11456,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy"
  },


  group17:
  {
    label: "Enemy Group 17",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 11460,
    screenPositionEnd: 11970,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 11456,
    levelEditorLimitEnd: 11980,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 5,
    maxAmount: 20
  },
  group18:
  {
    label: "Enemy Group 18",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 11980,
    screenPositionEnd: 12520,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 11980,
    levelEditorLimitEnd: 12530,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 2,
    maxAmount: 30
  },
  lockGroup7:
  {
    label: "Lock Enemy Group 7",
    background: "level6D",
    startPosition: 521982,
    endPosition: 522635,
    enemyAmountOffset: -10,
    screenPositionStart: 12338,
    screenPositionEnd: 12338,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 12146,
    levelEditorLimitEnd: 12530,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy"
  },

  group19:
  {
    label: "Enemy Group 19",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 12530,
    screenPositionEnd: 12730,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 12530,
    levelEditorLimitEnd: 13056,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 0,
    maxAmount: 10,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },


  bossHelperGroup1:
  {
    label: "Boss Helper Group 1",
    background: "level6D",
    startPosition: 522660,
    endPosition: 522989,
    enemyAmountOffset: -10,
    screenPositionStart: 12864,
    screenPositionEnd: 12864,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 12672,
    levelEditorLimitEnd: 13056,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 4,
    maxAmount: 18,  // 18, but 2 space for 2 extra boss
    extraBoss: "belger",
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList"]
  },
  bossHelperGroup2:
  {
    label: "Boss Helper Group 2",
    background: "level6D",
    startPosition: 523012,
    endPosition: 523349,
    enemyAmountOffset: -10,
    screenPositionStart: 12864,
    screenPositionEnd: 12864,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 12672,
    levelEditorLimitEnd: 13056,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 3,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList"]
  },
  bossHelperGroup3:
  {
    label: "Boss Helper Group 3",
    background: "level6D",
    startPosition: 523372,
    endPosition: 523713,
    enemyAmountOffset: -10,
    screenPositionStart: 12864,
    screenPositionEnd: 12864,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 12672,
    levelEditorLimitEnd: 13056,
    levelEditorShiftX: -9492,     // 492 - 9984
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList"]
  }
}


// level6A begins at 00 00 (0000) (0)
// level6B begins at 00 06 (0600) (1536)
// level6C begins at 10 14 (1410) (5136)
// level6D begins at 00 27 (2700) (9984)


// level6A1   64, 16            
// level6A2   48, 16
// level6B    2096, 2064
// level6C    2112, 2064
// level6D    2112, 2064
export default level6EnemyGroup;