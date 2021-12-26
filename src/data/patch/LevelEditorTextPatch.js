const levelEditorTextPatch =
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Instruction that redirects the execution to where the
		// extra texts are being printed in the screen.
		"6342": ["F9", "4E", "07", "00", "00", "5E"],

		// Change the position of the Push Start Button text.
		"420556": ["17"],


		// Code that prints the extra texts used by the level editor.
		"482816":
		[
			"3C", "30", "00", "00", "F9", "43", "07", "00",
			"2C", "5E", "B8", "4E", "64", "12", "3C", "30",
			"02", "00", "F9", "43", "07", "00", "2C", "5E",
			"B8", "4E", "64", "12", "F9", "41", "90", "00",
			"F0", "96", "F8", "4E", "CC", "18", "FF", "FF",
			"FF", "FF", "FF", "FF", "04", "00", "30", "00",
			"19", "0E", "68", "00", "74", "74", "73", "70",
			"2F", "3A", "67", "2F", "74", "69", "75", "68",
			"2E", "62", "6F", "63", "2F", "6D", "61", "47",
			"65", "6D", "61", "48", "6B", "63", "61", "46",
			"2F", "6E", "66", "66", "65", "61", "00", "65",
			"FF", "FF", "FF", "FF", "1A", "0C", "52", "00",
			"4D", "4F", "43", "20", "73", "75", "6F", "74",
			"69", "6D", "65", "7A", "20", "64", "79", "62",
			"74", "20", "65", "68", "4C", "20", "76", "65",
			"6C", "65", "45", "20", "69", "64", "6F", "74",
			"20", "72", "76", "20", "2E", "30", "00", "36",
			"FF", "FF", "FF", "FF", "FF", "FF", "FF", "FF"
		]
	}
}


export default levelEditorTextPatch;