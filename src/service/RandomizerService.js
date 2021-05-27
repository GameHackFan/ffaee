import romService from "./ROMService";

import forbiddenService from "./ForbiddenService";

import objectUtil from '../data/ObjectUtil';
import patchMap from "../data/patch/PatchMap";
import enemyByteMap from "../data/byte/EnemyByteMap";
import nonEnemyKeySet from
    "../data/level/NonEnemyKeySet"
import extraBossData from
    "../data/randomizer/profile/ExtraBossData";

import randomizerData from
    "../data/randomizer/RandomizerData";
import randomizerEnemyStrategy from
    "../data/randomizer/RandomizerEnemyStrategy";
import levelDefaultData from
    "../data/level/LevelDefaultData";


class RandomizerService
{
  constructor()
  {
    this.mainData = this.createDefaultMainData();
  }

  createRandomizerPatch = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixMainData();
    let randomizedData = this.randomizeAllEnemies();
    let patch = {};
    patch.type = "overwrite";
    patch.filename = "ff-23m.8h";
    patch.byteFormat = "hex";
    patch.data = {};
    patch.data = randomizedData.patch;
    return patch;
  }

  randomizeAllEnemies = () =>
  {
    let seed = this.mainData.seed;
    let randomizer = this.mulberry32Randomizer(seed);
    let rdegs = randomizerData.enemyGroups;
    let randomizedData = {preset: {}, patch: {}};
    let randomProfile = randomizerData.randomProfile[
        this.mainData.randomProfile];

    Object.keys(rdegs).forEach((lk) =>
    {
      let rdl = rdegs[lk];
      let presetLevel = this.forceGetField(
          randomizedData.preset, lk);

      Object.keys(rdl).forEach((egk) =>
      {
        let rdeg = rdl[egk];

        if(rdeg.disabled)
          return;

        let enemies = this.randomizeEnemiesForGroup(
            lk, egk, randomizer);
        this.randomlyRemoveEnemiesOverLimit(
            rdeg, enemies, randomizer);
        this.randomizeExtraBosses(
            enemies, rdeg, randomProfile, randomizer);
        presetLevel[egk] = enemies.preset;
        let key = rdeg.startPosition.toString();
        let ids = Object.keys(enemies.patch);
        let amount = ids.length;

        if(amount > 0)
        {
          if(!randomizedData.patch[key])
            randomizedData.patch[key] = [];

          ids.forEach((id) =>
          {
            let bytes = enemies.patch[id];
            let p = randomizedData.patch[key];
            bytes.forEach((byte) => {p.push(byte);})
          });
        }

        this.fixEnemyGroupEnd(lk, egk, rdeg,
            randomizedData, rdeg.startPosition);
      });
    });

    return randomizedData;
  }

  randomizeEnemiesForGroup = (
      levelKey, enemyGroupKey, randomizer) =>
  {
    let enemies = {preset: {}, patch: {}};
    let mdeg = this.mainData[levelKey][enemyGroupKey];

    if(mdeg.randomMode !== "disabled")
    {
      let enemyList = [];
      let rdld = randomizerData.enemyGroups[levelKey];
      let rdes = randomizerData.enemyStrategy;
      let enemyGroup = rdld[enemyGroupKey];
      let enemyStrategy, amount, enemy,
          bytes, delay;

      Object.keys(rdes).forEach((e) =>
      {
        enemyStrategy = rdes[e];
        amount = mdeg[e];
        amount = isNaN(amount) ? 0 : amount;

        for(let i = 0; i < amount; i++)
        {
          enemy = this.randomizeEnemy(
              enemyGroup, enemyStrategy, randomizer);
          enemyList.push(enemy);
        }
      });
      enemyList = this.getFixedOrderEnemies(
          enemyList, enemyGroup, randomizer);

      for(let i = 0; i < enemyList.length; i++)
      {
        enemy = enemyList[i];
        bytes = this.convertEnemyDataToBytes(enemy,
            enemyGroup.spawnDelayTimeBytes);
        enemies.preset[i + 10] = enemy;
        enemies.patch[i + 10] = bytes;
      }
    }

    return enemies;
  }

  randomizeEnemy = (enemyGroup, enemyStrategy,
      randomizer) =>
  {
    let e = {};
    e.enemyKey = this.randomizeEnemyKey(
        enemyGroup, enemyStrategy, randomizer);
    e.triggerPosition = 
        this.randomizeSpawnTriggerPosition(
        enemyGroup, randomizer);
    e.positionX = this.randomizePositionX(e.enemyKey,
        e.triggerPosition, enemyGroup, randomizer);
    e.positionY = this.randomizePositionY(
        e.enemyKey, enemyGroup, randomizer);
    let beh = this.randomizeEnemyBehavior(randomizer);
    e.offensiveBehavior = beh[0];
    e.defensiveBehavior = beh[1];
      
    if(enemyGroup.mustHaveSpawnDelayTime)
      e.forceTriggerPosition = 1;

    // Extra data to help generate the correct bytes.
    let shift = enemyGroup.walkablePositionForceShift;
    e.positionYShift = shift ? shift : 0;
    return e;
  }

  randomizePositionX = (enemyKey, triggerPosition,
      enemyGroup, randomizer) =>
  {
    let frl = enemyGroup.forbiddenPositionRanges;
    let rl = forbiddenService.
        getValidPositionRangeList(enemyKey, frl);
    let keys = Object.keys(rl);
    let random = this.getRandomIntValue(randomizer,
          0, keys.length - 1);
    let range = rl[keys[random]];
    let px = this.getRandomIntValue(randomizer,
        range[0], range[1]);
    let shift = enemyGroup.minimumPositionX;
    shift = shift ? shift : triggerPosition;
    return px + shift;
  }

  randomizePositionY = (enemyKey,
      enemyGroup, randomizer) =>
  {
    if(enemyKey.includes("ToFall"))
    {
      return enemyGroup.walkablePositionYBottom +
          randomizerData.positionRange["insideTop"][2];
    }
    else if(enemyKey.includes("chandelier"))
    {
      return enemyGroup.walkablePositionYBottom +
          randomizerData.positionRange["inside"][2];
    }

    return this.getRandomIntValue(randomizer,
        enemyGroup.walkablePositionYBottom,
        enemyGroup.walkablePositionYTop - 1);
  }

  randomizeEnemyBehavior = (randomizer) =>
  {
    let b = this.getRandomIntValue(randomizer, 0, 255);
    
    if(this.getRandomIntValue(randomizer, 0, 1) === 0)
      return [b, 0];
    else
      return [0, b];
  }

  randomizeSpawnTriggerPosition = (
      enemyGroup, randomizer) =>
  {
    let random = this.getRandomIntValue(randomizer,
        enemyGroup.screenPositionStart,
        enemyGroup.screenPositionEnd);
    return random;
  }

  randomlyRemoveEnemiesOverLimit = (
      enemyGroup, enemies, randomizer) =>
  {
    let fields = Object.keys(enemies.patch);

    while(fields.length > enemyGroup.maxAmount)
    {
      let random = this.getRandomIntValue(
          randomizer, 0, fields.length - 1);
      let key = fields[random];
      delete enemies.patch[key];
      delete enemies.preset[key]
      fields = Object.keys(enemies.patch);
    }
  }

  randomizeEnemyKey = (enemyGroup,
      enemyStrategy, randomizer) =>
  {
    let fls = enemyGroup.forbiddenEnemyLists;
    let veil = forbiddenService.getValidEnemyIndexList(
        enemyStrategy.enemyKeys, fls);
    let random = this.getRandomIntValue(
        randomizer, 0, veil.length - 1);
    return enemyStrategy.enemyKeys[veil[random]];
  }

  randomizeExtraBosses = (enemies,
      enemyGroup, randomProfile, randomizer) =>
  {
    if(enemyGroup.extraBoss)
    {
      let eb = extraBossData[enemyGroup.extraBoss];
      let amount = randomProfile[enemyGroup.extraBoss];
      amount = amount ? amount : 0;
      let keys = Object.keys(eb);
      let bPre = [];
      let bPat = [];
      
      for(let i = 0; i < amount; i++)
      {
        let random = this.getRandomIntValue(
            randomizer, 0, keys.length - 1);
        let key = keys[random];
        keys = keys.filter((k) => {return k !== key});
        let boss = objectUtil.deepCopy(eb[key]);
        let db = undefined;

        if(boss.spawnDelayTime)
        {
          db = romService.convertNumberToROMBytes(
              boss.spawnDelayTime, 2);
        }

        bPre.push(boss);
        bPat.push(this.convertEnemyDataToBytes(
            boss, db));
      }

      Object.keys(enemies.patch).forEach((pk) =>
      {
        if(enemyGroup.mustHaveSpawnDelayTime)
          bPat.push(enemies.patch[pk]);
        else
          bPat.unshift(enemies.patch[pk]);
      });
      Object.keys(enemies.preset).forEach((pk) =>
      {
        if(enemyGroup.mustHaveSpawnDelayTime)
          bPre.push(enemies.preset[pk]);
        else
          bPre.unshift(enemies.preset[pk]);
      });

      enemies.patch = {};
      enemies.preset = {};
      bPat.forEach((e, i) => {enemies.patch[i] = e;});
      bPre.forEach((e, i) => {enemies.preset[i] = e;});
    }

    return enemies;
  }

  convertEnemyDataToBytes = (enemy,
      delayBytes) =>
  {
    let tp = enemy.forceTriggerPosition;
    tp = tp ? tp : enemy.triggerPosition;
    let shift = enemy.positionYShift;
    shift = shift ? shift : 0;
    let enemyBytes =
        enemyByteMap[enemy.enemyKey].slice();
    let hexTP = romService.convertNumberToROMBytes(
        tp, 2);
    let hexPX = romService.convertNumberToROMBytes(
        enemy.positionX, 2);
    let hexPY = romService.convertNumberToROMBytes(
        enemy.positionY + shift, 2);

    enemyBytes[0] = hexTP[0];
    enemyBytes[1] = hexTP[1];
    
    enemyBytes[2] = hexPX[0];
    enemyBytes[3] = hexPX[1];

    enemyBytes[4] = hexPY[0];
    enemyBytes[5] = hexPY[1];

    if(enemyBytes[10] === "RR")
    {
      enemyBytes[10] =
          enemy.offensiveBehavior.toString(16);
    }

    if(enemyBytes[11] === "RR")
    {
      enemyBytes[11] =
          enemy.defensiveBehavior.toString(16);
    }

    if(delayBytes)
      enemyBytes.unshift(delayBytes[0], delayBytes[1]);

    return enemyBytes;
  }

  applyRandomizer = () =>
  {
    romService.applyPatch(
        patchMap.editorTextPatch.patch);
    romService.applyPatch(
        patchMap.levelExpansionPatch.patch);
    romService.applyPatch(
        patchMap.extraBossPatch.patch);
    romService.applyPatch(
        patchMap.lockMaxTimeImprovementPatch.patch);
    romService.applyPatch(
        this.createRandomizerPatch());
    romService.applyPatch(this.getTimeDelayPatch());
  }

  updateMainData = (levelKey, enemyGroupKey,
      enemyStrategyKey, enemyAmount) =>
  {
    if(levelKey && enemyGroupKey && enemyStrategyKey)
    {
      let level = this.forceGetField(
          this.mainData, levelKey);
      let enemyGroup = this.forceGetField(
          level, enemyGroupKey);
      enemyGroup[enemyStrategyKey] = enemyAmount;
    }
  }

  forceGetField = (object, field) =>
  {
    if(field)
    {
      let content = object[field];

      if(!content)
      {
        object[field] = {};
        return object[field];
      }

      return content;
    }

    return {};
  }

  getField = (object, field) =>
  {
    let content = field ? object[field] : {};
    return content ? content : {};
  }

  fixSeed = () =>
  {
    let s = parseInt(this.mainData.seed);
    s = isNaN(s) ? 0 : s;
    s = Math.max(s, Number.MIN_SAFE_INTEGER);
    s = Math.min(s, Number.MAX_SAFE_INTEGER);
    this.mainData.seed = s;
  }

  fixRandomProfile = () =>
  {
    let rp = this.mainData.randomProfile;
    rp = rp in randomizerData.randomProfile ?
        rp : "savage";
    this.mainData.randomProfile = rp;
  }

  getSeed = () =>
  {
    return this.mainData.seed;
  }

  setSeed = (seed) =>
  {
    this.mainData.seed = seed;
  }

  getRandomProfile = () =>
  {
    return this.mainData.randomProfile;
  }

  setRandomProfile = (random) =>
  {
    this.mainData.randomProfile = random;
  }

  setRandomMode = (levelKey, enemyGroupKey, mode) =>
  {
    if(levelKey && enemyGroupKey)
    {
      let l = this.forceGetField(
          this.mainData, levelKey);
      let eg = this.forceGetField(l, enemyGroupKey);
      eg.randomMode = mode ? mode : "random";
    }
  }

  getDateNowInMilliseconds = () =>
  {
    return Date.now().valueOf();
  }

  getMainData = () =>
  {
    return this.mainData;
  }

  getMainDataGroup = (levelKey, enemyGroupKey) =>
  {
    if(levelKey && enemyGroupKey)
    {
      let l = this.getField(this.mainData, levelKey);
      return this.getField(l, enemyGroupKey);
    }
    
    return {};
  }

  getRandomIntValue = (randomizer, begin, end) =>
  {
    let b = parseInt(begin);
    let e = parseInt(end);
    let amount = Math.abs(e - b);

    if(amount !== 0)
      return Math.round(randomizer() * amount) + b;

    return begin;
  }

  fixMainData = () =>
  {
    let rdegs = randomizerData.enemyGroups;
    let seed = this.mainData.seed;
    let randomizer = this.mulberry32Randomizer(seed);
    let randomProfile = randomizerData.randomProfile[
        this.mainData.randomProfile];
    Object.keys(rdegs).forEach((e) =>
    {
      this.fixLevel(e, randomProfile, randomizer);
    });
  }

  fixLevel = (levelKey, randomProfile, randomizer) =>
  {
    let mdl = this.forceGetField(
        this.mainData, levelKey);
    let rdl = randomizerData.enemyGroups[levelKey];

    Object.keys(rdl).forEach((egk) =>
    {
      let rdeg = rdl[egk];
      let sts = randomProfile[rdeg.specialProfile];
      sts = sts ? sts : randomProfile.enemyStrategy;
      this.fixEnemyGroup(egk, mdl, sts, randomizer);
    });
  }

  fixEnemyGroup = (enemyGroupKey,
      mainDataLevel, randomStrategies, randomizer) =>
  {
    let eg = this.forceGetField(
        mainDataLevel, enemyGroupKey);
    
    if(eg.randomMode === "custom")
    {
      let enemyAmount = 0;
      let rdes = randomizerData.enemyStrategy;

      Object.keys(rdes).forEach((es) =>
      {
        let amount = parseInt(eg[es]);
        amount = isNaN(amount) ? 0 : amount;
        enemyAmount += amount;
      });
      
      if(enemyAmount === 0)
      {
        this.fixEnemyStrategy(eg,
            randomStrategies, randomizer);
        eg.randomMode = "random";
      }
    }
    else if(eg.randomMode !== "disabled")
    {
      this.fixEnemyStrategy(eg,
            randomStrategies, randomizer)
      eg.randomMode = "random";
    }
  }

  fixEnemyStrategy = (mainDataEnemyGroup,
      randomStrategies, randomizer) =>
  {
    objectUtil.removeAllProperties(mainDataEnemyGroup);

    Object.keys(randomStrategies).forEach((e) =>
    {
      let es = randomStrategies[e];
      mainDataEnemyGroup[e] = this.getRandomIntValue(
          randomizer, es.randomMinAmount, es.randomMaxAmount);
    });
  }

  fixEnemyGroupEnd = (levelKey, enemyGroupKey,
      enemyGroup, randomizedData, byteIndex) =>
  {    
    if(!isNaN(byteIndex))
    {
      let patchIndex = byteIndex.toString();
      let enemies = randomizedData.patch[patchIndex];

      if(Array.isArray(enemyGroup.endBytes))
      {
        randomizedData.patch[patchIndex] =
            enemies.concat(enemyGroup.endBytes);
        enemies = randomizedData.patch[patchIndex];
      }

      if(enemyGroup.addEmptyBytes)
      {
        let extraBytes = (enemyGroup.endPosition -
            enemyGroup.startPosition);
        extraBytes = extraBytes - enemies.length - 32;

        if(extraBytes > 0)
        {
          const emptyBytes = [];
          emptyBytes.length = extraBytes;
          emptyBytes.fill("AA");
          randomizedData.patch[patchIndex] =
              enemies.concat(emptyBytes);
        }
      }
    }
    
    if(enemyGroup.enemyAmountOffset)
    {
      let a = this.getEnemyAmount(
          levelKey, enemyGroupKey, randomizedData);
      let eaIndex = enemyGroup.startPosition +
          enemyGroup.enemyAmountOffset;
      randomizedData.patch[eaIndex] = [a.toString(16)];
    }
  }

  getEnemyAmount = (levelKey, enemyGroupKey,
      randomizedData) =>
  {
    let enemies =
        randomizedData.preset[levelKey][enemyGroupKey];
    let amount = 0;

    Object.keys(enemies).forEach((id) =>
    {
      if(!nonEnemyKeySet.has(enemies[id].enemyKey))
        amount++;
    });

    return amount;
  }

  getFixedOrderEnemies = (enemyList,
      enemyGroup, randomizer) =>
  {
    if(enemyGroup.mustHaveSpawnDelayTime)
      return this.shuffle(enemyList, randomizer);
    
    return enemyList.sort(this.sortAscending);
  }

  getTimeDelayPatch = () =>
  {
    return patchMap.
        type3BossHelperTimeDelayPatch.patch;
  }
  
  applyPresetFile = (presetFile) =>
  {
    let json = JSON.parse(presetFile);

    if(json && json.data && json.type === "randomizer")
      this.mainData = json.data;
  }
  
  createRandomizerPreset = () =>
  {
    let preset = {};
    preset.type = "randomizer";
    preset.data = objectUtil.deepCopy(this.mainData);
    return preset;
  }

  createLevelEditorPreset = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixMainData();
    let randomizerData = this.randomizeAllEnemies();
    let preset = {};
    preset.type = "levelEditor";
    preset.data = randomizerData.preset;
    return preset;
  }

  createDefaultMainData = () =>
  {
    let mainData = {};
    mainData.seed = this.getDateNowInMilliseconds();
    mainData.randomProfile = "savage";
    return mainData;
  }

  setMainDataToDefault = () =>
  {
    this.mainData = this.createDefaultMainData();
  }

  // Fisher-Yates shuffle. 
  shuffle = (array, randomizer) =>
  {
    for(let i = array.length - 1; i > 0; i--)
    {
      let j = Math.floor(randomizer() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  sortAscending = (e1, e2) =>
  {
    return e1.triggerPosition - e2.triggerPosition;
  }

  mulberry32Randomizer = (seed) =>
  {
    return function()
    {
      seed += 0x6D2B79F5;
      var t = seed;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }
}


const randomizerService = new RandomizerService();
export default randomizerService;