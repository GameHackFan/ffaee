const defaultTextPatch =
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	authorByteIndex: 482984,
	authorSize: 20,
	data:
	{
		// Instruction that redirects the execution to where the
		// extra texts are being printed in the screen.
		"6342": ["F9", "4E", "07", "00", "00", "5E"],

		// Change the position of the Push Start Button text.
		"420556": ["17"],


		// Code that prints the extra texts used by the randomizer.
		"482816":
		[
			"3C", "30", "00", "00", "F9", "43", "07", "00",
			"38", "5E", "B8", "4E", "64", "12", "3C", "30",
			"02", "00", "F9", "43", "07", "00", "38", "5E",
			"B8", "4E", "64", "12", "3C", "30", "04", "00",
			"F9", "43", "07", "00", "38", "5E", "B8", "4E",
			"64", "12", "F9", "41", "90", "00", "F0", "96",
			"F8", "4E", "CC", "18", "FF", "FF", "FF", "FF",
			"08", "00", "38", "00", "68", "00", "FF", "FF"
		],

		// Tool link text
		"482880":
		[
			"19", "0E", "68", "00", "74", "74", "73", "70",
			"2F", "3A", "67", "2F", "74", "69", "75", "68",
			"2E", "62", "6F", "63", "2F", "6D", "61", "47",
			"65", "6D", "61", "48", "6B", "63", "61", "46",
			"2F", "6E", "66", "66", "65", "61", "00", "65"
		],

		// Default and version text
		"482928":
		[
			"1A", "11", "52", "00", "4D", "4F", "4D", "20",
			"64", "6F", "66", "69", "65", "69", "20", "64",
			"79", "42", "54", "20", "65", "68", "55", "20",
			"65", "73", "20", "72", "76", "20", "2E", "30",
			"20", "38", "00", "00", "FF", "FF", "FF", "FF"
		],

		// Hack author text
		"482976":
		[
			"1B", "0F", "48", "00", "63", "61", "20", "6B",
			"75", "41", "68", "74", "72", "6F", "20", "3A",
			"2A", "2A", "2A", "2A", "2A", "2A", "2A", "2A",
			"2A", "2A", "2A", "2A", "2A", "2A", "2A", "2A",
			"2A", "2A", "2A", "2A", "00", "00", "FF", "FF"
		]
	}
}


export default defaultTextPatch;