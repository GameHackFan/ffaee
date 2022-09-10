export const level4EnemyGroup =
{
  fireGroup1:
  {
    key: "fireGroup1",
    label: "Fire Enemy Group 1",
    background: "level4A",
    startPosition: 494114,
    endPosition: 495393,
    screenPositionStart: 100,
    screenPositionEnd: 620,
    walkablePositionYTop: 112,
    walkablePositionYBottom: 80,
    levelEditorLimitStart: -192,     // -192 + 0
    levelEditorLimitEnd: 630,     
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 12,
    maxAmount: 19,
    specialProfile: "flameStrategy"
  },
  fireGroup2:
  {
    key: "fireGroup2",
    label: "Fire Enemy Group 2",
    background: "level4A",
    startPosition: 494114,
    endPosition: 495393,
    screenPositionStart: 630,
    screenPositionEnd: 1150,
    walkablePositionYTop: 112,
    walkablePositionYBottom: 80,
    levelEditorLimitStart: 630,
    levelEditorLimitEnd: 1410,     
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 11,
    maxAmount: 19,
    specialProfile: "flameStrategy"
  },
  fireLockGroup1:
  {
    key: "fireLockGroup1",
    label: "Lock Enemy Group 1",
    background: "level4A",
    startPosition: 495422,
    endPosition: 496233,
    enemyAmountOffset: -10,
    screenPositionStart: 1218,
    screenPositionEnd: 1218,
    walkablePositionYTop: 112,
    walkablePositionYBottom: 80,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1026,
    levelEditorLimitEnd: 1410,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 27,
    maxAmount: 50,
    specialProfile: "flameStrategy",
    forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
  },


  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level4A",
    startPosition: 494114,
    endPosition: 495393,
    screenPositionStart: 1500,
    screenPositionEnd: 1900,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1410,
    levelEditorLimitEnd: 2100,     
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 8,
    maxAmount: 17,
    forbiddenPositionRanges:["outsideLeft"],
    forbiddenEnemyLists: ["chandelierList", "mustSpawnLeftList"]
  },
  extraLockGroup1:  // TODO: Not used, but can be used.
  {
    key: "extraLockGroup1",
    disabled: true,
    label: "Extra Lock Enemy Group 1",
    background: "level4A",
    startPosition: 496258,
    endPosition: 496641,
    enemyAmountOffset: -10,
    // screenPositionStart: 2880,
    // screenPositionEnd: 2880,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    // levelEditorLimitStart: 2688,
    // levelEditorLimitEnd: 3072,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level4A",
    startPosition: 494114,
    endPosition: 495393,
    screenPositionStart: 1900,
    screenPositionEnd: 2300,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 1850,
    levelEditorLimitEnd: 2500,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 8,
    maxAmount: 18,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level4A",
    startPosition: 494114,
    endPosition: 495393,
    screenPositionStart: 2300,
    screenPositionEnd: 2700,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    endBytes: ["FF", "FF"],
    levelEditorLimitStart: 2250,
    levelEditorLimitEnd: 3072,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 7,
    maxAmount: 17,
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level4A",
    startPosition: 496666,
    endPosition: 497319,
    enemyAmountOffset: -10,
    screenPositionStart: 2880,
    screenPositionEnd: 2880,
    walkablePositionYTop: 64,
    walkablePositionYBottom: 16,
    spawnDelayTimeBytes: ["1E", "00"],
    addEmptyBytes: true,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2688,
    levelEditorLimitEnd: 3072,
    levelEditorShiftX: 492,          // 492 - 0
    defaultAmount: 11,
    maxAmount: 40,
    specialProfile: "lockGroupStrategy",
    forbiddenPositionRanges:["outsideRight"],
    forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
  },


  elevatorGroup1:    // Not in use
  {
    key: "elevatorGroup1",
    disabled: true,
    label: "Elevator Enemy Group 1",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 80,          // Height based now
    screenPositionEnd: 80,
    minimumPositionX: 3328,
    walkablePositionYTop: 144,        // 128
    walkablePositionYBottom: 96,      // 80
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 2752,    // 3072-224-16-80
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 6,
    specialProfile: "elevatorT1Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup2:
  {
    key: "elevatorGroup2",
    label: "Elevator Enemy Group 2",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 464,         // Height based now
    screenPositionEnd: 464,
    minimumPositionX: 3328,
    walkablePositionYTop: 528,        // 512 
    walkablePositionYBottom: 480,     // 464
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 2368,    // 3072-224-16-464
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 6,
    extraBoss: "rolentoGrenade1",
    specialProfile: "elevatorT1Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup3:
  {
    key: "elevatorGroup3",
    label: "Elevator Enemy Group 3",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 848,         // Height based now
    screenPositionEnd: 848,
    minimumPositionX: 3328,
    walkablePositionYTop: 912,        // 896
    walkablePositionYBottom: 864,     // 848
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 1984,    // 3072-224-16-848
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 6,
    extraBoss: "rolentoGrenade2",
    specialProfile: "elevatorT2Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup4:
  {
    key: "elevatorGroup4",
    label: "Elevator Enemy Group 4",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 1232,        // Height based now
    screenPositionEnd: 1232,
    minimumPositionX: 3328,
    walkablePositionYTop: 1296,       // 1280
    walkablePositionYBottom: 1248,    // 1232  
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 1600,    // 3072-224-16-1232
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 5,
    specialProfile: "elevatorT3Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup5:
  {
    key: "elevatorGroup5",
    label: "Elevator Enemy Group 5",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 1616,        // Height based now
    screenPositionEnd: 1616,
    minimumPositionX: 3328,
    walkablePositionYTop: 1680,       // 1664
    walkablePositionYBottom: 1632,    // 1616
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 1216,    // 3072-224-16-1616
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 6,
    extraBoss: "rolentoGrenade3",
    specialProfile: "elevatorT1Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup6:
  {
    key: "elevatorGroup6",
    label: "Elevator Enemy Group 6",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 2000,        // Height based now
    screenPositionEnd: 2000,
    minimumPositionX: 3328,
    walkablePositionYTop: 2064,       // 2048
    walkablePositionYBottom: 2016,    // 2000
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 832,     // 3072-224-16-2000
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 6,
    specialProfile: "elevatorT2Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  },
  elevatorGroup7:
  {
    key: "elevatorGroup7",
    label: "Elevator Enemy Group 7",
    background: "level4B",
    startPosition: 497338,
    endPosition: 497919,
    screenPositionStart: 2384,        // Height based now
    screenPositionEnd: 2384,
    minimumPositionX: 3328,
    walkablePositionYTop: 2446,       // 2432
    walkablePositionYBottom: 2400,    // 2384 
    endBytes: ["80", "09", "74", "0D", "80", "0A",
        "03", "04", "00", "00", "00", "00", "00",
        "FF", "FF", "FF"],
    hasElevator: true,
    levelEditorFOVPositionX: 300,
    levelEditorFOVPositionY: 448,     // 3072-224-16-2384
    levelEditorLimitStart: 3136,      // -192 + 3328
    levelEditorLimitEnd: 3520,     
    levelEditorShiftX: -2836,         // 492 - 3328
    defaultAmount: 3,
    maxAmount: 5,
    extraBoss: "rolento",
    bossSpawnFirst: false,
    specialProfile: "elevatorT3Strategy",
    forbiddenPositionRanges:["outsideLeft", "outsideRight"],
    forbiddenEnemyLists: ["chandelierList",
        "mustSpawnLeftList", "mustSpawnRightList",
        "staticObjectList", "rolentoPalletBugList"]
  }
  // bossHelperExtraEnemyGroup1: {}
}


// level4A begins at 00 00 (0000)
// level4B begins at 00 0D (0000) (3328)

// level4A1   112, 80
// level4A2   64, 16
// level4B    Vertical Part, Several Intervals