const bossImprovementPatch = 
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Instruction that redirects the execution to where the
		// spawn of the sub boss happens.
		"25104": ["F9", "4E", "07", "00", "20", "5D"],

		"482560":
		[
			// Spawn Routine Base Adress
			"BC", "00", "36", "00", "BC", "00", "56", "00",
			"BC", "00", "7E", "00", "BC", "00", "BC", "00",

			// Character HP
			"90", "01", "90", "01", "90", "01", "90", "01",
			"90", "01", "90", "01", "90", "01", "90", "01",

			// Spawn Rountine Caller
			"2B", "30", "08", "00", "FC", "C0", "02", "00",
			"F9", "4B", "07", "00", "00", "5D", "35", "34",
			"00", "00", "F5", "4E", "00", "20", 

			// Damnd
			"7C", "39", "00", "02", "02", "00", "7C", "39",
			"19", "00", "2E", "00", "7C", "39", "7E", "04",
			"3A", "00", "7C", "39", "9D", "05", "5E", "00",
			"7C", "39", "04", "00", "A4", "00", "40", "60",

			// Edi E.
			"7C", "39", "02", "02", "02", "00", "7C", "39",
			"1D", "00", "2E", "00", "2D", "0C", "03", "00",
			"BE", "00", "06", "66", "7C", "39", "11", "00",
			"2E", "00", "7C", "39", "BA", "88", "3A", "00",
			"7C", "39", "7D", "89", "5E", "00", "18", "60",

			// Abigail
			"7C", "39", "02", "02", "02", "00", "7C", "39",
			"10", "00", "2E", "00", "7C", "39", "F4", "E6",
			"3A", "00", "7C", "39", "2C", "E8", "5E", "00",

			// All
			"40", "06", "10", "00", "35", "34", "00", "00",
			"42", "39", "18", "00", "42", "39", "1A", "00",
			"42", "39", "1C", "00", "BC", "38", "01", "01",
			"3C", "34", "04", "00", "42", "39", "38", "00",
			"42", "39", "5C", "00", "7C", "39", "01", "00",
			"80", "00", 
			
			// End
			"F9", "4B", "FF", "FF", "00", "80", "2C", "34",
			"0A", "00", "6B", "19", "07", "00", "13", "00",
			"F9", "4E", "00", "00", "16", "62"
		]
	}
}


export default bossImprovementPatch;