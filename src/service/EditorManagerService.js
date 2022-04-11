import romService from "./ROMService";

import editorManagerData from "../data/replace/EditorManagerData";
import patchMap from "../data/patch/PatchMap";


class EditorManagerService
{
	convertAndSetRom = (rom) =>
	{
		this.convertROM(rom, editorManagerData.hbMameFBNeoMap);
		romService.setROM(rom);
	}

	generateROM = (converterKey, hackAuthor) =>
	{
		this.addDefaultTextIfNoText();
		romService.addHackAuthor(hackAuthor);
		let rom = romService.getGeneratedROM();
		let cm = editorManagerData[converterKey];

		if(cm)
			this.convertROM(rom, cm);

		return rom;
	}

	cloneROM = () =>
	{
		romService.cloneROM();
	}

	addDefaultTextIfNoText = () =>
	{
		let index = romService.indexOfBytes("ff-23m.8h",
				editorManagerData.toolTextCheckBytes, "hex");

		if(index < 0)
			romService.applyPatch(patchMap.defaultTextPatch.patch);
	}

	convertROM = (rom, converterMap) =>
	{
		Object.keys(converterMap).forEach((k) =>
		{
			if(rom[k])
			{
				rom[converterMap[k]] = rom[k];
				delete rom[k];
			}
		});
	}
}


const editorManagerService = new EditorManagerService();
export default editorManagerService;

