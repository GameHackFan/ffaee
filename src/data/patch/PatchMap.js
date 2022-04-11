
import levelExpansionPatch from "./LevelExpansionPatch";
import extraBossPatch from "./ExtraBossPatch";

import featuresAndFixesPatch1 from "./FeaturesAndFixesPatch1";
import featuresAndFixesPatch2 from "./FeaturesAndFixesPatch2";
import lifebarImprovementPatch from "./LifebarImprovementPatch";
import enemySpawnImprovementPatch from "./EnemySpawnImprovementPatch";
import lockImprovementPatch from "./LockImprovementPatch";
// import bossImprovementPatch from "./BossImprovementPatch";
import enemyHealthImprovementPatch from "./EnemyHealthImprovementPatch";
import andoreColorImprovementPatch from "./AndoreColorImprovementPatch";
import guyColorImprovementPatch from "./GuyColorImprovementPatch";

import playerHealthPatch from "./PlayerHealthPatch";
import levelEditorTextPatch from "./LevelEditorTextPatch";
import randomizerTextPatch from "./RandomizerTextPatch";
import defaultTextPatch from "./DefaultTextPatch";
import lockMaxTimeImprovementPatch from "./LockMaxTimeImprovementPatch";


import originalBossHelperTimeDelayPatch from "./OriginalBossHelperTimeDelayPatch";
import type1BossHelperTimeDelayPatch from "./Type1BossHelperTimeDelayPatch";
import type2BossHelperTimeDelayPatch from "./Type2BossHelperTimeDelayPatch";
import type3BossHelperTimeDelayPatch from "./Type3BossHelperTimeDelayPatch";


