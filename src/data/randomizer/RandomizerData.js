import { level1EnemyGroup } from "../level/Level1EnemyGroup";
import { level2EnemyGroup } from "../level/Level2EnemyGroup";
import { level3EnemyGroup } from "../level/Level3EnemyGroup";
import { level4EnemyGroup } from "../level/Level4EnemyGroup";
import { level5EnemyGroup } from "../level/Level5EnemyGroup";
import { level6EnemyGroup } from "../level/Level6EnemyGroup";


import { customRandomProfile } from "./profile/CustomRandomProfile";
import { kindRandomProfile } from "./profile/KindRandomProfile";
import { weakRandomProfile } from "./profile/WeakRandomProfile";
import { easyRandomProfile } from "./profile/EasyRandomProfile";
import { midRandomProfile } from "./profile/MidRandomProfile";
import { hardRandomProfile } from "./profile/HardRandomProfile";
import { wildRandomProfile } from "./profile/WildRandomProfile";
import { restInPainRandomProfile } from "./profile/RestInPainRandomProfile";

import { randomizerEnemyStrategy } from "./RandomizerEnemyStrategy";


export const randomizerData = 
{
  randomProfile:
  {
    kind: kindRandomProfile,
    weak: weakRandomProfile,
    easy: easyRandomProfile,
    mid: midRandomProfile,
    hard: hardRandomProfile,
    wild: wildRandomProfile,
    restInPain: restInPainRandomProfile,
    custom: customRandomProfile
  },
  enemyStrategy:
  {
    enemies:
    {
      key: "enemies",
      label: "Any Enemy",
      information: "Any enemy that is not a boss.",
      enemyKeys: randomizerEnemyStrategy.enemies,
      randomizeBehavior: true
    },
    enemiesPartialFall:
    {
      key: "enemiesPartialFall",
      label: "Any Enemy (No Jump)",
      information: "Any enemy, but they won't enter the screen jumping like in elevator.",
      enemyKeys: randomizerEnemyStrategy.enemiesPartialFall,
      randomizeBehavior: true
    },
    enemiesNoIdle:
    {
      key: "enemiesNoIdle",
      label: "Any Enemy (No Idle)",
      information: "Any enemy, but they won't be on idle posture.",
      enemyKeys: randomizerEnemyStrategy.enemiesNoIdle,
      randomizeBehavior: true
    },
    enemiesNoFall:
    {
      key: "enemiesNoFall",
      label: "Any Enemy (No Fall)",
      information: "Any enemy, but they won't enter the screen jumping or falling.",
      enemyKeys: randomizerEnemyStrategy.enemiesNoFall,
      randomizeBehavior: true
    },
    enemiesFall:
    {
      key: "enemiesFall",
      label: "Any Enemy (Fall Only)",
      information: "Any enemy, but only the ones jumping and falling.",
      enemyKeys: randomizerEnemyStrategy.enemiesFall
    },

    goodFood:
    {
      key: "goodFood",
      label: "Good Food (Objects)",
      information: "Any object with barbecue, chicken or stake.",
      enemyKeys: randomizerEnemyStrategy.goodFood
    },
    averageFood:
    {
      key: "averageFood",
      label: "Average Food (Objects)",
      information: "Any object with hamburger, hotdog, pizza, curry or sushi.",
      enemyKeys: randomizerEnemyStrategy.averageFood
    },
    fruitFood:
    {
      key: "fruitFood",
      label: "Fruit Food (Objects)",
      information: "Any object with banana, pineapple, apple, orange or grape.",
      enemyKeys: randomizerEnemyStrategy.fruitFood
    },
    badFood:
    {
      key: "badFood",
      label: "Bad Food (Objects)",
      information: "Any object with soft drink 1-2, beer 1-2-3, whisky or gum.",
      enemyKeys: randomizerEnemyStrategy.badFood
    },
    anyFood:
    {
      key: "anyFood",
      label: "Any Food (Objects)",
      information: "Any object with any food.",
      enemyKeys: randomizerEnemyStrategy.anyFood
    },

    goodFoodFall:
    {
      key: "goodFoodFall",
      label: "Good Food (Falling)",
      information: "Barbecue, chicken or stake falling.",
      enemyKeys: randomizerEnemyStrategy.goodFoodFall
    },
    averageFoodFall:
    {
      key: "averageFoodFall",
      label: "Average Food (Falling)",
      information: "Hamburger, hotdog, pizza, curry or sushi falling.",
      enemyKeys: randomizerEnemyStrategy.averageFoodFall
    },
    fruitFoodFall:
    {
      key: "fruitFoodFall",
      label: "Fruit Food (Falling)",
      information: "Banana, pineapple, apple, orange or grape falling.",
      enemyKeys: randomizerEnemyStrategy.fruitFoodFall
    },
    badFoodFall:
    {
      key: "badFoodFall",
      label: "Bad Food (Falling)",
      information: "Soft drink 1-2, beer 1-2-3, whisky or gum falling.",
      enemyKeys: randomizerEnemyStrategy.badFoodFall
    },
    anyFoodFall:
    {
      key: "anyFoodFall",
      label: "Any Food (Falling)",
      information: "Any food falling.",
      enemyKeys: randomizerEnemyStrategy.anyFoodFall
    },

    objects:
    {
      key: "objects",
      label: "Any Item (Objects)",
      information: "Any object with knife, iron pipe, muramasa, empty or with any treasure.",
      enemyKeys: randomizerEnemyStrategy.objects,
    },
    flames:
    {
      key: "flames",
      label: "Flames (Industrial Area)",
      information: "Flames from the rolento stage with different duration.",
      enemyKeys: randomizerEnemyStrategy.flames,
    }
  },
  positionRange:
  {
    outsideLeft: [-50, -60],    // -70, -80
    outsideRight: [430, 440],   // 450, 460
    inside: [100, 224, 240],
    insideTop: [170, 290, 370],
  },
  levels:
  {
    level1: {key: "level1", label: "Level 1"},
    level2: {key: "level2", label: "Level 2"},
    level3: {key: "level3", label: "Level 3"},
    level4: {key: "level4", label: "Level 4"},
    level5: {key: "level5", label: "Level 5"},
    level6: {key: "level6", label: "Level 6"}
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
    "RR", "RR",       // Stage position spawn trigger.

    "RR", "RR",       // Position X.     
    
    "RR", "RR",       // Position Y.

    "ID", "TY",       // Enemy ID + Object Type.

    "PO", "CL",       // Posture + Color / Pallete
    
    "OB", "DB",       // Offensive + Deffensive Behavior

    "SF", "HP"        // Spawn Flag (01 = 2P) + Health and Power.
  ]
}