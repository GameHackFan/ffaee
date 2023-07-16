# FFAEE - Final Fight Anniversary Edition Editor (Arcade)
An editor for the game Final Fight Anniversary Edition (Arcade).
<br/><br/>

You can access the editor [here](https://gamehackfan.github.io/ffaee/).
<br/><br/>

Version 1.0 Change:
- Fixed Level Editor 4th Stage Elevator, scroll Y wasn't being shown.
- Created DisableFriendlyFirePatch, it disables the friendly fire.
- Created DisableAnyDropToTreasureConversionPatch, it disables any drop being converted to treasure.
- Created GuyAndCodyThrowScoreFixPatch, it fixes the amount of points guy and cody gets when throwing enemies.
- Forced the Seed Randomizer to apply the DisableFriendlyFirePatch, DisableAnyDropToTreasureConversionPatch and GuyAndCodyThrowScoreFixPatch patches.
- Forced the Level Editor to apply the GuyAndCodyThrowScoreFixPatch.
- Minor changes and fixes.

See all changes made [here](https://github.com/GameHackFan/ffaee/blob/main/changelog).
<br/><br/>

Known Bugs:
- If Haggar grabs Axl or Slash and the other player hits them in a frame they will block, they will get stuck in air for a few seconds, they also might fall on top of barrels (bug present in the original game).
- Roxy and Poison sometimes get stuck in a crouch animation and they can't be hit (bug present in the original game).
- If you kill an enemy with Haggar's Suplex or Pile Driver and an Andore stomp you at the correct time, the enemy might become invincible, [check](https://rumble.com/v2zsg4a-roxy-poison-immortal-bug.html) (bug present in the original game).
- It is possible to kill the last boss (Belger) before he goes to the corner, which leads to a bugged animation of him falling through the window (bug present in the original game).
<br/><br/>

NOTE: The CPS2 version of FFAE is already released, so I will leave this tool editing the CPS1 version and I will probably create a new project that will be a clone of this one and I will make the changes needed so it can edit the CPS2 version. Even thought I will keep the CPS1 editor live, it is very unlikely that I will make any updates to it, updates will be released only for the CPS2 editor.