const kindRandomProfile =
{
	label: "Kind",
	enemyStrategy:
	{
		enemiesPartialFall:
		{
			randomMinAmount: 3,
			randomMaxAmount: 5
		},
		averageFood:
		{
			randomMinAmount: 1,
			randomMaxAmount: 2
		},
		fruitFood:
		{
			randomMinAmount: 1,
			randomMaxAmount: 2
		},
		objects:
		{
			randomMinAmount: 0,
			randomMaxAmount: 1
		}
	},
	lockGroupStrategy:
	{
		enemiesNoIdle:
		{
			randomMinAmount: 6,
			randomMaxAmount: 7
		},
		goodFood:
		{
			randomMinAmount: 1,
			randomMaxAmount: 2
		},
		averageFood:
		{
			randomMinAmount: 1,
			randomMaxAmount: 2
		}
	},
	ringStrategy:
	{
		enemiesFall:
		{
			randomMinAmount: 3,
			randomMaxAmount: 5
		},
		goodFoodFall:
		{
			randomMinAmount: 3,
			randomMaxAmount: 3
		}
	},
	ringLockStrategy:
	{
		enemiesFall:
		{
			randomMinAmount: 4,
			randomMaxAmount: 6
		}
	},
	flameStrategy:
	{
		enemiesPartialFall:
		{
			randomMinAmount: 3,
			randomMaxAmount: 5
		},
		averageFood:
		{
			randomMinAmount: 2,
			randomMaxAmount: 3
		},
		flames:
		{
			randomMinAmount: 3,
			randomMaxAmount: 5
		}
	},
	elevatorT1Strategy:
	{
		enemiesFall:
		{
			randomMinAmount: 2,
			randomMaxAmount: 2
		}
	},
	elevatorT2Strategy:
	{
		enemiesFall:
		{
			randomMinAmount: 2,
			randomMaxAmount: 2
		},
		averageFoodFall:
		{
			randomMinAmount: 1,
			randomMaxAmount: 1
		},
	},
	elevatorT3Strategy:
	{
		enemiesFall:
		{
			randomMinAmount: 1,
			randomMaxAmount: 2
		},
		goodFoodFall:
		{
			randomMinAmount: 1,
			randomMaxAmount: 1
		}
	},
	rolentoGrenade1: 1,
	rolentoGrenade2: 1,
	rolentoGrenade3: 1
}


export default kindRandomProfile;