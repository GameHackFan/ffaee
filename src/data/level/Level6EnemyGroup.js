export const level6EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 100,
    screenPositionEnd: 500,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,    // -192 + 0
    levelEditorLimitEnd: 700,
    levelEditorShiftX: 492,         // 492 - 0
    defaultAmount: 7,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 600,
    screenPositionEnd: 1000,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 500, 
    levelEditorLimitEnd: 1150,
    levelEditorShiftX: 492,         // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level6A",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 1300,
    screenPositionEnd: 1400,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 900, 
    levelEditorLimitEnd: 1728,
    levelEditorShiftX: 492,         // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
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
    levelEditorShiftX: 492,         // 492 - 0
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
  },


  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 1750,
    screenPositionEnd: 2200,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 1496,    // -192 + 1536 + 152
    levelEditorLimitEnd: 2400,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 4,
    maxAmount: 30,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 2250,
    screenPositionEnd: 2650,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 2200,
    levelEditorLimitEnd: 2850,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 11,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group6:
  {
    key: "group6",
    label: "Enemy Group 6",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 2700,
    screenPositionEnd: 3100,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 2650,
    levelEditorLimitEnd: 3394,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 3,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
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
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group7:
  {
    key: "group7",
    label: "Enemy Group 7",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 3430,
    screenPositionEnd: 3800,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 3394,
    levelEditorLimitEnd: 4000,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group8:
  {
    key: "group8",
    label: "Enemy Group 8",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 3800,
    screenPositionEnd: 4200,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 3750,
    levelEditorLimitEnd: 4400,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 9,
    maxAmount: 30,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group9:
  {
    key: "group9",
    label: "Enemy Group 9",
    background: "level6B",
    startPosition: 507490,
    endPosition: 510893,
    screenPositionStart: 4200,
    screenPositionEnd: 4550,
    walkablePositionYTop: 48,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 4150,
    levelEditorLimitEnd: 4928,
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 8,
    maxAmount: 25,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList"]
  },
  lockGroup3:
  {
    key: "lockGroup3",
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
    levelEditorShiftX: -1044,       // 492 - 1536
    defaultAmount: 1,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group10:
  {
    key: "group10",
    label: "Enemy Group 10",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 5300,
    screenPositionEnd: 5650,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 4944,    // -192 + 5136
    levelEditorLimitEnd: 5850,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 8,
    maxAmount: 35
  },
  group11:
  {
    key: "group11",
    label: "Enemy Group 11",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 5650,
    screenPositionEnd: 6050,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 5550,
    levelEditorLimitEnd: 6250,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 8,
    maxAmount: 40
  },
  group12:
  {
    key: "group12",
    label: "Enemy Group 12",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 6050,
    screenPositionEnd: 6400,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 5950,
    levelEditorLimitEnd: 6650,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 8,
    maxAmount: 35
  },
  extraLockGroup1:
  {
    key: "extraLockGroup1",
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
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["staticObjectList"]
  },


  group13:
  {
    key: "group13",
    label: "Enemy Group 13",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 7000,
    screenPositionEnd: 7450,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 6928,
    levelEditorLimitEnd: 7650,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 5,
    maxAmount: 40
  },
  group14:
  {
    key: "group14",
    label: "Enemy Group 14",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 7500,
    screenPositionEnd: 7950,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 7450,
    levelEditorLimitEnd: 8256,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 5,
    maxAmount: 40
  },
  lockGroup4:
  {
    key: "lockGroup4",
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
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["staticObjectList"]
  },


  group15:
  {
    key: "group15",
    label: "Enemy Group 15",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 8300,
    screenPositionEnd: 8650,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 8256,
    levelEditorLimitEnd: 8850,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 4,
    maxAmount: 35
  },
  group16:
  {
    key: "group16",
    label: "Enemy Group 16",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 8650,
    screenPositionEnd: 9000,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 8600,
    levelEditorLimitEnd: 9200,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 4,
    maxAmount: 40
  },
  group17:
  {
    key: "group17",
    label: "Enemy Group 17",
    background: "level6C",
    startPosition: 512974,
    endPosition: 517229,
    screenPositionStart: 9000,
    screenPositionEnd: 9350,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 8950,
    levelEditorLimitEnd: 9648,
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 4,
    maxAmount: 35,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  lockGroup5:
  {
    key: "lockGroup5",
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
    levelEditorShiftX: -4644,       // 492 - 5136
    defaultAmount: 10,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
  },


  group18:
  {
    key: "group18",
    label: "Enemy Group 18",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 10130,
    screenPositionEnd: 10630,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 9792,    // -192 + 9984
    levelEditorLimitEnd: 10850,
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 16,
    maxAmount: 35
  },
  group19:
  {
    key: "group19",
    label: "Enemy Group 19",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 10680,
    screenPositionEnd: 11150,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 10650,
    levelEditorLimitEnd: 11456,
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 14,
    maxAmount: 35
  },
  lockGroup6:
  {
    key: "lockGroup6",
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
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["staticObjectList"]
  },


  group20:
  {
    key: "group20",
    label: "Enemy Group 20",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 11500,
    screenPositionEnd: 11900,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 11456,
    levelEditorLimitEnd: 12100,
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 5,
    maxAmount: 25
  },
  group21:
  {
    key: "group21",
    label: "Enemy Group 21",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 11900,
    screenPositionEnd: 12250,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    levelEditorLimitStart: 11850,
    levelEditorLimitEnd: 12530,
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 2,
    maxAmount: 25
  },
  lockGroup7:
  {
    key: "lockGroup7",
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
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 12,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["staticObjectList"]
  },

  group22:
  {
    key: "group22",
    label: "Enemy Group 22",
    background: "level6D",
    startPosition: 519292,
    endPosition: 521279,
    screenPositionStart: 12540,
    screenPositionEnd: 12780,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 2048,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 12530,
    levelEditorLimitEnd: 13056,
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 0,
    maxAmount: 20,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList", "shootingBugList"]
  },


  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
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
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 4,
    maxAmount: 18,                  // 18, but 2 space for 2 extra boss
    extraBoss: "belger",
    bossSpawnFirst: true,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList", "shootingBugList"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
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
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 3,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList", "shootingBugList"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
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
    levelEditorShiftX: -9492,       // 492 - 9984
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList",
        "staticObjectList", "shootingBugList"]
  }
}


// level6A begins at 00 00 (0000) (0)
// level6B begins at 00 06 (0600) (1536)
// level6C begins at 10 14 (1410) (5136)
// level6D begins at 00 27 (2700) (9984)


// level6A1    64, 16            
// level6A2    48, 16
// level6B    2096, 2064
// level6C    2112, 2064
// level6D    2112, 2064