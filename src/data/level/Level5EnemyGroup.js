const level5EnemyGroup =
{
	group1:
	{
		label: "Enemy Group 1",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 10,				// 100
		screenPositionEnd: 400,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: -192,		// -192 + 0
		levelEditorLimitEnd: 608,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 3,
		maxAmount: 30,
		forbiddenPositionRanges:["outsideLeft"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnLeftList"]
	},
	group2:
	{
		label: "Enemy Group 2",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 610,
		screenPositionEnd: 1000,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 608,
		levelEditorLimitEnd: 1208,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 6,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group3:
	{
		label: "Enemy Group 3",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 1220,
		screenPositionEnd: 1850,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 1208,
		levelEditorLimitEnd: 2082,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 16,
		maxAmount: 20,
		forbiddenEnemyLists: ["chandelierList"]
	},
	lockGroup1:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},
	lockGroup2:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},


	group4:
	{
		label: "Enemy Group 4",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 2100,
		screenPositionEnd: 2450,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 2082,
		levelEditorLimitEnd: 2500,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 9,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group5:
	{
		label: "Enemy Group 5",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 2500,
		screenPositionEnd: 2940,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 2500,
		levelEditorLimitEnd: 3138,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 7,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	lockGroup3:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 14,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList",
				"staticObjectList"]
	},


	group6:
	{
		label: "Enemy Group 6",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 3100,
		screenPositionEnd: 3650,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 3138,
		levelEditorLimitEnd: 3700,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 14,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group7:
	{
		label: "Enemy Group 7",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 3700,
		screenPositionEnd: 4120,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 3700,
		levelEditorLimitEnd: 4378,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 6,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	lockGroup4:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},
	lockGroup5:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},


	group8:
	{
		label: "Enemy Group 8",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 4400,
		screenPositionEnd: 5050,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 4378,
		levelEditorLimitEnd: 5248,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 15,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	lockGroup6:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},

	
	group9:
	{
		label: "Enemy Group 9",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 5260,
		screenPositionEnd: 6050,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 5248,
		levelEditorLimitEnd: 6100,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 22,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group10:
	{
		label: "Enemy Group 10",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 6100,
		screenPositionEnd: 6700,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 6100,
		levelEditorLimitEnd: 6912,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 19,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	lockGroup7:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 12,
		maxAmount: 30,
		specialProfile: "lockGroupStrategy",
		forbiddenEnemyLists: ["chandelierList", "staticObjectList"]
	},


	group11:
	{
		label: "Enemy Group 11",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 6950,
		screenPositionEnd: 7630,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 6912,
		levelEditorLimitEnd: 7650,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 15,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group12:
	{
		label: "Enemy Group 12",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 7650,
		screenPositionEnd: 8340,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		levelEditorLimitStart: 7650,
		levelEditorLimitEnd: 8350,
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 12,
		maxAmount: 30,
		forbiddenEnemyLists: ["chandelierList"]
	},
	group13:
	{
		label: "Enemy Group 13",
		background: "level5",
		startPosition: 498324,
		endPosition: 503387,
		screenPositionStart: 8350,
		screenPositionEnd: 8750,
		walkablePositionYTop: 64,
		walkablePositionYBottom: 16,
		endBytes: ["FF", "FF"],
		levelEditorLimitStart: 8350,
		levelEditorLimitEnd: 9024,
		levelEditorShiftX: 492,				// 492 - 0
		defaultAmount: 9,
		maxAmount: 20,
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList", "mustSpawnRightList"]
	},


	bossHelperGroup1:
	{
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
		levelEditorShiftX: 492,				// 492 - 0
		defaultAmount: 6,
		maxAmount: 18,								// 20, but 2 space for 2 extra boss
		extraBoss: "abigail",
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList",
				"mustSpawnRightList", "staticObjectList"]
	},
	bossHelperGroup2:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 5,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList",
				"mustSpawnRightList", "staticObjectList"]
	},
	bossHelperGroup3:
	{
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
		levelEditorShiftX: 492,					// 492 - 0
		defaultAmount: 4,
		maxAmount: 20,
		specialProfile: "lockGroupStrategy",
		forbiddenPositionRanges:["outsideRight"],
		forbiddenEnemyLists: ["chandelierList",
				"mustSpawnRightList", "staticObjectList"]
	}
}


// level5A begins at 00 00 (0000)

// level5		64, 16
export default level5EnemyGroup;
