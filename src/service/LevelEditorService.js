
import { objectUtil } from '../data/default/ObjectUtil';
import { imageMap } from "../data/default/ImageMap";
import { patchMap } from "../data/patch/PatchMap";
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { nonEnemyKeySet } from "../data/level/NonEnemyKeySet";
import { levelDefaultData } from "../data/level/LevelDefaultData";
import { levelEditorLevels } from "../data/level/LevelEditorLevels";
import { levelEditorEnemies } from "../data/level/LevelEditorEnemies";
import { levelEditorLevelParts } from "../data/level/LevelEditorLevelParts";
import { modificationService } from './ModificationService';
import { romService } from "./ROMService";
import mergeImages from '../api/merge-images.js';


class LevelEditorService
{
  createLevelEditorPatch = () =>
  {
    const patch = {};
    patch.data = {};
    this.applyDataToPatch(patch);
    patch.type = "overwrite";
    patch.byteFormat = "hex";
    patch.filename = "ff-23m.8h";
    return patch;
  }

  applyDataToPatch = (patch) =>
  {
    const editData = objectUtil.deepCopy(dataMap);

    Object.keys(dataMap).forEach((lk) =>
    {
      const level = dataMap[lk];

      Object.keys(level).forEach((egk) =>
      {
        const enemyGroup = level[egk];
        const leeg = this.getLevelEditorEnemyGroup(lk, egk);

        if(!leeg || leeg.disabled)
          return;

        this.removeExtraEnemies(enemyGroup, leeg);
        this.forceEnemy(enemyGroup, leeg, Object.keys(enemyGroup).length);
        const enemies = this.getEnemiesBytesFromGroup(enemyGroup, leeg);
        const byteStart = leeg.startPosition;
        let bytes = patch.data[byteStart.toString()];
        bytes = bytes ? bytes : [];
        bytes = bytes.concat(enemies);
        patch.data[byteStart.toString()] = bytes;
        this.fixEnemyGroupEnd(enemyGroup, leeg, patch, byteStart);
      });
    });

    // NOTE: Let the user decide about this?
    dataMap = editData;
  }

  applyData = () =>
  {
    romService.applyPatch(patchMap.featuresAndFixesPatch1.patch);
    romService.applyPatch(patchMap.featuresAndFixesPatch2.patch);
    romService.applyPatch(patchMap.lifebarImprovementPatch.patch);
    romService.applyPatch(patchMap.lifebarImprovementCallerPatch.patch);
    romService.applyPatch(patchMap.lockImprovementPatch.patch);
    romService.applyPatch(patchMap.enemySpawnImprovementPatch.patch);
    romService.applyPatch(patchMap.andoreColorImprovementPatch.patch);
    romService.applyPatch(patchMap.levelExpansionPatch.patch);
    romService.applyPatch(patchMap.levelEditorTextPatch.patch);
    romService.applyPatch(this.createLevelEditorPatch());
  }

  addEnemy = (levelKey, enemyGroupKey) =>
  {
    const eg = dataMap[levelKey][enemyGroupKey];
    const leeg = this.getLevelEditorEnemyGroup(levelKey, enemyGroupKey);
    const e = this.createBred(leeg.screenPositionStart);
    const id = Object.keys(eg).length.toString();
    e.id = id;
    e.positionY = leeg.walkablePositionYTop;

    if(leeg.minimumPositionX)
      e.positionX = leeg.minimumPositionX;
    
    eg[id] = e;
    return e;
  }

  getEnemiesBytesFromGroup = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemies = [];

