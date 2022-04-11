import romService from "./ROMService";

import forbiddenService from "./ForbiddenService";

import objectUtil from '../data/ObjectUtil';
import patchMap from "../data/patch/PatchMap";
import enemyByteMap from "../data/byte/EnemyByteMap";
import nonEnemyKeySet from "../data/level/NonEnemyKeySet"

import extraBossData from "../data/randomizer/profile/ExtraBossData";
import randomizerData from "../data/randomizer/RandomizerData";


class RandomizerService
{
	constructor()
	{
		this.mainData = this.createDefaultMainData();
		this.randomizerLevelTexts =
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
		this.safeEnemyKeyList =
		[
			"andoreJrFallingFast", "roxyFalling",
			"hollyWoodFallingFast"
		];
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
		let randomProfile =
				randomizerData.randomProfile[this.mainData.randomProfile];

		Object.keys(rdegs).forEach((lk) =>
		{
			let rdl = rdegs[lk];
			let presetLevel = this.forceGetField(randomizedData.preset, lk);

			Object.keys(rdl).forEach((egk) =>
			{
				let rdeg = rdl[egk];

				if(rdeg.disabled)
					return;

				let enemies = this.randomizeEnemiesForGroup(lk, egk, randomizer);
				this.randomlyRemoveEnemiesOverLimit(rdeg, enemies, randomizer);
				this.randomizeExtraBosses(enemies, rdeg, randomProfile, randomizer);
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

	randomizeEnemiesForGroup = (levelKey, enemyGroupKey, randomizer) =>
	{
		let enemyList = [];
		let enemies = {preset: {}, patch: {}};
		let mdeg = this.mainData[levelKey][enemyGroupKey];
		let rdld = randomizerData.enemyGroups[levelKey];
		let rdes = randomizerData.enemyStrategy;
		let enemyGroup = rdld[enemyGroupKey];
		let enemyStrategy, amount, enemy, bytes;

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
			let key = (i + 10).toString();
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
		let e = {};
		e.enemyKey = this.randomizeEnemyKey(
				enemyGroup, enemyStrategy, randomizer);
		e.triggerPosition = this.randomizeSpawnTriggerPosition(
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
		let rl = forbiddenService.getValidPositionRangeList(enemyKey, frl);
		let keys = Object.keys(rl);
		let random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
		let range = rl[keys[random]];
		let px = this.getRandomIntValue(randomizer, range[0], range[1]);
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
		let b = this.getRandomIntValue(randomizer, 0, 255);
		
		if(this.getRandomIntValue(randomizer, 0, 1) === 0)
			return [b, 0];
		else
			return [0, b];
	}

	randomizeSpawnTriggerPosition = (enemyGroup, randomizer) =>
	{
		let random = this.getRandomIntValue(randomizer,
				enemyGroup.screenPositionStart,
				enemyGroup.screenPositionEnd);
		return random;
	}

	randomlyRemoveEnemiesOverLimit = (enemyGroup, enemies, randomizer) =>
	{
		let fields = Object.keys(enemies.patch);

		while(fields.length > enemyGroup.maxAmount)
		{
			let random = this.getRandomIntValue(randomizer, 0, fields.length - 1);
			let key = fields[random];
			delete enemies.patch[key];
			delete enemies.preset[key]
			fields = Object.keys(enemies.patch);
		}
	}

	randomizeEnemyKey = (enemyGroup, enemyStrategy, randomizer) =>
	{
		let fls = enemyGroup.forbiddenEnemyLists;
		let veil = forbiddenService.getValidEnemyIndexList(
				enemyStrategy.enemyKeys, fls);
		let random = this.getRandomIntValue(randomizer, 0, veil.length - 1);
		let ek = enemyStrategy.enemyKeys[veil[random]];

		if(ek ? false : true)
		{
			let max = this.safeEnemyKeyList.length - 1;
			random = this.getRandomIntValue(randomizer, 0, max);
			ek = this.safeEnemyKeyList[random];
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
			let eb = extraBossData[enemyGroup.extraBoss];
			let keys = Object.keys(eb);
			let bPre = [];
			let bPat = [];
			
			for(let i = 0; i < amount; i++)
			{
				let random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
				let key = keys[random];
				keys = keys.filter((k) => {return k !== key});
				let boss = objectUtil.deepCopy(eb[key]);
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
		let enemyBytes = enemyByteMap[enemy.enemyKey].slice();
		let hexTP = romService.convertNumberToROMBytes(tp, 2);
		let hexPX = romService.convertNumberToROMBytes(enemy.positionX, 2);
		let hexPY = romService.convertNumberToROMBytes(enemy.positionY + shift, 2);

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
		romService.applyPatch(
				patchMap.enemyHealthImprovementCallerPatch.patch);
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
		romService.applyPatch(
				patchMap.lockMaxTimeImprovementPatch.patch);
		romService.applyPatch(this.createRandomizerPatch());
		romService.applyPatch(this.getTimeDelayPatch());
		romService.applyPatch(this.createRandomizerTextPatch());
	}

	getCustomRandomProfileEnemyGroup = (levelKey, groupKey) =>
	{
		if(levelKey && groupKey)
		{
			let crp = randomizerData.randomProfile.custom;
			let l = this.forceGetField(crp, levelKey);
			return this.forceGetField(l, groupKey);
		}
		
		return {};
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
		rp = rp in randomizerData.randomProfile ? rp : "wild";
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

	setEnemyGroupMaxAmount = (levelKey, groupKey, strategyKey, amount) =>
	{
		let rp = randomizerData.randomProfile.custom;
		let l = this.forceGetField(rp, levelKey);
		let g = this.forceGetField(l, groupKey);
		let s = this.forceGetField(g, strategyKey);
		s.randomMaxAmount = amount;
	}

	setEnemyGroupMinAmount = (levelKey, groupKey, strategyKey, amount) =>
	{
		let rp = randomizerData.randomProfile.custom;
		let l = this.forceGetField(rp, levelKey);
		let g = this.forceGetField(l, groupKey);
		let s = this.forceGetField(g, strategyKey);
		s.randomMinAmount = amount;
	}

	getDateNowInMilliseconds = () =>
	{
		return Date.now().valueOf();
	}

	getMainData = () =>
	{
		return this.mainData;
	}

	getCustomRandomProfileEnemyGroup = (levelKey, groupKey) =>
	{
		if(levelKey && groupKey)
		{
			let crp = randomizerData.randomProfile.custom;
			let l = this.forceGetField(crp, levelKey);
			return this.forceGetField(l, groupKey);
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
		let randomProfile =
				randomizerData.randomProfile[this.mainData.randomProfile];
		Object.keys(rdegs).forEach((e) =>
		{
			this.fixLevel(e, randomProfile, randomizer);
		});
	}

	fixLevel = (levelKey, randomProfile, randomizer) =>
	{
		let mdl = this.forceGetField(this.mainData, levelKey);
		let rdl = randomizerData.enemyGroups[levelKey];

		Object.keys(rdl).forEach((egk) =>
		{
			let rdeg = rdl[egk];
			let sts;

			if(this.mainData.randomProfile === "custom")
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
			mainDataLevel, randomStrategies, randomizer) =>
	{
		let eg = this.forceGetField(mainDataLevel, enemyGroupKey);
		objectUtil.removeAllProperties(eg);
		let total = 0;
		Object.keys(randomStrategies).forEach((e) =>
		{
			let es = randomStrategies[e];
			let min = parseInt(es.randomMinAmount);
			let max = parseInt(es.randomMaxAmount);
			min = (isNaN(min) || min < 0) ? 0 : min;
			max = (isNaN(max) || max < 0) ? 0 : max;
			min = (max - min) < 0 ? 0 : min;
			max = (max - min) < 0 ? 0 : max;
			let amount = this.getRandomIntValue(randomizer, min, max);
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
					randomizedData.patch[patchIndex] = enemies.concat(emptyBytes);
				}
			}
		}
		
		if(enemyGroup.enemyAmountOffset)
		{
			let a = this.getEnemyAmount(levelKey, enemyGroupKey, randomizedData);
			let eaIndex = enemyGroup.startPosition + enemyGroup.enemyAmountOffset;
			randomizedData.patch[eaIndex] = [a.toString(16)];
		}
	}

	getEnemyAmount = (levelKey, enemyGroupKey, randomizedData) =>
	{
		let enemies = randomizedData.preset[levelKey][enemyGroupKey];
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
		let patch = Object.assign({}, patchMap.randomizerTextPatch.patch);
		patch.data = Object.assign({}, patchMap.randomizerTextPatch.patch.data);
		let sbs = this.getSeedTextBytes(patch);
		let lbs = this.getRandomProfileTextBytes();
		patch.data[patch.seedByteIndex.toString()] = sbs;
		patch.data[patch.levelByteIndex.toString()] = lbs;
		return patch;
	}

	getRandomProfileTextBytes = () =>
	{
		let lt = this.randomizerLevelTexts[this.mainData.randomProfile];
		return romService.convertStringToROMBytes(lt);
	}

	getSeedTextBytes = (patch) =>
	{
		let st = this.mainData.seed.toString();
		let seedSize = patch.seedSize;
		st = "*".repeat(seedSize) + " " + st + " " + "*".repeat(seedSize);
		let remove = (st.length - seedSize) / 2;
		st = st.substring(remove, st.length - remove);
		st = st.length > seedSize ? st.substring(0, seedSize) : st;
		return romService.convertStringToROMBytes(st);
	}

	applyPresetFile = (presetFile) =>
	{
		let json = JSON.parse(presetFile);

		if(json && json.data && json.type === "randomizer")
		{
			this.mainData = this.mainData ? this.mainData : {};
			Object.assign(this.mainData, json.data);
			delete this.mainData.customRandomProfile;
			let custom = json.data.customRandomProfile;
			custom = custom ? custom : {};
			Object.assign(randomizerData.randomProfile.custom, custom);
			randomizerData.randomProfile.custom.label = "Custom";
		}
	}
	
	createRandomizerPreset = () =>
	{
		let csr = randomizerData.randomProfile.custom;
		let preset = {};
		preset.type = "randomizer";
		preset.data = objectUtil.deepCopy(this.mainData);

		if(this.mainData.randomProfile === "custom")
		{
			preset.data.customRandomProfile = objectUtil.deepCopy(csr);
			delete preset.data.customRandomProfile.label;
		}

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
		mainData.randomProfile = "wild";
		return mainData;
	}

	setMainDataToDefault = () =>
	{
		this.mainData = this.createDefaultMainData();
	}

	setCustomRandomProfileToDefault = () =>
	{
		randomizerData.randomProfile.custom = {label: "Custom"};
		randomizerData.randomProfile.custom.rolentoGrenade1 = 1;
		randomizerData.randomProfile.custom.rolentoGrenade2 = 1;
		randomizerData.randomProfile.custom.rolentoGrenade3 = 1;
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