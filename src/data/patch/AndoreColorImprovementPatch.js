const andoreColorImprovementPatch = 
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Instruction that redirects the execution to where the
		// new color pallete ID code is.
		"183546": ["F9", "4E", "07", "00", "00", "5C"],


		// Code that handles the color pallete ID for all enemies.
		// If the enemy is an Andore Type, it will store a specific
		// value inside the memory position, if not it will execute
		// the same code as the original game.
		"482304":
		[
			"2E", "0C", "03", "00", "13", "00", "00", "66",
			"20", "00", "0B", "20", "00", "72", "F9", "47",
			"07", "00", "3A", "5C", "2E", "12", "14", "00",
			"C1", "D7", "53", "1D", "2F", "00", "40", "26",
			"00", "70", "F9", "4E", "02", "00", "06", "CD",
			"00", "70", "2E", "10", "14", "00", "F9", "4E",
			"02", "00", "00", "DC", "FF", "FF", "FF", "FF",
			"FF", "FF", "0D", "00", "0E", "1A", "00", "1B"
		]
	}
}


export default andoreColorImprovementPatch;