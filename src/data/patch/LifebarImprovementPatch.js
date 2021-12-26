const patch1 =
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Code that better handle lifebars and their progress.
		"482048":
		[
			"41", "48", "41", "42", "41", "48", "FC", "82",
			"91", "00", "01", "2C", "41", "42", "41", "48",
			"49", "E2", "46", "48", "06", "34", "4A", "E6",
			"42", "D2", "06", "34", "46", "42", "46", "48",
			"46", "06", "81", "01", "F9", "4E", "0D", "00",
			"26", "64"
		]
	}
}

const patch2 =
{
	type: "overwrite",
	filename: "ff-22m.7h",
	byteFormat: "hex",
	data:
	{
		// Instruction that redirects the execution to where the
		// new lifebars are drawn.
		"353304":
		[
			"F9", "4E", "07", "00", "00", "5B", "71", "4E",
			"71", "4E", "71", "4E", "71", "4E"
		]
	}
}

const lifebarImprovementPatch =
{
	patch1: patch1,
	patch2: patch2
}


export default lifebarImprovementPatch;