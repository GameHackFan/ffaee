# FFAEE - Final Fight Anniversary Edition Editor (Arcade)
An editor for the game Final Fight Anniversary Edition (Arcade).
<br/><br/>

You can access the editor [here](https://gamehackfan.github.io/ffaee/).
<br/><br/>

Version 0.8 Changes:
- Created FeaturesAndFixesPatch1, See changes A to C.
- Change A: It fixes P1 not being allowed to pick the same character selected by P2 mid game.
- Change B: Fixed Holly Wood and El Gado immortal bug.
- Change C: Fixed Rolento immortal bug.
- Improved the Seed Randomizer, see changes D to F.
- Change D: Added 2 Random Profiles, Kind and Weak, they are easier than Easy.
- Change E: Added a Custom Random Profile specific for customizations. It was possible to customize before, but now it is better, but you can't customize the default profiles anymore.
- Change F: For customized profile, you can now inform the minimum and maximum amount, it works
just like the default profiles, based on minimum and maximum amount.
- Renamed PlayerHealthEditor to HealthEditor and activated it. For now, it can only edit the HP of players.
- Created FeaturesAndFixesPatch2, it fixes Haggar's dynamite scene.
- Updated all title screen text patches. They now support more characters and they support the inclusion of a hack author, except the randomizer text.
- Added a hack author field to the Edtior Manager Window.
- Fixed Empty Objects, their byte was wrong and they were having Edi E.'s bullet inside instead.
- Fixed a bug that was causing the randomizer to invert the order of enemies in a few enemy groups, which was forcing several enemies to spawn together in buggy way.
- Forced the level editor and the randomizer to apply the patches FeaturesAndFixesPatch1 and 2.
- Changed the editor's appearance.
- Minor changes.
- Minor fixes.

See all changes made [here](https://github.com/GameHackFan/ffaee/blob/main/changelog).
<br/><br/>

Known Bugs:
- If Haggar grabs Axl or Slash and the other player hits them in a frame they will block, they will get stuck in air for a few seconds, they also might fall on top of barrels (bug present in the original game).
- Roxy and Poison sometimes get stuck in a crouch animation and they can't be hit (bug present in the original game).
- It is possible to kill the last boss (Belger) before he goes to the corner, which leads to a bugged animation of him falling through the window (bug present in the original game).
<br/><br/>
