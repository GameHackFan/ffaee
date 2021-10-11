# FFAEE - Final Fight Anniversary Edition Editor (Arcade)
An editor for the game Final Fight Anniversary Edition (Arcade).
<br/><br/>

You can access the editor [here](https://gamehackfan.github.io/ffaee/).
<br/><br/>

Version 0.2 Changes:
- Created an assembly code to handle the Andore Sub Bosses color pallete.
- Created the AndoreColorImprovementPatch.
- G. Andore now uses Jake's color pallete, U. Andores uses Bred's color pallete, F. Andore uses an unknown pallete (Haggar's ?).
- Forced the Level Editor and the Seed Randomizer to apply the AndoreColorImprovementPatch.
- Renamed NormalRandomProfile to MidRandomProfile. Mid has less than 5 letters and fits better in the title screen.
- Renamed SavageRandomProfile to WildRandomProfile. Wild has less than 5 letters and fits better in the title screen.
- Minor changes on how much enemies spawn on Easy, Mid and Hard.
- Created an assembly code to handle the tool texts in the title screen.
- Created a title screen patch for the Level Editor.
- Created a title screen patch for the Seed Randomizer.
- With the color improvement, now U. Andore can spawn on Rolento's elevator, but G. Andore can't.
- Forced the Level Editor to apply the new text patch.
- Forced the Seed Randomizer to edit the and apply the new text patch.
- Added the new patches to the PatchMap.
- Deleted EditorTextPatch (not needed anymore).
- Added a simple check to see if it is a valid ROM when cloning the ROM.
- Minor changes.
- Minor fixes.

See all changes made [here](https://github.com/GameHackFan/ffaee/blob/main/changelog).
<br/><br/>

Known Bugs:
- Enemy spawning sometimes bugs for some reason, I don't know why (probably overloaded?).
- Close to the end of the 2nd Level, enemies delay to spawn (I have no idea why).
- Close to the end of the 3rd Level, enemies delay to spawn (maybe it is because of the boss?).
- Molotov enemies behaves weirdly sometimes.
<br/><br/>
