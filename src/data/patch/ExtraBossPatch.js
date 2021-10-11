const extraBossPatch = 
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Allows to add more than one Abigail.
		// Change the 3 groups loop and make it 2 instead.
		"506378":
		[
			"00", "80", "80", "22", "20", "1C", "00", "00",
			"00", "00", "00", "00", "07", "00", "6E", "BB"
		],

		"506726":
		[
			"EE", "DD", "4C", "35", "42", "39", "DD", "EE",
			"00", "80", "80", "22", "90", "7E", "05", "00",
			"00", "00", "00", "00", "07", "00", "D6", "BC",
			"F0", "00"
		],

		"507442": ["0A", "80", "04", "80", "07", "00", "70", "BB"],
		// Allows to add more than one Abigail.


		// Allows to add more than one Belger
		// Change the 3 groups loop and make it 2 instead.
		"522644":
		[
			"00", "80", "40", "32", "20", "1C", "01", "00",
			"00", "00", "00", "00", "07", "00", "F4", "FA"
		],

		"522988":
		[
			"EE", "DD", "4C", "36", "42", "39", "DD", "EE",
			"00", "80", "40", "32", "20", "1C", "01", "00",
			"00", "00", "00", "00", "07", "00", "5E", "FC"
		],

		"523714": ["0A", "80", "04", "80", "07", "00", "F6", "FA"]
		// Allows to add more than one Belger
	}
}


export default extraBossPatch;