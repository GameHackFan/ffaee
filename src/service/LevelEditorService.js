import romService from "./ROMService";

import objectUtil from '../data/ObjectUtil';

import imageMap from "../data/ImageMap";
import mergeImages from '../api/merge-images.js';
import patchMap from "../data/patch/PatchMap";
import enemyByteMap from "../data/byte/EnemyByteMap";
import nonEnemyKeySet from "../data/level/NonEnemyKeySet";

import levelDefaultData from "../data/level/LevelDefaultData";
import levelEditorLevels from "../data/level/LevelEditorLevels";
import levelEditorEnemies from "../data/level/LevelEditorEnemies";
import levelEditorLevelParts from "../data/level/LevelEditorLevelParts";


class LevelEditorService
{
	constructor()
	{
		this.mainData = objectUtil.deepCopy(levelDefaultData);
	}

	createLevelEditorPatch = () =>
	{
		let patch = {};
		patch.data = {};
		this.applyDataToPatch(patch);
		patch.type = "overwrite";
		patch.byteFormat = "hex";
		patch.filename = "ff-23m.8h";
		return patch;
	}

	applyDataToPatch = (patch) =>
	{
		let editData = objectUtil.deepCopy(this.mainData);

		Object.keys(this.mainData).forEach((lk) =>
		{
			let level = this.mainData[lk];

			Object.keys(level).forEach((egk) =>
			{
				let enemyGroup = level[egk];
				let leeg = this.getLevelEditorEnemyGroup(lk, egk);

				if(!leeg || leeg.disabled)
					return;

				this.removeExtraEnemies(enemyGroup, leeg);
				this.forceEnemy(enemyGroup, leeg, Object.keys(enemyGroup).length);
				let enemies = this.getEnemiesBytesFromGroup(enemyGroup, leeg);
				let byteStart = leeg.startPosition;
				let bytes = patch.data[byteStart.toString()];
				bytes = bytes ? bytes : [];
				bytes = bytes.concat(enemies);
				patch.data[byteStart.toString()] = bytes;
				this.fixEnemyGroupEnd(enemyGroup, leeg, patch, byteStart);
			});
		});

		// NOTE: Let the user decide about this?
		this.mainData = editData;
	}

	applyData = () =>
	{
		romService.applyPatch(patchMap.enemySpawnImprovementPatch.patch);
		romService.applyPatch(patchMap.andoreColorImprovementPatch.patch);
		romService.applyPatch(patchMap.levelExpansionPatch.patch);
		romService.applyPatch(patchMap.levelEditorTextPatch.patch);
		romService.applyPatch(this.createLevelEditorPatch());
	}

	addEnemy = (levelKey, enemyGroupKey) =>
	{    
		let eg = this.mainData[levelKey][enemyGroupKey];
		let leeg = this.getLevelEditorEnemyGroup(levelKey, enemyGroupKey);
		let e = this.createBred(leeg.screenPositionStart);
		e.positionY = leeg.walkablePositionYTop;
		let id = Object.keys(eg).length.toString();

		if(leeg.minimumPositionX)
			e.positionX = leeg.minimumPositionX;
		
		eg[id] = e;
		return id;
	}

	getEnemiesBytesFromGroup = (enemyGroup, levelEditorEnemyGroup) =>
	{
		let enemies = [];

		Object.keys(enemyGroup).forEach((ek) =>
		{
			let enemy = enemyGroup[ek];
			this.fixEnemyData(enemy, enemyGroup, levelEditorEnemyGroup);
			let enemyBytes = enemyByteMap[enemy.enemyKey].slice();

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
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.enemyKey = enemyKey;
	}

	setEnemyTriggerPosition = (levelKey,
			enemyGroupKey, enemyId, triggerPosition) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.triggerPosition = triggerPosition;
	}

	setEnemyPositionX = (levelKey, enemyGroupKey, enemyId, positionX) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.positionX = positionX;
	}

