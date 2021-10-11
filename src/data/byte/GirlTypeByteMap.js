const girlTypeByteMap =
{
	roxy: [											// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "00", "00", "RR", "RR", "00", "FF"],

	roxyCrouch: [								// Crouch 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "02", "00", "RR", "RR", "00", "FF"],

	roxyFrontflipLeft: [				// Frontflip Left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "06", "00", "RR", "RR", "00", "FF"],
	roxyFrontflipRight: [				// Frontflip Right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "04", "00", "RR", "RR", "00", "FF"],

	roxyFalling: [							// Falling
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "08", "00", "RR", "RR", "00", "FF"],



	poison: [											// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "00", "01", "RR", "RR", "00", "FF"],

	poisonCrouch: [								// Crouch 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "02", "01", "RR", "RR", "00", "FF"],

	poisonFrontflipLeft: [				// Frontflip Left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "04", "01", "RR", "RR", "00", "FF"],
	poisonFrontflipRight: [				// Frontflip Right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "06", "01", "RR", "RR", "00", "FF"],

	poisonFalling: [							// Falling
			"RR", "RR", "RR", "RR", "RR", "RR",
			"06", "02", "08", "01", "RR", "RR", "00", "FF"]
}


export default girlTypeByteMap;