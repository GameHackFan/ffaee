const type2BossHelperTimeDelayPatch = 
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
    "493018": ["2C", "01"],
    "493372": ["2C", "01"],
    "493726": ["2C", "01"],

    // Abigail
    // "506394": ["2C", "01"],
    "506750": ["2C", "01"],
    "507108": ["2C", "01"],

    // belger
    // "522660": ["2C", "01"],
    "523012": ["2C", "01"],
    "523372": ["2C", "01"]
  }
}


export default type2BossHelperTimeDelayPatch;