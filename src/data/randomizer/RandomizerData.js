import level1EnemyGroup from
    "../level/Level1EnemyGroup";
import level2EnemyGroup from
    "../level/Level2EnemyGroup";
import level3EnemyGroup from
    "../level/Level3EnemyGroup";
import level4EnemyGroup from
    "../level/Level4EnemyGroup";
import level5EnemyGroup from
    "../level/Level5EnemyGroup";
import level6EnemyGroup from
    "../level/Level6EnemyGroup";


import easyRandomProfile from
    "./profile/EasyRandomProfile";
import normalRandomProfile from
    "./profile/NormalRandomProfile";
import hardRandomProfile from
    "./profile/HardRandomProfile";
import savageRandomProfile from
    "./profile/SavageRandomProfile";
import restInPainRandomProfile from
    "./profile/RestInPainRandomProfile";


import randomizerEnemyStrategy from
    "./RandomizerEnemyStrategy";


const randomizerData = 
{
  randomProfile:
  {
    easy: easyRandomProfile,
    normal: normalRandomProfile,
    hard: hardRandomProfile,
    savage: savageRandomProfile,
    restInPain: restInPainRandomProfile,
  },
  enemyStrategy:
  {
    enemies:
    {
      label: "Randomize Any Normal Enemies",
      enemyKeys: randomizerEnemyStrategy.enemies,
      randomizeBehavior: true
    },
    enemiesPartialFall:
    {
      label:
        "Randomize Any Normal Enemies (No To Fall)",
      enemyKeys:
        randomizerEnemyStrategy.enemiesPartialFall,
      randomizeBehavior: true
    },
    enemiesNoIdle:
    {
      label:
        "Randomize Any Normal Enemies (No Idle)",
      enemyKeys: randomizerEnemyStrategy.enemiesNoIdle,
      randomizeBehavior: true
    },
    enemiesNoFall:
    {
      label:
        "Randomize Any Normal Enemies (No Fall)",
      enemyKeys:
        randomizerEnemyStrategy.enemiesNoFall,
      randomizeBehavior: true
    },
    enemiesFall:
    {
      label:
        "Randomize Any Normal Enemies (Fall Only)",
      enemyKeys: randomizerEnemyStrategy.enemiesFall
    },

    goodFood:
    {
      label: "Randomize Good Food Only",
      enemyKeys: randomizerEnemyStrategy.goodFood
    },
    averageFood:
    {
      label: "Randomize Average Food Only",
      enemyKeys: randomizerEnemyStrategy.averageFood
    },
    fruitFood:
    {
      label: "Randomize Fruit Food Only",
      enemyKeys: randomizerEnemyStrategy.fruitFood
    },
    badFood:
    {
      label: "Randomize Bad Food Only",
      enemyKeys: randomizerEnemyStrategy.badFood
    },
    anyFood:
    {
      label: "Randomize Any Food",
      enemyKeys: randomizerEnemyStrategy.anyFood
    },

    goodFoodFall:
    {
      label: "Randomize Good Food Only (Falling)",
      enemyKeys: randomizerEnemyStrategy.goodFoodFall
    },
    averageFoodFall:
    {
      label: "Randomize Average Food Only (Falling)",
      enemyKeys:
        randomizerEnemyStrategy.averageFoodFall
    },
    fruitFoodFall:
    {
      label: "Randomize Fruit Food Only (Falling)",
      enemyKeys: randomizerEnemyStrategy.fruitFoodFall
    },
    badFoodFall:
    {
      label: "Randomize Bad Food Only (Falling)",
      enemyKeys: randomizerEnemyStrategy.badFoodFall
    },
    anyFoodFall:
    {
      label: "Randomize Any Food (Falling)",
      enemyKeys: randomizerEnemyStrategy.anyFoodFall
    },

    objects:
    {
      label:
        "Randomize Objects with Weapon / Empty Only",
      enemyKeys: randomizerEnemyStrategy.objects,
    },
    flames:
    {
      label: "Randomize Any Flames",
      enemyKeys: randomizerEnemyStrategy.flames,
    }
  },
  positionRange:
  {
    outsideLeft: [-70, -80],
    outsideRight: [450, 460],
    inside: [100, 224, 240],
    insideTop: [170, 290, 370],
  },
  levels:
  {
    keys: [ "level1", "level2", "level3",
        "level4", "level5", "level6"],
    labels: [ "Level 1", "Level 2", "Level 3",
        "Level 4", "Level 5", "Level 6"]
  },
  enemyGroups:
  {
    level1: level1EnemyGroup,
    level2: level2EnemyGroup,
    level3: level3EnemyGroup,
    level4: level4EnemyGroup,
    level5: level5EnemyGroup,
    level6: level6EnemyGroup
  },
  enemyBytePattern:
  [
    "RR", "RR",       // Stage position spawn
                      // trigger.

    "RR", "RR",       // Position X.     
    
    "RR", "RR",       // Position Y.

    "ID", "TY",       // Enemy ID + Object Type.

    "PO", "CL",       // Posture + Color / Pallete
    
    "OB", "DB",       // Offensive + Deffensive
                      // Behavior

    "SF", "HP"        // Spawn Flag (01 = 2P) +
                      // Health and Power.
  ]
}


export default randomizerData;