	setEnemyPositionY = (levelKey, enemyGroupKey, enemyId, positionY) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.positionY = positionY;
	}

	setEnemyOffensiveBehavior = (levelKey,
			enemyGroupKey, enemyId, offensiveBehavior) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.offensiveBehavior = offensiveBehavior;
	}

	setEnemyDefensiveBehavior = (levelKey,
			enemyGroupKey, enemyId, defensiveBehavior) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.defensiveBehavior = defensiveBehavior;
	}

	setEnemySpawnDelayTime = (levelKey,
			enemyGroupKey, enemyId, spawnDelayTime) =>
	{
		let enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
		enemy.spawnDelayTime = spawnDelayTime;
	}

	getEnemy = (levelKey, enemyGroupKey, enemyId) =>
	{
		let l = this.getField(this.mainData, levelKey);
		let eg = this.getField(l, enemyGroupKey);
		return this.getField(eg, enemyId);
	}

	getEnemies = (levelKey, enemyGroupKey) =>
	{
		let l = this.getField(this.mainData, levelKey);
		return this.getField(l, enemyGroupKey);
	}

	removeEnemy = (levelKey, enemyGroupKey, enemyId) =>
	{
		let eg = this.mainData[levelKey][enemyGroupKey];

		if(eg && enemyId && eg[enemyId])
		{
			delete eg[enemyId];
			let ids = Object.keys(eg);
			let e = ids.map((key) => {return eg[key];});
			this.mainData[levelKey][enemyGroupKey] = {}
			eg = this.mainData[levelKey][enemyGroupKey];
			e.forEach((enemy, id) => {eg[id.toString()] = enemy;});
		}
	}

	removeExtraEnemies = (enemyGroup, levelEditorEnemyGroup) =>
	{
		let enemyMap = Object.keys(enemyGroup);
		let maxAmount = levelEditorEnemyGroup.maxAmount;

		while(enemyMap.length > maxAmount)
		{
			let key = enemyMap.pop();
			delete enemyGroup[key];
			enemyMap = Object.keys(enemyGroup);
		}
	}


	fixEnemyData = (enemy, enemyGroup, levelEditorEnemyGroup) =>
	{
		let leeg = levelEditorEnemyGroup;
		enemy.offensiveBehavior = this.getValidValue(
				enemy.offensiveBehavior, 0, 255);
		enemy.defensiveBehavior = this.getValidValue(
				enemy.defensiveBehavior, 0, 255);
		enemy.spawnDelayTime = this.getValidValue(
				enemy.spawnDelayTime, 1, 65535);

		let py = this.getValidValue(enemy.positionY,
				leeg.walkablePositionYBottom, 65535);
		let shift = this.tryGetField(leeg, "walkablePositionForceShift", 0);
		enemy.positionY = py + shift;

		if(leeg.minimumPositionX)
		{
			let shift = leeg.minimumPositionX;
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
			e.forceTriggerPosition = 1;
	}

	forceEnemy = (enemyGroup, levelEditorEnemyGroup, enemyAmount) =>
	{
		if(enemyAmount < 1)
		{
			let tp = levelEditorEnemyGroup.screenPositionStart;
			let enemy = this.createEnemy("bred", tp);
			enemy.positionX -= 70;
			enemyGroup[0] = enemy;
		}
	}

	createLevelImage = (levelKey, enemyGroupKey, enemyId, callback) =>
	{
		let level = this.getField(this.mainData, levelKey);
		let eg = this.getField(level, enemyGroupKey);
		let lel = this.getField(levelEditorLevels, levelKey);
		let leeg = this.getField(lel.groups, enemyGroupKey);

		if(!this.isAnythingEmpty([level, lel, leeg]))
		{
			let enemy = this.getField(eg, enemyId);
			let mergeData = [];
			mergeData = mergeData.concat(this.getLevelMergeData(leeg));
			mergeData = mergeData.concat(this.getElevatorMergeData(leeg));
			mergeData = mergeData.concat(
					this.getNonSelectedEnemiesMergeData(enemyId, enemy, eg, leeg));
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

	getNonSelectedEnemiesMergeData = (enemyId,
			enemy, enemyGroup, levelEditorEnemyGroup) =>
	{
		let ids = Object.keys(enemyGroup);
		let leeg = levelEditorEnemyGroup;
		let mergeData = [];
		ids.sort((a, b) =>
		{
			let va = this.getValidValue(
					enemyGroup[a].positionY,
					leeg.walkablePositionYBottom,
					leeg.walkablePositionYTop);
			let vb = this.getValidValue(
					enemyGroup[b].positionY,
					leeg.walkablePositionYBottom,
					leeg.walkablePositionYTop);
			return vb - va;
		});
		ids.forEach((id) =>
		{
			if(id !== enemyId)
			{
				let nsEnemy = enemyGroup[id];
				let enemyData = this.getEnemyMergeObject(nsEnemy, leeg);
				enemyData.opacity = 0.7;
				mergeData.push(enemyData);
			}
		});
		return mergeData;
	}

	getGroupLimitsMergeData = (levelEditorEnemyGroup) =>
	{
		let mergeData = [];
		let leeg = levelEditorEnemyGroup;
		let lee = levelEditorEnemies;
		let glImg = imageMap["groupLimit"];
		let glHW = lee["groupLimit"].width / 2;
		let px1, px2, py;

		if(isNaN(leeg.levelEditorFOVPositionX))
		{
			let shift = this.tryGetField(leeg, "levelEditorShiftX", 0) - glHW;
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
		let lee = levelEditorEnemies;
		let leEnemy = lee[enemy.enemyKey];

		if(enemy && leEnemy)
		{
			let leeg = levelEditorEnemyGroup;
			let enemyImg = imageMap[enemy.enemyKey];
			let shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
			shift -= lee["cameraFOV"].width / 2;
			let px = parseInt(enemy.positionX);
			px = px ? px : 0;
			px = (px + shift) - leEnemy.pivotX;
			let lh = levelEditorLevelParts[leeg.background].height;
			let py = this.getValidValue(enemy.positionY,
					leeg.walkablePositionYBottom, 65535);

			py = lh - (py + leEnemy.pivotY);
			return {src: enemyImg, x: px, y: py};
		}

		return {};
	}

	getCameraFOVMergeData = (enemy, levelEditorEnemyGroup) =>
	{
		let lee = levelEditorEnemies;
		let leEnemy = lee[enemy.enemyKey];

		if(enemy && leEnemy)
		{
			let leeg = levelEditorEnemyGroup;
			let px, py;

			if(isNaN(leeg.levelEditorFOVPositionX))
			{
				let shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
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
		let emo = this.getEnemyMergeObject(enemy, levelEditorEnemyGroup);
		
		if(!this.isAnythingEmpty([emo]))
			return [emo];

		return [];
	}

	getElevatorMergeData = (levelEditorEnemyGroup) =>
	{
		if(levelEditorEnemyGroup.hasElevator)
		{
			let leeg = levelEditorEnemyGroup;
			let px = this.tryGetField(leeg, "levelEditorFOVPositionX", 0);
			let py = this.tryGetField(leeg, "levelEditorFOVPositionY", 0);
			let img = imageMap["elevator"];
			return [{src: img, x: px, y: py}];
		}

		return [];
	}

	getLevelMergeData = (levelEditorEnemyGroup) =>
	{
		let image = imageMap[levelEditorEnemyGroup.background];

		if(image)
			return [{src: image, x: 0, y: 0}];
		
		return [];
	}

	fixEnemyGroupEnd = (enemyGroup,
			levelEditorEnemyGroup, patch, byteIndex) =>
	{
		let leeg = levelEditorEnemyGroup;

		if(!isNaN(byteIndex))
		{
			let patchIndex = byteIndex.toString();
			let enemies = patch.data[patchIndex];

			if(Array.isArray(leeg.endBytes))
			{
				patch.data[patchIndex] = enemies.concat(leeg.endBytes);
				enemies = patch.data[patchIndex];
			}

			if(leeg.addEmptyBytes)
			{
				let extraBytes = (leeg.endPosition -
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
			let a = this.getEnemyAmount(enemyGroup, leeg);
			let eaIndex = leeg.startPosition + leeg.enemyAmountOffset;
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

	getEnemySelectList = (filter, level, enemyGroup, enemyId) =>
	{
		let enemieKeys = Object.keys(levelEditorEnemies);

		// Removes the elevator, cameraFOV, groupLimit.
		for(let i = 0; i < 3; i++)
			enemieKeys.pop();
		
		if(filter)
		{
			const filterLower = filter.toLowerCase();
			let selected = levelEditorService.getEnemy(level, enemyGroup, enemyId);

			let filtered = enemieKeys.filter((ek) =>
			{
				return levelEditorEnemies[ek].label.toLowerCase().
						includes(filterLower) || ek === selected.enemyKey;
			});

			return filtered;
		}

		return enemieKeys;
	}

	tryGetField = (object, field, def) =>
	{
		let value = object ? object[field] : null;
		return value ? value : def;
	}

	applyPresetFile = (presetFile) =>
	{
		let json = JSON.parse(presetFile);

		if(json && json.data && json.type === "levelEditor")
			this.mainData = json.data;
	}

	createPresetFile = () =>
	{
		let preset = {};
		preset.type = "levelEditor";
		preset.data = objectUtil.deepCopy(this.mainData);
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
			let enemy = {};
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
		let lel = levelEditorLevels[levelKey];
		
		if(lel)
		{
			let leeg = lel.groups[enemyGroupKey];
			return leeg ? leeg : null;
		}
		
		return null;
	}

	getField = (object, field) =>
	{
		let fixedObject = object ? object : {};
		let content = field ? fixedObject[field] : {};
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

	getMainData = () =>
	{
		return this.mainData;
	}

	setMainDataToDefault = () =>
	{
		this.mainData = objectUtil.deepCopy(levelDefaultData);
	}
}


const levelEditorService = new LevelEditorService();
export default levelEditorService;