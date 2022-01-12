const level3EnemyGroup =
{
	group1:
	{
		label: "Enemy Group 1",
		background: "level3A",
		startPosition: 489850,
		endPosition: 490149,
		screenPositionStart: 10,
		screenPositionEnd: 502,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		endBytes: [
			"80", "02", "D8", "03", "38", "00",
			"00", "0A", "00", "02", "00", "00", "00", "FF"],
		levelEditorLimitStart: -192,		// -192 + 0
		levelEditorLimitEnd: 704,     
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 9,
		forbiddenPositionRanges: ["outsideLeft"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnLeftList"]
	},
	lockGroup1:
	{
		label: "Lock Enemy Group 1",
		background: "level3A",
		startPosition: 490180,
		endPosition: 490511,
		enemyAmountOffset: -10,
		screenPositionStart: 512,
		screenPositionEnd: 512,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 320,
		levelEditorLimitEnd: 704,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 13,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges: ["outsideRight"],
		forbiddenEnemyLists: ["chandelierList",
				"mustSpawnRightList", "staticObjectList"]
	},


	group2:
	{
		label: "Enemy Group 2",
		background: "level3A",
		startPosition: 489850,
		endPosition: 490149,
		screenPositionStart: 866,
		screenPositionEnd: 1248,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		endBytes: [
			"60", "05", "B8", "06", "38", "00", "00", "0A",
			"00", "03", "00", "00", "00", "FF",
			"FF", "FF"],
		addEmptyBytes: true,
		levelEditorLimitStart: 866,
		levelEditorLimitEnd: 1440,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 5,
		maxAmount: 9
	},
	lockGroup2:
	{
		label: "Lock Enemy Group 2",
		background: "level3A",
		startPosition: 490536,
		endPosition: 490867,
		enemyAmountOffset: -10,
		screenPositionStart: 1248,
		screenPositionEnd: 1248,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 1056,
		levelEditorLimitEnd: 1440,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges: ["outsideRight"],
		forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
	},
	lockGroup3:
	{
		label: "Lock Enemy Group 3",
		background: "level3A",
		startPosition: 490890,
		endPosition: 491223,
		enemyAmountOffset: -10,
		screenPositionStart: 1248,
		screenPositionEnd: 1248,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 1056,
		levelEditorLimitEnd: 1440,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 8,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges: ["outsideRight"],
		forbiddenEnemyLists: ["mustSpawnRightList", "staticObjectList"]
	},


	group3:
	{
		label: "Enemy Group 3",
		background: "level3B",
		startPosition: 491242,
		endPosition: 491401,
		screenPositionStart: 3840,
		screenPositionEnd: 3840,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		endBytes: ["FF", "FF"],
		addEmptyBytes: true,
		levelEditorLimitStart: 3648,			// -192 + 3840    
		levelEditorLimitEnd: 4032,    
		levelEditorShiftX: -3348,					// 492 - 3840
		defaultAmount: 6,
		maxAmount: 10,
		specialProfile: "ringStrategy",
		forbiddenPositionRanges:["outsideLeft", "outsideRight"],
		forbiddenEnemyLists: ["mustSpawnLeftList",
				"mustSpawnRightList", "cagePalletBugList"]
	},
	lockGroup4:
	{
		label: "Lock Enemy Group 4",
		background: "level3B",
		startPosition: 491426,
		endPosition: 491759,
		enemyAmountOffset: -10,
		screenPositionStart: 3840,
		screenPositionEnd: 3840,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 3648,
		levelEditorLimitEnd: 4032,    
		levelEditorShiftX: -3348,					// 492 - 3840
		defaultAmount: 3,
		maxAmount: 20,
		specialProfile: "ringLockStrategy",
		forbiddenPositionRanges:["outsideLeft", "outsideRight"],
		forbiddenEnemyLists: ["mustSpawnLeftList", "mustSpawnRightList",
				"staticObjectList", "cagePalletBugList"]
	},


	group4:
	{
		label: "Enemy Group 4",
		background: "level3A",
		startPosition: 491778,
		endPosition: 492637,
		screenPositionStart: 1710,
		screenPositionEnd: 1900,
		walkablePositionYTop: 48,
		walkablePositionYBottom: 16,
		endBytes: [
			"30", "07", "88", "08", "38", "00",
			"00", "0A", "00", "04", "00", "00", "00", "FF"],
		levelEditorLimitStart: 1600,
		levelEditorLimitEnd: 1930,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 0,
		maxAmount: 10,
		forbiddenPositionRanges:["outsideLeft"],
		forbiddenEnemyLists: ["mustSpawnLeftList"]
	},
	group5:
	{
		label: "Enemy Group 5",
		background: "level3A",
		startPosition: 491778,
		endPosition: 492637,
		screenPositionStart: 2100,
		screenPositionEnd: 2550,
		walkablePositionYTop: 48,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 2100,
		levelEditorLimitEnd: 2848,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 0,
		maxAmount: 25,
		forbiddenEnemyLists: ["chandelierList"]
	},
	extraLockGroup1:
	{
		label: "Extra Lock Enemy Group 1",
		background: "level3A",
		startPosition: 492662,
		endPosition: 492993,
		enemyAmountOffset: -10,
		screenPositionStart: 2656,
		screenPositionEnd: 2656,
		walkablePositionYTop: 48,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 2464,
		levelEditorLimitEnd: 2848,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 0,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},
	group6:
	{
		label: "Enemy Group 6",
		background: "level3A",
		startPosition: 491778,
		endPosition: 492637,
		screenPositionStart: 2900,
		screenPositionEnd: 3350,
		walkablePositionYTop: 48,
		walkablePositionYBottom: 16,
		endBytes: ["FF", "FF"],
		addEmptyBytes: true,
		levelEditorLimitStart: 2850,
		levelEditorLimitEnd: 3648,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 0,
		maxAmount: 23,									// 25, but 2 space for 2 extra boss
		extraBoss: "ediE",
		forbiddenPositionRanges:["outsideLeft"],
		forbiddenEnemyLists: ["chandelierList",
				"mustSpawnLeftList", "shootingBugList"]
	},


	bossHelperGroup1:
	{
		label: "Boss Helper Group 1",
		background: "level3A",
		startPosition: 493018,
		endPosition: 493349,
		enemyAmountOffset: -10,
		screenPositionStart: 3456,
		screenPositionEnd: 3456,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 3264,
		levelEditorLimitEnd: 3648,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 6,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList",
				"staticObjectList", "shootingBugList"]
	},
	bossHelperGroup2:
	{
		label: "Boss Helper Group 2",
		background: "level3A",
		startPosition: 493372,
		endPosition: 493703,
		enemyAmountOffset: -10,
		screenPositionStart: 3456,
		screenPositionEnd: 3456,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 3264,
		levelEditorLimitEnd: 3648,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 6,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList",
				"staticObjectList", "shootingBugList"]
	},
	bossHelperGroup3:
	{
		label: "Boss Helper Group 3",
		background: "level3A",
		startPosition: 493726,
		endPosition: 494059,
		enemyAmountOffset: -10,
		screenPositionStart: 3456,
		screenPositionEnd: 3456,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		spawnDelayTimeBytes: ["1E", "00"],
		addEmptyBytes: true,
		mustHaveSpawnDelayTime: true,
		levelEditorLimitStart: 3264,
		levelEditorLimitEnd: 3648,    
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 6,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList",
				"staticObjectList", "shootingBugList"]
	}
}

// level3A begins at 00 00 (0000) (0)
// level3B begins at 00 0F (0F00) (3840)

// level3A1   64, 16
// level3A2   48, 16
// level3B    64, 16  
export default level3EnemyGroup;