import level1EnemyGroup from "./Level1EnemyGroup";
import level2EnemyGroup from "./Level2EnemyGroup";
import level3EnemyGroup from "./Level3EnemyGroup";
import level4EnemyGroup from "./Level4EnemyGroup";
import level5EnemyGroup from "./Level5EnemyGroup";
import level6EnemyGroup from "./Level6EnemyGroup";


const levelEditorLevels = 
{
	level1:
	{
		label: "Level / Stage 1",
		groups: level1EnemyGroup
	},
	level2:
	{
		label: "Level / Stage 2",
		groups: level2EnemyGroup
	},
	level3:
	{
		label: "Level / Stage 3",
		groups: level3EnemyGroup
	},
	level4:
	{
		label: "Level / Stage 4",
		groups: level4EnemyGroup
	},
	level5:
	{
		label: "Level / Stage 5",
		groups: level5EnemyGroup
	},
	level6:
	{
		label: "Level / Stage 6",
		groups: level6EnemyGroup
	}
}


export default levelEditorLevels;