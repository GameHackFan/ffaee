import { objectUtil } from '../data/default/ObjectUtil';
import { patchMap } from "../data/patch/PatchMap";
import { randomizerData } from "../data/randomizer/RandomizerData";
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { extraBossData } from "../data/randomizer/profile/ExtraBossData";
import { nonEnemyKeySet } from "../data/level/NonEnemyKeySet"
import { forbiddenService } from "./ForbiddenService";
import { romService } from "./ROMService";
import { modificationService } from './ModificationService';


class RandomizerService
{
  createRandomizerPatch = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizedData = this.randomizeAllEnemies();
    const patch = {};
    patch.type = "overwrite";
    patch.filename = "ff-23m.8h";
    patch.byteFormat = "hex";
    patch.data = {};
    patch.data = randomizedData.patch;
    return patch;
  }

  randomizeAllEnemies = () =>
  {
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const rdegs = randomizerData.enemyGroups;
    const randomizedData = {preset: {}, patch: {}};
    const dmrp = dataMap.randomProfile;
    const randomProfile = randomizerData.randomProfile[dmrp];

    Object.keys(rdegs).forEach((lk) =>
    {
      const rdl = rdegs[lk];
      const presetLevel = this.forceGetField(randomizedData.preset, lk);

      Object.keys(rdl).forEach((egk) =>
      {
        const rdeg = rdl[egk];

        if(rdeg.disabled)
          return;

        const enemies = this.randomizeEnemiesForGroup(lk, egk, randomizer);
        this.randomlyRemoveEnemiesOverLimit(rdeg, enemies, randomizer);
        this.randomizeExtraBosses(enemies, rdeg, randomProfile, randomizer);
        presetLevel[egk] = enemies.preset;
        const key = rdeg.startPosition.toString();
        const ids = Object.keys(enemies.patch);
        const amount = ids.length;

        if(amount > 0)
        {
          if(!randomizedData.patch[key])
            randomizedData.patch[key] = [];

          ids.forEach((id) =>
          {
            const bytes = enemies.patch[id];
            const p = randomizedData.patch[key];
            bytes.forEach((byte) => {p.push(byte);})
          });
        }

        this.fixEnemyGroupEnd(lk, egk, rdeg,
            randomizedData, rdeg.startPosition);
      });
    });

    return randomizedData;
  }

  randomizeEnemiesForGroup = (levelKey, enemyGroupKey, randomizer) =>
  {
    const enemies = {preset: {}, patch: {}};
    const mdeg = dataMap[levelKey][enemyGroupKey];
    const rdld = randomizerData.enemyGroups[levelKey];
    const rdes = randomizerData.enemyStrategy;
    const enemyGroup = rdld[enemyGroupKey];
    let enemyStrategy, amount, enemy, bytes;
    let enemyList = [];

    Object.keys(rdes).forEach((e) =>
    {
      enemyStrategy = rdes[e];
      amount = mdeg[e];
      amount = isNaN(amount) ? 0 : amount;

      for(let i = 0; i < amount; i++)
      {
        enemy = this.randomizeEnemy(enemyGroup, enemyStrategy, randomizer);
        enemyList.push(enemy);
      }
    });
    enemyList = this.getFixedOrderEnemies(
        enemyList, enemyGroup, randomizer);

    for(let i = 0; i < enemyList.length; i++)
    {
      const key = (i + 10).toString();
      enemy = enemyList[i];
      bytes = this.convertEnemyDataToBytes(enemy,
          enemyGroup.spawnDelayTimeBytes);
      enemies.preset[key] = enemy;
      enemies.patch[key] = bytes;
    }

    return enemies;
  }

  randomizeEnemy = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const e = {};
    e.enemyKey = this.randomizeEnemyKey(
        enemyGroup, enemyStrategy, randomizer);
    e.triggerPosition = this.randomizeSpawnTriggerPosition(
        enemyGroup, randomizer);
    e.positionX = this.randomizePositionX(e.enemyKey,
        e.triggerPosition, enemyGroup, randomizer);
    e.positionY = this.randomizePositionY(
        e.enemyKey, enemyGroup, randomizer);
    const beh = this.randomizeEnemyBehavior(randomizer);
    e.offensiveBehavior = beh[0];
    e.defensiveBehavior = beh[1];
      
    if(enemyGroup.mustHaveSpawnDelayTime)
      e.forceTriggerPosition = 1;

    // Extra data to help generate the correct bytes.
    const shift = enemyGroup.walkablePositionForceShift;
    e.positionYShift = shift ? shift : 0;
    return e;
  }

  randomizePositionX = (enemyKey, triggerPosition,
      enemyGroup, randomizer) =>
  {
    const frl = enemyGroup.forbiddenPositionRanges;
    const rl = forbiddenService.getValidPositionRangeList(enemyKey, frl);
    const keys = Object.keys(rl);
    const random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
    const range = rl[keys[random]];
    const px = this.getRandomIntValue(randomizer, range[0], range[1]);
    let shift = enemyGroup.minimumPositionX;
    shift = shift ? shift : triggerPosition;
    return px + shift;
  }

  randomizePositionY = (enemyKey, enemyGroup, randomizer) =>
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
    const b = this.getRandomIntValue(randomizer, 0, 255);
    
    if(this.getRandomIntValue(randomizer, 0, 1) === 0)
      return [b, 0];
    else
      return [0, b];
  }

  randomizeSpawnTriggerPosition = (enemyGroup, randomizer) =>
  {
    const random = this.getRandomIntValue(randomizer,
        enemyGroup.screenPositionStart,
        enemyGroup.screenPositionEnd);
    return random;
  }

  randomlyRemoveEnemiesOverLimit = (enemyGroup, enemies, randomizer) =>
  {
    let fields = Object.keys(enemies.patch);

    while(fields.length > enemyGroup.maxAmount)
    {
      const random = this.getRandomIntValue(randomizer, 0, fields.length - 1);
      const key = fields[random];
      delete enemies.patch[key];
      delete enemies.preset[key]
      fields = Object.keys(enemies.patch);
    }
  }

  randomizeEnemyKey = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const fls = enemyGroup.forbiddenEnemyLists;
    const veil = forbiddenService.getValidEnemyIndexList(
        enemyStrategy.enemyKeys, fls);
    let random = this.getRandomIntValue(randomizer, 0, veil.length - 1);
    let ek = enemyStrategy.enemyKeys[veil[random]];

    if(ek ? false : true)
    {
      const max = safeEnemyKeyList.length - 1;
      random = this.getRandomIntValue(randomizer, 0, max);
      ek = safeEnemyKeyList[random];
    }
    
    return ek;
  }

  randomizeExtraBosses = (enemies,
      enemyGroup, randomProfile, randomizer) =>
  {
    let amount = randomProfile[enemyGroup.extraBoss];
    amount = amount ? amount : 0;

    if(enemyGroup.extraBoss && amount > 0)
    {
      const eb = extraBossData[enemyGroup.extraBoss];
      let keys = Object.keys(eb);
      const bPre = [];
      const bPat = [];
      
      for(let i = 0; i < amount; i++)
      {
        const random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
        const key = keys[random];
        const boss = objectUtil.deepCopy(eb[key]);
        keys = keys.filter((k) => {return k !== key});
        let db = undefined;

        if(boss.spawnDelayTime)
          db = romService.convertNumberToROMBytes(boss.spawnDelayTime, 2);

        bPre.push(boss);
        bPat.push(this.convertEnemyDataToBytes(boss, db));
      }

      if(enemyGroup.bossSpawnFirst)
      {
        bPat.forEach((b, index) =>{enemies.patch[index.toString()] = b;});
        bPre.forEach((b, index) =>{enemies.preset[index.toString()] = b;});
      }
      else
      {
        bPat.forEach((b, index) =>{enemies.patch[(index + 100).toString()] = b;});
        bPre.forEach((b, index) =>{enemies.preset[(index + 100).toString()] = b;});
      }
    }

    return enemies;
  }

  convertEnemyDataToBytes = (enemy, delayBytes) =>
  {
    let tp = enemy.forceTriggerPosition;
    tp = tp ? tp : enemy.triggerPosition;
    let shift = enemy.positionYShift;
    shift = shift ? shift : 0;
    const enemyBytes = enemyByteMap[enemy.enemyKey].slice();
    const hexTP = romService.convertNumberToROMBytes(tp, 2);
    const hexPX = romService.convertNumberToROMBytes(enemy.positionX, 2);
    const hexPY = romService.convertNumberToROMBytes(enemy.positionY + shift, 2);

    enemyBytes[0] = hexTP[0];
    enemyBytes[1] = hexTP[1];
    
    enemyBytes[2] = hexPX[0];
    enemyBytes[3] = hexPX[1];

    enemyBytes[4] = hexPY[0];
    enemyBytes[5] = hexPY[1];

    if(enemyBytes[10] === "RR")
      enemyBytes[10] = enemy.offensiveBehavior.toString(16);

    if(enemyBytes[11] === "RR")
      enemyBytes[11] = enemy.defensiveBehavior.toString(16);

    if(delayBytes)
      enemyBytes.unshift(delayBytes[0], delayBytes[1]);

    return enemyBytes;
  }

  applyRandomizer = () =>
  {
    const lmtiPatch = patchMap.lockMaxTimeImprovementPatch.patch;
    const ehicPatch = patchMap.enemyHealthImprovementCallerPatch.patch;
    romService.applyPatch(ehicPatch);
    romService.applyPatch(patchMap.featuresAndFixesPatch1.patch);
    romService.applyPatch(patchMap.featuresAndFixesPatch2.patch);
    romService.applyPatch(patchMap.enemyHealthImprovementPatch.patch);
    romService.applyPatch(patchMap.lifebarImprovementPatch.patch);
    romService.applyPatch(patchMap.lifebarImprovementCallerPatch.patch);
    romService.applyPatch(patchMap.lockImprovementPatch.patch);
    romService.applyPatch(patchMap.playerHealthPatch.patch);
    romService.applyPatch(patchMap.enemySpawnImprovementPatch.patch);
    romService.applyPatch(patchMap.andoreColorImprovementPatch.patch);
    romService.applyPatch(patchMap.guyColorImprovementPatch.patch);
    romService.applyPatch(patchMap.levelExpansionPatch.patch);
    romService.applyPatch(patchMap.extraBossPatch.patch);
    romService.applyPatch(lmtiPatch);
    romService.applyPatch(this.createRandomizerPatch());
    romService.applyPatch(this.getTimeDelayPatch());
    romService.applyPatch(this.createRandomizerTextPatch());
  }

  getCustomRandomProfileEnemyGroup = (levelKey, groupKey) =>
  {
    if(levelKey && groupKey)
    {
      const crp = randomizerData.randomProfile.custom;
      const l = this.forceGetField(crp, levelKey);
      return this.forceGetField(l, groupKey);
    }
    
    return {};
  }

  forceGetField = (object, field) =>
  {
    if(field)
    {
      const content = object[field];

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
    const content = field ? object[field] : {};
    return content ? content : {};
  }

  fixSeed = () =>
  {
    let s = parseInt(dataMap.seed);
    s = isNaN(s) ? 0 : s;
    s = Math.max(s, Number.MIN_SAFE_INTEGER);
    s = Math.min(s, Number.MAX_SAFE_INTEGER);
    dataMap.seed = s;
  }

  fixRandomProfile = () =>
  {
    let rp = dataMap.randomProfile;
    rp = rp in randomizerData.randomProfile ? rp : "wild";
    dataMap.randomProfile = rp;
  }

  getSeed = () =>
  {
    return dataMap.seed;
  }

  setSeed = (seed) =>
  {
    dataMap.seed = seed;
  }

  getRandomProfile = () =>
  {
    return dataMap.randomProfile;
  }

  setRandomProfile = (randomProfile) =>
  {
    dataMap.randomProfile = randomProfile;
  }

  setEnemyGroupMaxAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMaxAmount = amount;
  }

  setEnemyGroupMinAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMinAmount = amount;
  }

  getDateNowInMilliseconds = () =>
  {
    return Date.now().valueOf();
  }

  getRandomIntValue = (randomizer, begin, end) =>
  {
    const b = parseInt(begin);
    const e = parseInt(end);
    const amount = Math.abs(e - b);

    if(amount !== 0)
      return Math.round(randomizer() * amount) + b;

    return begin;
  }

  fixDataMap = () =>
  {
    const rdegs = randomizerData.enemyGroups;
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const dmrp = dataMap.randomProfile;
    const randomProfile = randomizerData.randomProfile[dmrp];
    Object.keys(rdegs).forEach((e) =>
    {
      this.fixLevel(e, randomProfile, randomizer);
    });
  }

  fixLevel = (levelKey, randomProfile, randomizer) =>
  {
    const mdl = this.forceGetField(dataMap, levelKey);
    const rdl = randomizerData.enemyGroups[levelKey];

    Object.keys(rdl).forEach((egk) =>
    {
      const rdeg = rdl[egk];
      let sts;

      if(dataMap.randomProfile === "custom")
      {
        sts = randomProfile[levelKey];
        sts = sts ? sts[egk] : {};
        sts = sts ? sts : {};
      }
      else
      {
        sts = randomProfile[rdeg.specialProfile];
        sts = sts ? sts : randomProfile.enemyStrategy;
      }

      this.fixEnemyGroup(egk, mdl, sts, randomizer);
    });
  }

  fixEnemyGroup = (enemyGroupKey,
      dataMapLevel, randomStrategies, randomizer) =>
  {
    const eg = this.forceGetField(dataMapLevel, enemyGroupKey);
    objectUtil.removeAllProperties(eg);
    let total = 0;
    Object.keys(randomStrategies).forEach((e) =>
    {
      const es = randomStrategies[e];
      let min = parseInt(es.randomMinAmount);
      let max = parseInt(es.randomMaxAmount);
      min = (isNaN(min) || min < 0) ? 0 : min;
      max = (isNaN(max) || max < 0) ? 0 : max;
      min = (max - min) < 0 ? 0 : min;
      max = (max - min) < 0 ? 0 : max;
      const amount = this.getRandomIntValue(randomizer, min, max);
      total += amount;
      eg[e] = amount;
    });
    
    if(total < 1)
      eg.enemiesFall = 1;
  }

  fixEnemyGroupEnd = (levelKey, enemyGroupKey,
      enemyGroup, randomizedData, byteIndex) =>
  {    
    if(!isNaN(byteIndex))
    {
      const patchIndex = byteIndex.toString();
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
          randomizedData.patch[patchIndex] = enemies.concat(emptyBytes);
        }
      }
    }
    
    if(enemyGroup.enemyAmountOffset)
    {
      const a = this.getEnemyAmount(levelKey, enemyGroupKey, randomizedData);
      const eaIndex = enemyGroup.startPosition + enemyGroup.enemyAmountOffset;
      randomizedData.patch[eaIndex] = [a.toString(16)];
    }
  }

  getEnemyAmount = (levelKey, enemyGroupKey, randomizedData) =>
  {
    const enemies = randomizedData.preset[levelKey][enemyGroupKey];
    let amount = 0;

    Object.keys(enemies).forEach((id) =>
    {
      if(!nonEnemyKeySet.has(enemies[id].enemyKey))
        amount++;
    });

    return amount;
  }

  getFixedOrderEnemies = (enemyList, enemyGroup, randomizer) =>
  {
    if(enemyGroup.mustHaveSpawnDelayTime)
      return this.shuffle(enemyList, randomizer);
    
    enemyList.sort(this.sortAscending);
    return enemyList.slice();
  }

  getTimeDelayPatch = () =>
  {
    return patchMap.type3BossHelperTimeDelayPatch.patch;
  }

  createRandomizerTextPatch = () =>
  {
    const patch = Object.assign({}, patchMap.randomizerTextPatch.patch);
    patch.data = Object.assign({}, patchMap.randomizerTextPatch.patch.data);
    const sbs = this.getSeedTextBytes(patch);
    const lbs = this.getRandomProfileTextBytes();
    patch.data[patch.seedByteIndex.toString()] = sbs;
    patch.data[patch.levelByteIndex.toString()] = lbs;
    return patch;
  }

  getRandomProfileTextBytes = () =>
  {
    const lt = randomizerLevelTexts[dataMap.randomProfile];
    return romService.convertStringToROMBytes(lt);
  }

  getSeedTextBytes = (patch) =>
  {
    let st = dataMap.seed.toString();
    const seedSize = patch.seedSize;
    st = "*".repeat(seedSize) + " " + st + " " + "*".repeat(seedSize);
    const remove = (st.length - seedSize) / 2;
    st = st.substring(remove, st.length - remove);
    st = st.length > seedSize ? st.substring(0, seedSize) : st;
    return romService.convertStringToROMBytes(st);
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "randomizer")
    {
      dataMap = dataMap ? dataMap : {};
      Object.assign(dataMap, json.data);
      delete dataMap.customRandomProfile;
      let custom = json.data.customRandomProfile;
      custom = custom ? custom : {};
      Object.assign(randomizerData.randomProfile.custom, custom);
      const crp = randomizerData.randomProfile.custom;
      crp.label = "Custom";
      crp.rolentoGrenade1 = 1;
      crp.rolentoGrenade2 = 1;
      crp.rolentoGrenade3 = 1;
    }
  }
  
  createRandomizerPreset = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    const preset = {};
    preset.type = "randomizer";
    preset.data = objectUtil.deepCopy(dataMap);

    if(dataMap.randomProfile === "custom")
    {
      preset.data.customRandomProfile = objectUtil.deepCopy(crp);
      delete preset.data.customRandomProfile.label;
    }

    return preset;
  }

  createLevelEditorPreset = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizerData = this.randomizeAllEnemies();
    const preset = {};
    preset.type = "levelEditor";
    preset.data = randomizerData.preset;
    return preset;
  }

  createDefaultDataMap = () =>
  {
    const map = {};
    map.seed = this.getDateNowInMilliseconds();
    map.randomProfile = "wild";
    return map;
  }

  setDataMapToDefault = () =>
  {
    dataMap = this.createDefaultDataMap();
  }

  setCustomRandomProfileToDefault = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    objectUtil.removeAllProperties(crp);
    crp.label = "Custom";
    crp.rolentoGrenade1 = 1;
    crp.rolentoGrenade2 = 1;
    crp.rolentoGrenade3 = 1;
  }

  // Fisher-Yates shuffle. 
  shuffle = (array, randomizer) =>
  {
    for(let i = array.length - 1; i > 0; i--)
    {
      const j = Math.floor(randomizer() * (i + 1));
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

  addToModificationQueue = () =>
  {
    modificationService.add(150, "randomizer", this.applyRandomizer);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in randomizerData.enemyGroups);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = randomizerData.enemyGroups[levelKey];
    level = level ? level : {}
    return (groupKey in level);
  }

  getUIRandomProfileList = () =>
  {
    const keys = Object.keys(randomizerData.randomProfile);
    return keys.map((key) => {return randomizerData.randomProfile[key];});
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(randomizerData.levels);
    return keys.map((key) => {return randomizerData.levels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const keys = level ? Object.keys(level) : [];
    return keys.map((key) => {return level[key];});
  }

  getUIRandomizerEnemyStrategyList = (levelKey, groupKey) =>
  {
    const data = this.getCustomRandomProfileEnemyGroup(levelKey, groupKey);
    const keys = Object.keys(randomizerData.enemyStrategy);
    return keys.map((key) =>
    {
      const es = data[key];
      const c = objectUtil.deepCopy(randomizerData.enemyStrategy[key]);
      c.randomMinAmount = es?.randomMinAmount ? es.randomMinAmount : "";
      c.randomMaxAmount = es?.randomMaxAmount ? es.randomMaxAmount : "";
      return c;
    });
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const group = level ? level[groupKey] : {};
    return group ? group : {};
  }

  constructor()
  {
    dataMap = this.createDefaultDataMap();
  }
}


let dataMap;

const randomizerLevelTexts = 
{
  kind: "** Kind **",
  weak: "** Weak **",
  easy: "** Easy **",
  mid: "*** Mid **",
  hard: "** Hard **",
  wild: "** Wild **",
  restInPain: "*** RIP **",
  custom: "* Custom *"
}

const safeEnemyKeyList = 
[
  "andoreJrFallingFast", "roxyFalling",
  "hollyWoodFallingFast"
];

export const randomizerService = new RandomizerService();