export const guyAndCodyThrowScoreFixPatch = 
{
  priority: 18,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Fixes Guy and Cody Throw Score
    "53012":
    [
      "3C", "30", "0D", "00", "F9", "4E", "0D", "00",
      "4E", "9C"
    ]
  }
}