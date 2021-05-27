import romService from "./ROMService";

import patchMap from "../data/patch/PatchMap";


class PlayerHealthService
{
  constructor()
  {
    this.playerHealth = 144;
  }

  createPlayerHealthPatch = (playerHealth) =>
  {
    let patch = {};
    patch.type = "overwrite";
    patch.filename = "ff-23m.8h";
    patch.byteFormat = "hex";
    patch.data = {};
    let basePatch = patchMap.playerHealthPatch.patch;
    let keys = Object.keys(basePatch.data);
    let fixedHealth = parseInt(playerHealth);
    fixedHealth = fixedHealth ? fixedHealth : 0;
    fixedHealth = Math.max(fixedHealth, 1);
    fixedHealth = Math.min(fixedHealth, 65535);
    let hexBytes = romService.convertNumberToROMBytes(
        fixedHealth, 2)

    for(let i = 0; i < keys.length; i++)
    {
      let index = keys[i];
      let baseBytes = basePatch.data[keys[i]];
      let bytes = []

      for(let j = 0; j < baseBytes.length; j += 2)
        bytes.push(hexBytes[0], hexBytes[1]);

      patch.data[index] = bytes;
    }

    return patch;
  }

  getPlayerHealth = () =>
  {
    return this.playerHealth;
  }

  setPlayerHealth = (value) =>
  {
    this.playerHealth = value;
  }

  applyPlayerHealth = () =>
  {
    romService.applyPatch(
      this.createPlayerHealthPatch(
      this.playerHealth));
  }
}


const playerHealthService = new PlayerHealthService();
export default playerHealthService;