    Object.keys(enemyGroup).forEach((ek) =>
    {
      const enemy = enemyGroup[ek];
      this.fixEnemyData(enemy, enemyGroup, levelEditorEnemyGroup);
      const enemyBytes = enemyByteMap[enemy.enemyKey].slice();

      let tp = enemy.forceTriggerPosition;
      tp = tp ? tp : enemy.triggerPosition;
      let hex = romService.convertNumberToROMBytes(tp, 2);

      enemyBytes[0] = hex[0];
      enemyBytes[1] = hex[1];
      
      hex = romService.convertNumberToROMBytes(enemy.positionX, 2);
      enemyBytes[2] = hex[0];
      enemyBytes[3] = hex[1];

      hex = romService.convertNumberToROMBytes(enemy.positionY, 2);
      enemyBytes[4] = hex[0];
      enemyBytes[5] = hex[1];

      if(enemyBytes[10] === "RR")
        enemyBytes[10] = enemy.offensiveBehavior.toString(16);

      if(enemyBytes[11] === "RR")
        enemyBytes[11] = enemy.defensiveBehavior.toString(16);

      if(levelEditorEnemyGroup.mustHaveSpawnDelayTime)
      {
        hex = romService.convertNumberToROMBytes(enemy.spawnDelayTime, 2);
        enemyBytes.unshift(hex[0], hex[1]);
      }

      enemies = enemies.concat(enemyBytes);
    });

