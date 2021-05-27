const level2EnemyGroup =
{
  group1:
  {
    label: "Enemy Group 1",
    background: "level2A",
    startPosition: 485784,
    endPosition: 486221,
    screenPositionStart: 150,
    screenPositionEnd: 450,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,  // -192 + 0
    levelEditorLimitEnd: 500,    
    levelEditorShiftX: 492,      // 492 - 0
    defaultAmount: 5,
    maxAmount: 15,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group2:
  {
    label: "Enemy Group 2",
    background: "level2A",
    startPosition: 485784,
    endPosition: 486221,
    screenPositionStart: 450,
    screenPositionEnd: 780,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 500,
    levelEditorLimitEnd: 1024,
    levelEditorShiftX: 492,      // 492 - 0
    defaultAmount: 3,
    maxAmount: 15,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList"]
  },
  lockGroup1:
  {
    label: "Lock Enemy Group 1",
    background: "level2A",
    startPosition: 486254,
    endPosition: 486587,
    enemyAmountOffset: -10,
    screenPositionStart: 832,
    screenPositionEnd: 832,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 640,
    levelEditorLimitEnd: 1024,
    levelEditorShiftX: 492,      // 492 - 0
    defaultAmount: 6,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group3:
  {
    label: "Enemy Group 3",
    background: "level2B",
    startPosition: 486606,
    endPosition: 487605,
    screenPositionStart: 1380,
    screenPositionEnd: 1780,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1088,  // -192 + 1280
    levelEditorLimitEnd: 1788,    
    levelEditorShiftX: -788,      // 492 - 1280
    defaultAmount: 8,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group4:
  {
    label: "Enemy Group 4",
    background: "level2B",
    startPosition: 486606,
    endPosition: 487605,
    screenPositionStart: 1800,
    screenPositionEnd: 2400,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1788,
    levelEditorLimitEnd: 2624,    
    levelEditorShiftX: -788,      // 492 - 1280
    defaultAmount: 11,
    maxAmount: 25,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup2:
  {
    label: "Lock Enemy Group 2",
    background: "level2B",
    startPosition: 487630,
    endPosition: 487961,
    enemyAmountOffset: -10,
    screenPositionStart: 2432,
    screenPositionEnd: 2432,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2240,
    levelEditorLimitEnd: 2624,
    levelEditorShiftX: -788,      // 492 - 1280
    defaultAmount: 5,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenEnemyLists: ["chandelierList",
        "staticObjectList"]
  },


  group5:
  {
    label: "Enemy Group 5",
    background: "level2B",
    startPosition: 486606,
    endPosition: 487605,
    screenPositionStart: 2700,
    screenPositionEnd: 3100,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 2624,
    levelEditorLimitEnd: 3488,    
    levelEditorShiftX: -788,      // 492 - 1280
    defaultAmount: 9,
    maxAmount: 20,
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList"]
  },
  lockGroup3:
  {
    label: "Lock Enemy Group 3",
    background: "level2B",
    startPosition: 487986,
    endPosition: 488327,
    enemyAmountOffset: -10,
    screenPositionStart: 3296,
    screenPositionEnd: 3296,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3104,
    levelEditorLimitEnd: 3488,
    levelEditorShiftX: -788,      // 492 - 1280
    defaultAmount: 6,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group6:
  {
    label: "Enemy Group 6",
    background: "level2C",
    startPosition: 488338,
    endPosition: 488777,
    screenPositionStart: 3900,
    screenPositionEnd: 4050,
    walkablePositionYTop: 80,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 3648,  // -192 + 3840
    levelEditorLimitEnd: 4416,    
    levelEditorShiftX: -3348,      // 492 - 3840
    defaultAmount: 14,
    maxAmount: 20,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup4:
  {
    label: "Lock Enemy Group 4",
    background: "level2C",
    startPosition: 488802,
    endPosition: 489135,
    enemyAmountOffset: -10,
    screenPositionStart: 4224,
    screenPositionEnd: 4224,
    walkablePositionYTop: 80,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 4032,
    levelEditorLimitEnd: 4416,
    levelEditorShiftX: -3348,      // 492 - 3840
    defaultAmount: 7,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group7:
  {
    label: "Enemy Group 7",
    background: "level2D",
    startPosition: 489154,
    endPosition: 489453,
    screenPositionStart: 4680,
    screenPositionEnd: 4800,
    walkablePositionYTop: 80,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 4416,   // -192 + 4608
    levelEditorLimitEnd: 5184,    
    levelEditorShiftX: -4116,      // 492 - 4608
    defaultAmount: 0,
    maxAmount: 18,  // 20, but 2 space for 2 extra boss
    extraBoss: "sodom",
    specialProfile: "ringStrategy",
    forbiddenPositionRanges:["outsideLeft",
        "outsideRight"],
    forbiddenEnemyLists: ["mustSpawnLeftList",
        "mustSpawnRightList", "staticObjectList"]
  },
  bossHelperExtraEnemyGroup1: // TODO: Add all values
  {
    disabled: true,
    label: "Boss Helper Extra Enemy Group 1",
    background: "level2D",
  }
}


// level2A begins at 00 00 (0000) (0)
// level2B begins at 00 05 (0500) (1280)
// level2C begins at 00 0F (0F00) (3840)
// level2D begins at 00 12 (1200) (4608)

// level2A    64, 16
// level2B    64, 16
// level2C    80, 16
// level2D    80, 16
export default level2EnemyGroup;