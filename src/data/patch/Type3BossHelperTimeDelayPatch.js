const type3BossHelperTimeDelayPatch = 
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// damnd
		"485048": ["01", "00"],
		"485406": ["01", "00"],

		// ediE
		"493018": ["68", "01"],
		"493372": ["68", "01"],
		"493726": ["68", "01"],

		// Abigail
		// "506394": ["68", "01"],
		"506750": ["68", "01"],
		"507108": ["68", "01"],

		// belger
		// "522660": ["68", "01"],
		"523012": ["68", "01"],
		"523372": ["68", "01"]
	}
}


export default type3BossHelperTimeDelayPatch;