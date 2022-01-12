import objectUtil from '../data/ObjectUtil';
import randomizerData from  "../data/randomizer/RandomizerData";

import mustSpawnLeftList from
		"../data/randomizer/forbidden/MustSpawnLeftList";
import mustSpawnRightList from
		"../data/randomizer/forbidden/MustSpawnRightList";
import staticObjectList from
		"../data/randomizer/forbidden/StaticObjectList";
import chandelierList from
		"../data/randomizer/forbidden/ChandelierList";
import cagePalletBugList from
		"../data/randomizer/forbidden/CagePalletBugList";
import rolentoPalletBugList from
		"../data/randomizer/forbidden/RolentoPalletBugList";
import shootingBugList from
		'../data/randomizer/forbidden/ShootingBugList';


class ForbiddenService
{
	constructor()
	{
		this.mustSpawnLeftList = mustSpawnLeftList;
		this.mustSpawnRightList = mustSpawnRightList;
		this.staticObjectList = staticObjectList;
		this.chandelierList = chandelierList;
		this.rolentoPalletBugList = rolentoPalletBugList;
		this.cagePalletBugList = cagePalletBugList;
		this.shootingBugList = shootingBugList;
	}

	getValidEnemyIndexList = (enemyKeyList, forbiddenEnemyLists) =>
	{
		let fels = forbiddenEnemyLists ? forbiddenEnemyLists : [];
		let fkSet = new Set();
		let veil = [];

		fels.forEach((fk) =>
		{
			let fel = this[fk];

			if(fel)
				fel.forEach((fek) => {fkSet.add(fek);});
		});

		enemyKeyList.forEach((ek, index) =>
		{
			if(!fkSet.has(ek))
				veil.push(index);
		});

		return veil;
	}

	getValidPositionRangeList = (enemyKey, forbiddenRangeList) =>
	{
		let rangeList = objectUtil.deepCopy(randomizerData.positionRange);
		let frl = forbiddenRangeList ? forbiddenRangeList : [];
		frl.forEach((fk) => {delete rangeList[fk];});

		if(enemyKey.includes("ToFall") || enemyKey.includes("flame"))
		{
			delete rangeList.outsideLeft;
			delete rangeList.outsideRight;
			delete rangeList.inside;
		}
		else if(enemyKey.includes("Falling") || enemyKey.includes("chandelier"))
		{
			delete rangeList.outsideLeft;
			delete rangeList.outsideRight;
			delete rangeList.insideTop;
		}
		else if(enemyKey.includes("Kick") || enemyKey.includes("Left"))
		{
			delete rangeList.outsideLeft;
			delete rangeList.inside;
			delete rangeList.insideTop;
		}
		else if(enemyKey.includes("Right"))
		{
			delete rangeList.outsideRight;
			delete rangeList.inside;
			delete rangeList.insideTop;
		}
		else
		{
			delete rangeList.inside;
			delete rangeList.insideTop;
		}

		if(Object.keys(rangeList).length < 1)
		{
			rangeList.inside = randomizerData.positionRange.inside;
		}

		return rangeList;
	}
}


const forbiddenService = new ForbiddenService();
export default forbiddenService;