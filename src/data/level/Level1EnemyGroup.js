const level1EnemyGroup =
{
  group1:
  {
    label: "Enemy Group 1",
    background: "level1A",
    startPosition: 483226,
    endPosition: 483663,
    screenPositionStart: 100,
    screenPositionEnd: 400,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -96,			// -192 + 96
    levelEditorLimitEnd: 450,    
    levelEditorShiftX: 396,					// 492 - 96
    defaultAmount: 5,
    maxAmount: 15,
    forbiddenEnemyLists: ["chandelierList"]
  },
  group2:
  {
    label: "Enemy Group 2",
    background: "level1A",
    startPosition: 483226,
    endPosition: 483663,
    screenPositionStart: 450,
    screenPositionEnd: 800,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 450,
    levelEditorLimitEnd: 1200,
    levelEditorShiftX: 396,					// 492 - 96
    defaultAmount: 6,
    maxAmount: 15,
    forbiddenEnemyLists: ["chandelierList"]
  },
  lockGroup1:
  {
    label: "Lock Enemy Group 1",
    background: "level1A",
    startPosition: 483694,
    endPosition: 484027,
    enemyAmountOffset: -10,
    screenPositionStart: 1008,
    screenPositionEnd: 1008,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 816,
    levelEditorLimitEnd: 1200,
    levelEditorShiftX: 396,					// 492 - 96
    defaultAmount: 5,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },


  group3:
  {
    label: "Enemy Group 3",
    background: "level1B",
    startPosition: 484046,
    endPosition: 484345,
    screenPositionStart: 1620,
    screenPositionEnd: 1680,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 1424,
    levelEditorLimitEnd: 1954,
    levelEditorShiftX: -1124,					// 492 - 1616
    defaultAmount: 6,
    maxAmount: 20,
    forbiddenPositionRanges: ["outsideLeft"],
    forbiddenEnemyLists: ["mustSpawnLeftList"]
  },
  lockGroup2:
  {
    label: "Lock Enemy Group 2",
    background: "level1B",
    startPosition: 484370,
    endPosition: 484703,
    enemyAmountOffset: -10,
    screenPositionStart: 1762,
    screenPositionEnd: 1762,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1570,
    levelEditorLimitEnd: 1954,
    levelEditorShiftX: -1124,					// 492 - 1616
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
  },


  group4:
  {
    label: "Enemy Group 4",
    background: "level1C",
    startPosition: 484722,
    endPosition: 485021,
    screenPositionStart: 2304,
    screenPositionEnd: 2520,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 2112,
    levelEditorLimitEnd: 2528,
    levelEditorShiftX: -1812,					// 492 - 2304
    defaultAmount: 3,
    maxAmount: 9,											// 10, but 1 space for 1 extra boss
    forbiddenPositionRanges: ["outsideLeft"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnLeftList"]
  },
  group5:
  {
    label: "Enemy Group 5",
    background: "level1C",
    startPosition: 484722,
    endPosition: 485021,
    screenPositionStart: 2530,
    screenPositionEnd: 2750,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    addEmptyBytes: true,
    levelEditorLimitStart: 2528,
    levelEditorLimitEnd: 3008,
    levelEditorShiftX: -1812,					// 492 - 2304
    defaultAmount: 3,
    maxAmount: 9,											// 10, but 1 space for 1 extra boss
    extraBoss: "damnd",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList"]
  },


  bossHelperGroup1:
  {
    label: "Boss Helper Group 1",
    background: "level1C",
    startPosition: 485048,
    endPosition: 485379,
    screenPositionStart: 2710,
    screenPositionEnd: 2710,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2528,
    levelEditorLimitEnd: 3008,
    levelEditorShiftX: -1812,					// 492 - 2304
    defaultAmount: 4,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  },
  bossHelperGroup2:
  {
    label: "Boss Helper Group 2",
    background: "level1C",
    startPosition: 485406,
    endPosition: 485737,
    screenPositionStart: 2710,
    screenPositionEnd: 2710,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2528,
    levelEditorLimitEnd: 3008,
    levelEditorShiftX: -1812,					// 492 - 2304
    defaultAmount: 6,
    maxAmount: 20,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges: ["outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnRightList", "staticObjectList"]
  }
}

// Level 1A:	60 00 (00 60) (96)
// Level 1B:	50 06 (06 50) (1616)
// Level 1C:	00 09 (09 00) (2304)

// level1A    64, 16
// level1B    64, 16
// level1C    64, 16
export default level1EnemyGroup;