# FFAEE - Final Fight Anniversary Edition Editor (Arcade)
An editor for the game Final Fight Anniversary Edition (Arcade).
<br/><br/>

You can access the editor [here](https://gamehackfan.github.io/ffaee/).
<br/><br/>

Version 0.6 Changes:
- Updated PlayerHealthPatch, it better handle the increase of the HP of the players.
- Created LifebarImprovementPatch. It handles better the lifebar progress.
- Created EnemyHealthImprovementPatch. It increases by 300 the HP of bosses, by 100 enemies with less than 160 HP and by 70 all the others.
- Created LockImprovementPatch. Locks now instead of checking if all the enemies from it were killed to release, it now checks if all the enemies were read by the game and if the enemy list is empty, improving massively the way it works, now you have to kill every enemy after you reach a lock, you can only leave enemies behind if the time of the lock expires.
- Updated LockMaxTimeImprovementPatch. Max time increased from 40 seconds to 4 minutes.
- Added the new patches to the PatchMap.
- Forced the Randomizer to apply all the new and updated patches.
- Forced the Level Editor to apply the LifebarImprovementPatch and the LockImprovementPatch.
- Minor changes.
- Minor fixes.

See all changes made [here](https://github.com/GameHackFan/ffaee/blob/main/changelog).
<br/><br/>

Known Bugs:
- Close to the end of the 2nd Level, enemies delay to spawn (I have no idea why).
- Close to the end of the 3rd Level, enemies delay to spawn (maybe it is because of the boss?).
- Molotov enemies behave weirdly sometimes.
- If one player grabs HollyWood, El Gado or Rolento when they are one hit to die and the other player kills them using the Special Attack, they become immortal. You can unbug them if you die once and immediately goes for a grab, you can't hit them not even a single time. (bug present in the original game).
- If Haggar grabs Axl or Slash and the other player hits them in a frame they will block, they will
get stuck in air for a few seconds, they also might fall on top of barrels (bug present in the original game).
- Roxy and Poison sometimes get stuck in a crouch animation and they can't be hit (bug present in the original game).
- It is possible to kill the last boss (Belger) with haggar before he goes to the corner, which leads to a bugged animation of him falling through the window (bug present in the original game).
<br/><br/>