    return enemies;
  }

  setEnemyKey = (levelKey, enemyGroupKey, enemyId, enemyKey) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.enemyKey = enemyKey;
  }

  setEnemyTriggerPosition = (levelKey,
      enemyGroupKey, enemyId, triggerPosition) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.triggerPosition = triggerPosition;
  }

  setEnemyPositionX = (levelKey, enemyGroupKey, enemyId, positionX) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionX = positionX;
  }

  setEnemyPositionY = (levelKey, enemyGroupKey, enemyId, positionY) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionY = positionY;
  }

  setEnemyOffensiveBehavior = (levelKey,
      enemyGroupKey, enemyId, offensiveBehavior) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.offensiveBehavior = offensiveBehavior;
  }

  setEnemyDefensiveBehavior = (levelKey,
      enemyGroupKey, enemyId, defensiveBehavior) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.defensiveBehavior = defensiveBehavior;
  }

  setEnemySpawnDelayTime = (levelKey,
      enemyGroupKey, enemyId, spawnDelayTime) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.spawnDelayTime = spawnDelayTime;
  }

  getEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    const l = this.getField(dataMap, levelKey);
    const eg = this.getField(l, enemyGroupKey);
    return this.getField(eg, enemyId);
  }

  getEnemies = (levelKey, enemyGroupKey) =>
  {
    const l = this.getField(dataMap, levelKey);
    return this.getField(l, enemyGroupKey);
  }

  removeEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    let eg = dataMap[levelKey][enemyGroupKey];

    if(eg && enemyId && eg[enemyId])
    {
      delete eg[enemyId];
      const ids = Object.keys(eg);
      const e = ids.map((key) => {return eg[key];});
      dataMap[levelKey][enemyGroupKey] = {}
      eg = dataMap[levelKey][enemyGroupKey];
      e.forEach((enemy, id) =>
      {
        enemy.id = id;
        eg[id.toString()] = enemy;
      });
    }
  }

  removeExtraEnemies = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemyMap = Object.keys(enemyGroup);
    const maxAmount = levelEditorEnemyGroup.maxAmount;

    while(enemyMap.length > maxAmount)
    {
      const key = enemyMap.pop();
      delete enemyGroup[key];
      enemyMap = Object.keys(enemyGroup);
    }
  }


  fixEnemyData = (enemy, enemyGroup, levelEditorEnemyGroup) =>
  {
    const leeg = levelEditorEnemyGroup;
    enemy.offensiveBehavior = this.getValidValue(
        enemy.offensiveBehavior, 0, 255);
    enemy.defensiveBehavior = this.getValidValue(
        enemy.defensiveBehavior, 0, 255);
    enemy.spawnDelayTime = this.getValidValue(
        enemy.spawnDelayTime, 1, 32766);

    const py = this.getValidValue(enemy.positionY,
        leeg.walkablePositionYBottom, 65535);
    const shift = this.tryGetField(leeg, "walkablePositionForceShift", 0);
    enemy.positionY = py + shift;

    if(leeg.minimumPositionX)
    {
      const shift = leeg.minimumPositionX;
      let px = Math.max(enemy.positionX, shift - 90);
      px = Math.min(px, shift + 470);
      enemy.positionX = px;
    }
    else
    {
      let px = enemy.positionX;
      px = Math.max(px, enemy.triggerPosition - 90);
      px = Math.min(px, enemy.triggerPosition + 470);
      enemy.positionX = px;
    }

    enemy.triggerPosition = this.getValidValue(enemy.triggerPosition,
        leeg.screenPositionStart, leeg.screenPositionEnd);

    if(enemyGroup.mustHaveSpawnDelayTime)
      enemy.forceTriggerPosition = 1;
  }

  forceEnemy = (enemyGroup, levelEditorEnemyGroup, enemyAmount) =>
  {
    if(enemyAmount < 1)
    {
      const tp = levelEditorEnemyGroup.screenPositionStart;
      const enemy = this.createEnemy("bred", tp);
      enemy.positionX -= 70;
      enemy.id = 0;
      enemyGroup[0] = enemy;
    }
  }

  createLevelImage = (levelKey, enemyGroupKey, enemyId, callback) =>
  {
    const level = this.getField(dataMap, levelKey);
    const eg = this.getField(level, enemyGroupKey);
    const lel = this.getField(levelEditorLevels, levelKey);
    const leeg = this.getField(lel.groups, enemyGroupKey);

    if(!this.isAnythingEmpty([level, lel, leeg]))
    {
      const enemy = this.getField(eg, enemyId);
      let mergeData = [];
      mergeData = mergeData.concat(this.getLevelMergeData(leeg));
      mergeData = mergeData.concat(this.getElevatorMergeData(leeg));
      mergeData = mergeData.concat(
          this.getNonSelectedEnemiesMergeData(enemyId, eg, leeg));
      mergeData = mergeData.concat(this.getSelectedEnemyMergeData(enemy, leeg));
      mergeData = mergeData.concat(this.getCameraFOVMergeData(enemy, leeg));
      mergeData = mergeData.concat(this.getGroupLimitsMergeData(leeg));
      mergeImages(mergeData).then((base64) =>
      {
        if(callback)
          callback(base64);
      });
    }
    else
      callback(null);
  }

  getNonSelectedEnemiesMergeData = (enemyId, enemyGroup, levelEditorEnemyGroup) =>
  {
    const ids = Object.keys(enemyGroup);
    const leeg = levelEditorEnemyGroup;
    const mergeData = [];
    ids.sort((a, b) =>
    {
      const va = this.getValidValue(
          enemyGroup[a].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      const vb = this.getValidValue(
          enemyGroup[b].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      return vb - va;
    });
    ids.forEach((id) =>
    {
      if(id !== enemyId)
      {
        const nsEnemy = enemyGroup[id];
        const enemyData = this.getEnemyMergeObject(nsEnemy, leeg);
        enemyData.opacity = 0.7;
        mergeData.push(enemyData);
      }
    });
    return mergeData;
  }

  getGroupLimitsMergeData = (levelEditorEnemyGroup) =>
  {
    const mergeData = [];
    const leeg = levelEditorEnemyGroup;
    const lee = levelEditorEnemies;
    const glImg = imageMap["groupLimit"];
    const glHW = lee["groupLimit"].width / 2;
    let px1, px2, py, shift;

    if(isNaN(leeg.levelEditorFOVPositionX))
    {
      shift = this.tryGetField(leeg, "levelEditorShiftX", 0) - glHW;
      px1 = leeg.levelEditorLimitStart + shift;
      px2 = leeg.levelEditorLimitEnd + shift;
    }
    else
    {
      px1 = leeg.levelEditorFOVPositionX - glHW;
      px2 = leeg.levelEditorFOVPositionX - glHW + lee["cameraFOV"].width;
    }

    if(isNaN(leeg.levelEditorFOVPositionY))
      py = this.tryGetField(leeg, "levelEditorShiftY", 0);
    else
      py = leeg.levelEditorFOVPositionY;

    mergeData.push({src: glImg, opacity: 0.7, y: py, x: px1});
    mergeData.push({src: glImg, opacity: 0.7, y: py, x: px2});
    return mergeData;
  }

  getEnemyMergeObject = (enemy, levelEditorEnemyGroup) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      const enemyImg = imageMap[enemy.enemyKey];
      const lh = levelEditorLevelParts[leeg.background].height;
      let shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
      shift -= lee["cameraFOV"].width / 2;
      let px = parseInt(enemy.positionX);
      px = px ? px : 0;
      px = (px + shift) - leEnemy.pivotX;
      let py = this.getValidValue(enemy.positionY,
          leeg.walkablePositionYBottom, 65535);

      py = lh - (py + leEnemy.pivotY);
      return {src: enemyImg, x: px, y: py};
    }

    return {};
  }

  getCameraFOVMergeData = (enemy, levelEditorEnemyGroup) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      let px, py, shift;

      if(isNaN(leeg.levelEditorFOVPositionX))
      {
        shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
        shift -= lee["cameraFOV"].width / 2;
        px = parseInt(enemy.triggerPosition);
        px = px ? px + shift : shift;
      }
      else
        px = leeg.levelEditorFOVPositionX;

      if(isNaN(leeg.levelEditorFOVPositionY))
        py = this.tryGetField(leeg, "levelEditorShiftY", 0);
      else
        py = leeg.levelEditorFOVPositionY;

      return [{src: imageMap["cameraFOV"], opacity: 0.7, x: px, y: py}];
    }

    return [];
  }

  getSelectedEnemyMergeData = (enemy, levelEditorEnemyGroup) =>
  {
    const emo = this.getEnemyMergeObject(enemy, levelEditorEnemyGroup);
    
    if(!this.isAnythingEmpty([emo]))
      return [emo];

    return [];
  }

  getElevatorMergeData = (levelEditorEnemyGroup) =>
  {
    if(levelEditorEnemyGroup.hasElevator)
    {
      const leeg = levelEditorEnemyGroup;
      const px = this.tryGetField(leeg, "levelEditorFOVPositionX", 0);
      const py = this.tryGetField(leeg, "levelEditorFOVPositionY", 0);
      const img = imageMap["elevator"];
      return [{src: img, x: px, y: py}];
    }

    return [];
  }

  getLevelMergeData = (levelEditorEnemyGroup) =>
  {
    const image = imageMap[levelEditorEnemyGroup.background];

    if(image)
      return [{src: image, x: 0, y: 0}];
    
    return [];
  }

  fixEnemyGroupEnd = (enemyGroup,
      levelEditorEnemyGroup, patch, byteIndex) =>
  {
    const leeg = levelEditorEnemyGroup;

    if(!isNaN(byteIndex))
    {
      const patchIndex = byteIndex.toString();
      let enemies = patch.data[patchIndex];

      if(Array.isArray(leeg.endBytes))
      {
        patch.data[patchIndex] = enemies.concat(leeg.endBytes);
        enemies = patch.data[patchIndex];
      }

      if(leeg.addEmptyBytes)
      {
        const extraBytes = (leeg.endPosition -
            leeg.startPosition) - enemies.length - 32;

        if(extraBytes > 0)
        {
          const emptyBytes = [];
          emptyBytes.length = extraBytes;
          emptyBytes.fill("AA");
          patch.data[patchIndex] = enemies.concat(emptyBytes);
        }
      }
    }

    if(leeg.enemyAmountOffset)
    {
      const a = this.getEnemyAmount(enemyGroup);
      const eaIndex = leeg.startPosition + leeg.enemyAmountOffset;
      patch.data[eaIndex] = [a.toString(16)];
    }
  }

  getEnemyAmount = (enemyGroup) =>
  {
    let amount = 0;

    Object.keys(enemyGroup).forEach((id) =>
    {
      if(!nonEnemyKeySet.has(enemyGroup[id].enemyKey))
        amount++;
    });

    return amount;
  }

  tryGetField = (object, field, def) =>
  {
    const value = object ? object[field] : null;
    return value ? value : def;
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "levelEditor")
      dataMap = json.data;
  }

  createPreset = () =>
  {
    const preset = {};
    preset.type = "levelEditor";
    preset.data = objectUtil.deepCopy(dataMap);
    delete preset.data.filename;
    return preset;
  }

  getValidValue = (value, min, max) =>
  {
    let nv = parseInt(value);
    nv = isNaN(nv) ? 0: nv;
    nv = Math.max(nv, min);
    nv = Math.min(nv, max);
    return nv;
  }

  createBred = (triggerPosition) =>
  {
    return this.createEnemy("bred", triggerPosition);
  }

  createEnemy = (enemyKey, triggerPosition) =>
  {
    if(levelEditorEnemies[enemyKey])
    {
      const enemy = {};
      enemy.id = null;
      enemy.enemyKey = enemyKey;
      enemy.triggerPosition = triggerPosition;
      enemy.positionX = triggerPosition;
      enemy.positionY = 30;
      enemy.offensiveBehavior = 0;
      enemy.defensiveBehavior = 0;
      enemy.spawnDelayTime = 0;
      return enemy;
    }
  }

  getLevelEditorEnemyGroup = (levelKey, enemyGroupKey) =>
  {
    const lel = levelEditorLevels[levelKey];
    
    if(lel)
    {
      const leeg = lel.groups[enemyGroupKey];
      return leeg ? leeg : null;
    }
    
    return null;
  }

  getField = (object, field) =>
  {
    const fixedObject = object ? object : {};
    const content = field ? fixedObject[field] : {};
    return content ? content : {};
  }

  isAnythingEmpty = (args) =>
  {    
    for(let i = 0; i < args.length; i++)
    {
      if(Object.keys(args[i]).length < 1)
        return true;
    }
    
    return false;
  }

  addToModificationQueue = () =>
  {
    modificationService.add(150, "level", this.applyData);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in levelEditorLevels);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = levelEditorLevels[levelKey]?.groups;
    level = level ? level : {}
    return (groupKey in level);
  }

  isValidEnemyKey = (enemyKey) =>
  {
    return (enemyKey in levelEditorEnemies);
  }

  setDataMapToDefault = () =>
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(levelEditorLevels);
    return keys.map((key) => {return levelEditorLevels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const keys = level ? Object.keys(level) : [];
    const groups = [];
    keys.forEach((key) =>
    {
      const group = level[key];
      const disabled = group?.disabled ? group.disabled : false;

      if(group && !disabled)
        groups.push(group);
    });
    return groups;
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const group = level ? level[groupKey] : null;
    return group ? group : {};
  }

  getUIEnemyFilteredList = (filter, level, enemyGroup, enemyId) =>
  {
    const enemieKeys = Object.keys(levelEditorEnemies);

    // Removes the elevator, cameraFOV, groupLimit.
    for(let i = 0; i < 3; i++)
      enemieKeys.pop();
    
    if(filter)
    {
      const filterLower = filter.toLowerCase();
      const selected = levelEditorService.getEnemy(level, enemyGroup, enemyId);
      const filtered = [];
      enemieKeys.forEach((ek) =>
      {
        const v = levelEditorEnemies[ek].label.toLowerCase().includes(filterLower);

        if(v || ek === selected.enemyKey)
          filtered.push(levelEditorEnemies[ek]);
      });

      return filtered;
    }

    return enemieKeys.map((key) => levelEditorEnemies[key]);
  }

  getUIEnemyAddedList = (levelKey, groupKey) =>
  {
    const level = this.getField(dataMap, levelKey);
    const group = this.getField(level, groupKey);
    return Object.keys(group).map((key) =>
    {
      const enemy = group[key];
      const label = levelEditorEnemies[enemy.enemyKey]?.label;
      return {...enemy, label, id: key};
    });
  }

  getUIEnemyPositionXRange = (enemyGroup, enemy) =>
  {
    let base = enemyGroup.positionXForceShift;
    base = base ? base : parseInt(enemy.triggerPosition);
    base = isNaN(base) ? 0 : base;
    const range = {};
    range.min = base ? (base - 70) : 0;
    range.max = base ? (base + 450) : 0;
    return range;
  }

  // TODO: Better to add the key field to all files instead.
  fixLevelEditorEnemies = () =>
  {
    const keys = Object.keys(levelEditorEnemies);
    keys.forEach((key) => levelEditorEnemies[key].key = key);
  }

  constructor()
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
    this.fixLevelEditorEnemies();
  }
}


let dataMap;

export const levelEditorService = new LevelEditorService();