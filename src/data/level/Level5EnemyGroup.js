export const level5EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 100,        // 100
    screenPositionEnd: 500,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,     // -192 + 0
    levelEditorLimitEnd: 700,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 3,
    maxAmount: 20,
    forbiddenPositionRanges: ["outsideLeft"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnLeftList"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 700,
    screenPositionEnd: 1100,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 650,
    levelEditorLimitEnd: 1300,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 6,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 1300,
    screenPositionEnd: 1750,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1250,
    levelEditorLimitEnd: 2082,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 16,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level5",
    startPosition: 503414,
    endPosition: 503747,
    enemyAmountOffset: -10,
    screenPositionStart: 1890,
    screenPositionEnd: 1890,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1698,
    levelEditorLimitEnd: 2082,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level5",
    startPosition: 503770,
    endPosition: 504101,
    enemyAmountOffset: -10,
    screenPositionStart: 1890,
    screenPositionEnd: 1890,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1698,
    levelEditorLimitEnd: 2082,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 2050,
    screenPositionEnd: 2400,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 2082,
    levelEditorLimitEnd: 2600,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 2400,
    screenPositionEnd: 2850,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 2350,
    levelEditorLimitEnd: 3138,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 7,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level5",
    startPosition: 504126,
    endPosition: 504617,
    enemyAmountOffset: -10,
    screenPositionStart: 2946,
    screenPositionEnd: 2946,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2754,
    levelEditorLimitEnd: 3138,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 14,
    maxAmount: 30,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group6:
  {
    key: "group6",
    label: "Enemy Group 6",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 3200,
    screenPositionEnd: 3600,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 3150,
    levelEditorLimitEnd: 3800,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 14,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group7:
  {
    key: "group7",
    label: "Enemy Group 7",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 3650,
    screenPositionEnd: 4050,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 3600,
    levelEditorLimitEnd: 4378,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 6,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level5",
    startPosition: 504642,
    endPosition: 504975,
    enemyAmountOffset: -10,
    screenPositionStart: 4186,
    screenPositionEnd: 4186,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3994,
    levelEditorLimitEnd: 4378,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 30,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },
  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level5",
    startPosition: 504998,
    endPosition: 505333,
    enemyAmountOffset: -10,
    screenPositionStart: 4186,
    screenPositionEnd: 4186,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3994,
    levelEditorLimitEnd: 4378,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 30,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group8:
  {
    key: "group8",
    label: "Enemy Group 8",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 4400,
    screenPositionEnd: 4950,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 4378,
    levelEditorLimitEnd: 5248,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 15,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup6:
  {
    key: "lockGroup6",
    label: "Lock Enemy Group 6",
    background: "level5",
    startPosition: 505356,
    endPosition: 505691,
    enemyAmountOffset: -10,
    screenPositionStart: 5056,
    screenPositionEnd: 5056,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 4864,
    levelEditorLimitEnd: 5248,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 30,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },

  
  group9:
  {
    key: "group9",
    label: "Enemy Group 9",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 5350,
    screenPositionEnd: 5750,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 5248,
    levelEditorLimitEnd: 5950,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 14,
    maxAmount: 20,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group10:
  {
    key: "group10",
    label: "Enemy Group 10",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 5800,
    screenPositionEnd: 6200,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 5750,
    levelEditorLimitEnd: 6400,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 14,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group11:
  {
    key: "group11",
    label: "Enemy Group 11",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 6250,
    screenPositionEnd: 6650,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 6200,
    levelEditorLimitEnd: 6912,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 13,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },  
  lockGroup7:
  {
    key: "lockGroup7",
    label: "Lock Enemy Group 7",
    background: "level5",
    startPosition: 505716,
    endPosition: 506369,
    enemyAmountOffset: -10,
    screenPositionStart: 6720,
    screenPositionEnd: 6720,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 6528,
    levelEditorLimitEnd: 6912,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 12,
    maxAmount: 30,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group12:
  {
    key: "group12",
    label: "Enemy Group 12",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 6950,
    screenPositionEnd: 7350,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 6912,
    levelEditorLimitEnd: 7600,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 9,
    maxAmount: 20,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group13:
  {
    key: "group13",
    label: "Enemy Group 13",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 7400,
    screenPositionEnd: 7800,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 7350,
    levelEditorLimitEnd: 8000,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group14:
  {
    key: "group14",
    label: "Enemy Group 14",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 7850,
    screenPositionEnd: 8250,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 7800,
    levelEditorLimitEnd: 8450,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList"]
  },
  group15:
  {
    key: "group15",
    label: "Enemy Group 15",
    background: "level5",
    startPosition: 498324,
    endPosition: 503387,
    screenPositionStart: 8300,
    screenPositionEnd: 8700,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 8250,
    levelEditorLimitEnd: 9024,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 9,
    maxAmount: 25,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList"]
  },


  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Group 1",
    background: "level5",
    startPosition: 506394,
    endPosition: 506727,
    enemyAmountOffset: -10,
    screenPositionStart: 8832,
    screenPositionEnd: 8832,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 8640,
    levelEditorLimitEnd: 9024,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 6,
    maxAmount: 18,                   // 20, but 2 space for 2 extra boss
    extraBoss: "abigail",
    bossSpawnFirst: true,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },
  bossHelperGroup2:
  {
    key: "bossHelperGroup2",
    label: "Boss Helper Group 2",
    background: "level5",
    startPosition: 506750,
    endPosition: 507085,
    enemyAmountOffset: -10,
    screenPositionStart: 8832,
    screenPositionEnd: 8832,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 8640,
    levelEditorLimitEnd: 9024,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 5,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },
  bossHelperGroup3:
  {
    key: "bossHelperGroup3",
    label: "Boss Helper Group 3",
    background: "level5",
    startPosition: 507108,
    endPosition: 507441,
    enemyAmountOffset: -10,
    screenPositionStart: 8832,
    screenPositionEnd: 8832,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 8640,
    levelEditorLimitEnd: 9024,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  }
}


// level5A begins at 00 00 (0000)

// level5    64, 16