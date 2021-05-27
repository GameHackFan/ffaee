import editorTextPatch from "./EditorTextPatch";

import levelExpansionPatch from
    "./LevelExpansionPatch";
import extraBossPatch from "./ExtraBossPatch";

import originalBossHelperTimeDelayPatch from
    "./OriginalBossHelperTimeDelayPatch";
import type1BossHelperTimeDelayPatch from
    "./Type1BossHelperTimeDelayPatch";
import type2BossHelperTimeDelayPatch from
    "./Type2BossHelperTimeDelayPatch";
import type3BossHelperTimeDelayPatch from
    "./Type3BossHelperTimeDelayPatch";

import lockMaxTimeImprovementPatch from
    "./LockMaxTimeImprovementPatch";

import playerHealthPatch from "./PlayerHealthPatch";


const patchMap = 
{
  levelExpansionPatch:
  {
    label: "Level Expansion Patch",
    text: "This patch will increase the amount of " +
          "bytes all levels support. It also sorts " +
          "the content of each level, making it " +
          "easier to understand. It is used by the " +
          "Level Editor and the Seed Randomizer.",
    patch: levelExpansionPatch,
    show: true
  },
  extraBossPatch:
  {
    label: "Extra Bosses Patch",
    text: "This patch will change all Abigail's " +
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
    label:
      "Original Boss Helper First Enemy Time Delay",
    text: "This patch will set the spawn delay " + 
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
    label: "Type 1 Boss Helper First Enemy Time Delay",
    text: "This patch will set the spawn delay " + 
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
    label: "Type 2 Boss Helper First Enemy Time Delay",
    text: "This patch will set the spawn delay " + 
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
    label: "Type 3 Boss Helper First Enemy Time Delay",
    text: "This patch will set the spawn delay " + 
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
    label: "Lock Enemy Group Maximum Time " +
        "Improvement Patch",
    text: "This patch will improve the maximum " +
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
  editorTextPatch:
  {
    label: "Editor Text Patch",
    text: "This patch adds the editor's project " +
          "link and version in the Title Screen. " +
          "It is used by the Level Editor and " +
          "the Seed Randomizer.",
    patch: editorTextPatch,
    show: false
  },
  playerHealthPatch:
  {
    label: "Player Health Patch",
    text: "This patch contains the indexes and the " + 
          "amount of bytes needed to edit the " +
          "players health. This patch is used by " +
          "the Seed Randomizer and the Player " +
          "Health Editor.",
    patch: playerHealthPatch,
    show: false
  }
}


export default patchMap;