const patchMap = 
{
	featuresAndFixesPatch1:
	{
		label:	"Features and Fixes Patch 1",
		text:		"This patch bring features anf bug fixes. " + 
						"It fixes the bug that doesn't allow P1 to " + 
						"select the same character as P2, fixes the " + 
						"immortal bug that happens with Holly Wood, " + 
						"El Gado and Rolento. This patch is used by " + 
						"the Level Editor and the Seed Randomizer.",
		patch: featuresAndFixesPatch1,
		show: true
	},
	featuresAndFixesPatch2:
	{
		label:	"Features and Fixes Patch 2",
		text:		"This patch bring features and bug fixes. " + 
						"It fixes haggar dynamite scene. This " + 
						"patch is used by the Level Editor and " + 
						"the Seed Randomizer.",
		patch: featuresAndFixesPatch2,
		show: true
	},
	enemySpawnImprovementPatch:
	{
		label:	"Enemy Spawn Improvement Patch",
		text:		"This patch removes a very pointless " +
						"validation that was bugging the enemy " +
						"spawn. Enemies spawning were limited to " + 
						"to some specific value, so if more than " + 
						"that spawns, it would lead for more than " +
						"half of the enemy types to stop spawning " +
						"(some enemy types were spawning anyways), " +
						"when enemies die, the counter also drops " + 
						"by 1, which sometimes could result in 0 " + 
						"being subtracted by 1 resulting in FF " +
						"(255), which was being checked as an " +
						"unsigned value by the forbiding the enemy " +
						"to spawn. This Patch is used by the Level " +
						"Editor and the Seed Randomizer.",
		patch: enemySpawnImprovementPatch,
		show: true	
	},
	lifebarImprovementPatch:
	{
		label:	"Lifebar Improvement Patch",
		text:		"Ensures every lifebar will support more " + 
						"than the original yellow color, it also " + 
						"ensures every life bar will have exactly " + 
						"145 points. This patch must be used " + 
						"together with Lifebar Improvement Caller " +
						"Patch. This patch is used by the Seed " + 
						"Randomizer.",
		patch: lifebarImprovementPatch.patch1,
		show: true
	},
	lifebarImprovementCallerPatch:
	{
		label:	"Lifebar Improvement Caller Patch",
		text:		"This patch ensures the Lifebar " + 
						"Improvement Patch will be executed by " + 
						"the game. This patch must be used " + 
						"together with Lifebar Improvement Patch. " + 
						"This patch is used by the Seed Randomizer.",
		patch: lifebarImprovementPatch.patch2,
		show: true
	},
	enemyHealthImprovementPatch:
	{
		label:	"Enemy Health Improvement Patch",
		text:		"Increases the HP of all enemy characters " + 
						"All bosses except Belger have 300 points " +  
						"increment, enemies with less than 176 HP " + 
						"will have 100 points increment and th rest " + 
						"will have 70 points increment. This patch " +
						"must be used together with Enemy Health " + 
						"Improvement Caller Patch. This patch is " + 
						"used by the Seed Randomizer.",
		patch: enemyHealthImprovementPatch.patch1,
		show: true
	},
	enemyHealthImprovementCallerPatch:
	{
		label:	"Enemy Health Improvement Caller Patch",
		text:		"This patch ensures the Enemy Health " + 
						"Improvement Patch will be executed by " + 
						"the game. This patch must be used " + 
						"together with Enemy Health Improvement " +
						"Patch. This patch is used by the Seed " + 
						"Randomizer.",
		patch: enemyHealthImprovementPatch.patch2,
		show: true
	},
	lockImprovementPatch:
	{
		label:	"Lock Improvement Patch",
		text:		"This patch changes the way the game " + 
						"handles the lock, it now checks if there " + 
						"are no enemies in the screen anymore and " + 
						"if the time delay to spawn the next enemy " +
						"is too high, which means it is not a time " + 
						"delay, which also means there are no more " +
						"enemies to spawn. This patch is used by " +
						"the Level Editor and the Seed Randomizer.",
		patch: lockImprovementPatch,
		show: true
	},
	// TODO: Write the text here
	// bossImprovementPatch:
	// {
	// 	label:	"Boss Improvement Patch",
	// 	text:		"",
	// 	patch: bossImprovementPatch,
	// 	show: false
	// },
	levelExpansionPatch:
	{
		label:	"Level Expansion Patch",
		text:		"This patch will increase the amount of " +
						"bytes all levels support. It also sorts " +
						"the content of each level, making it " +
						"easier to understand. It is used by the " +
						"Level Editor and the Seed Randomizer.",
		patch: levelExpansionPatch,
		show: true
	},
	extraBossPatch:
	{
		label:	"Extra Bosses Patch",
		text:		"This patch will change all Abigail's " +
						"and Belger's Boss Helper Enemy Group' " +
						"to allow to add more than one Abigail or " +
						"Belger. Unfortunately Abigail and Belger " +
						"only spawns inside a 'Lock Group', so " +
						"this solution is needed to add more " +
						"than one of them. It is used by the " +
						"Level Editor and the Seed Randomizer.",
		patch: extraBossPatch,
		show: true
	},
	originalBossHelperTimeDelayPatch:
	{
		label:	"Original Boss Helper First Enemy Time Delay",
		text:		"This patch will set the spawn delay " + 
						"time of the first enemy for all boss " +
						"helper enemy groups to the same values " +
						"of the original ROM. You need to apply " + 
						"the 'Level Expansion Patch' before " +
						"applying this patch or it will not work. ",
		patch: originalBossHelperTimeDelayPatch,
		show: true
	},
	type1BossHelperTimeDelayPatch:
	{
		label:	"Type 1 Boss Helper First Enemy Time Delay",
		text:		"This patch will set the spawn delay " + 
						"time of the first enemy of the first " +
						"boss to 1 like the original ROM and 240 " +
						"for all the others. You need to apply " +
						"the 'Level Expansion Patch' before " +
						"applying this patch or it will not work. ",
		patch: type1BossHelperTimeDelayPatch,
		show: true
	},
	type2BossHelperTimeDelayPatch:
	{
		label:	"Type 2 Boss Helper First Enemy Time Delay",
		text:		"This patch will set the spawn delay " + 
						"time of the first enemy of the first " +
						"boss to 1 like the original ROM and 300 " +
						"for all the others. You need to apply " +
						"the 'Level Expansion Patch' before " +
						"applying this patch or it will not work.",
		patch: type2BossHelperTimeDelayPatch,
		show: true
	},
	type3BossHelperTimeDelayPatch:
	{
		label:	"Type 3 Boss Helper First Enemy Time Delay",
		text:		"This patch will set the spawn delay " + 
						"time of the first enemy of the first " +
						"boss to 1 like the original ROM and 360 " +
						"for all the others. You need to apply " +
						"the 'Level Expansion Patch' before " +
						"applying this patch or it will not " +
						"work. This patch is used by the Seed " +
						"Randomizer.",
		patch: type3BossHelperTimeDelayPatch,
		show: true
	},
	lockMaxTimeImprovementPatch:
	{
		label:	"Lock Enemy Group Maximum Time Improvement Patch",
		text:		"This patch will improve the maximum " +
						"amount of frames all locks of the type " +
						"'Lock Enemy Group' will hold. By " +
						"default, most of the locks hold for at " +
						"least 7200 frames, which is 2 minutes, " +
						"this patch modifies most of the locks " +
						"to hold 2400 frames, which is 40 " +
						"seconds. There are a few cases that " +
						"will hold more or less than 40 seconds. " +
						"Apply this patch after making all the " +
						"changes you want so another patch " +
						"doesn't override the changes made by " +
						"this one. It is used by the Seed " +
						"Randomizer.",
		patch: lockMaxTimeImprovementPatch,
		show: true
	},
	andoreColorImprovementPatch:
	{
		label:	"Andore Color Improvement Patch",
		text:		"All Andore Sub Bosses use a pallete that " +
						"is loaded in the same position as the " +
						"palletes used by the fat enemies. If they " +
						"are placed outside the Ring, they will use " +
						"the pallete of the fat enemies and it is not " +
						"a good match, resulting in a bugged Andore. " +
						"This patches forces those Andores to use " +
						"other palletes, most from Bred Type enemies, " +
						"which are a better match. This patch is used " +
						"by the Level Editor and the Seed Randomizer.",
		patch: andoreColorImprovementPatch,
		show: true
	},
	guyColorImprovementPatch:
	{
		label:	"Guy Color Improvement Patch",
		text:		"Most of the palletes used by Guy palletes in " +
						"Final Fight 30th Anniversary Edition has a " + 
						"brown color not matching the color of his " + 
						"boots. I think it was done like that because " + 
						"that same color is used on his forehead near " +
						"his hair and other palces near his skin, which " + 
						"is weird to have a color that is not beige or " + 
						"brown, but it I think it is even weirder if " + 
						"he has a blue or green or whatever different " + 
						"color costume with a massive brown in the middle " + 
						"of his boots. So this patch improves the color " +
						"of his boots and the places it also affects, and " + 
						"for me it looks better than the default palletes.",
		patch: guyColorImprovementPatch,
		show: true
	},
	playerHealthPatch:
	{
		label:	"Player Health Patch",
		text:		"This patch increases the player's health " + 
						"from 144 to 288. This patch is used by " +
						"the Seed Randomizer and the Player " +
						"Health Editor.",
		patch: playerHealthPatch,
		show: true
	},
	randomizerTextPatch:
	{
		label:	"Randomizer Title Screen Patch",
		text:		"Title screen text patch for the Seed " +
						"Randomizer. Used by the Seed Randomizer.",
		patch: randomizerTextPatch,
		show: false
	},
	levelEditorTextPatch:
	{
		label:	"Level Editor Title Screen Patch",
		text:		"Title screen text patch for the Level " +
						"Editor. Used by the Level Editor",
		patch: levelEditorTextPatch,
		show: false
	},
	defaultTextPatch:
	{
		label:	"Default Title Screen Patch",
		text:		"Title screen text patch for anything " +
						"else besides the Seed Randomizer and " +
						"the Level Editor. Used if no text " +
						"was applied.",
		patch: defaultTextPatch,
		show: false
	}
}


export default patchMap;