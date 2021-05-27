const originalBossHelperTimeDelayPatch = 
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
    "493018": ["1C", "02"],
    "493372": ["E0", "01"],
    "493726": ["F0", "00"],

    // Abigail
    "506394": ["1C", "02"],
    "506750": ["E0", "01"],
    "507108": ["F0", "00"],

    // belger
    "522660": ["58", "02"],
    "523012": ["1C", "02"],
    "523372": ["68", "01"]
  }
}


export default originalBossHelperTimeDelayPatch;