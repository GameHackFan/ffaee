import enemyTypeStrategy from
    "./strategy/EnemyTypeStrategy";
import enemyPartialFallTypeStrategy from
    "./strategy/EnemyPartialFallTypeStrategy";
import enemyNoIdleTypeStrategy from
    "./strategy/EnemyNoIdleTypeStrategy";
import enemyNoFallTypeStrategy from
    "./strategy/EnemyNoFallTypeStrategy";
import enemyFallTypeStrategy from
    "./strategy/EnemyFallTypeStrategy";

import goodFoodTypeStrategy from
    "./strategy/GoodFoodTypeStrategy";
import averageFoodTypeStrategy from
    "./strategy/AverageFoodTypeStrategy";
import fruitFoodTypeStrategy from
    "./strategy/FruitFoodTypeStrategy";
import badFoodTypeStrategy from
    "./strategy/BadFoodTypeStrategy";
import anyFoodTypeStrategy from
    "./strategy/AnyFoodTypeStrategy";
    
import goodFoodFallTypeStrategy from
    "./strategy/GoodFoodFallTypeStrategy";
import averageFoodFallTypeStrategy from
    "./strategy/AverageFoodFallTypeStrategy";
import fruitFoodFallTypeStrategy from
    "./strategy/FruitFoodFallTypeStrategy";
import badFoodFallTypeStrategy from
    "./strategy/BadFoodFallTypeStrategy";
import anyFoodFallTypeStrategy from
    "./strategy/AnyFoodFallTypeStrategy";

import objectTypeStrategy from
    "./strategy/ObjectTypeStrategy";
import objectFallTypeStrategy from
    "./strategy/ObjectFallTypeStrategy";

import flameTypeStrategy from
    "./strategy/FlameTypeStrategy";


const randomizerEnemyStrategy = 
{
  enemies: enemyTypeStrategy,
  enemiesPartialFall: enemyPartialFallTypeStrategy,
  enemiesNoIdle: enemyNoIdleTypeStrategy,
  enemiesNoFall: enemyNoFallTypeStrategy,
  enemiesFall: enemyFallTypeStrategy,

  goodFood: goodFoodTypeStrategy,
  averageFood: averageFoodTypeStrategy,
  fruitFood: fruitFoodTypeStrategy,
  badFood: badFoodTypeStrategy,
  anyFood:  anyFoodTypeStrategy,

  goodFoodFall: goodFoodFallTypeStrategy,
  averageFoodFall: averageFoodFallTypeStrategy,
  fruitFoodFall: fruitFoodFallTypeStrategy,
  badFoodFall: badFoodFallTypeStrategy,
  anyFoodFall:  anyFoodFallTypeStrategy,

  objects: objectTypeStrategy,
  objectFall: objectFallTypeStrategy,

  flames: flameTypeStrategy
}


export default randomizerEnemyStrategy;