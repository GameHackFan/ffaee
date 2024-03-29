export const randomizerTextPatch =
{
  priority: 50,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  levelByteIndex: 482942,
  levelSize: 10,
  seedByteIndex: 482968,
  seedSize: 20,
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
      "08", "00", "38", "00", "58", "00", "FF", "FF"
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

    // Randomizer level and version text
    "482928":
    [
      "1A", "13", "52", "00", "6E", "61", "6F", "64",
      "69", "6D", "65", "7A", "20", "72", "2A", "2A",
      "2A", "2A", "2A", "2A", "2A", "2A", "2A", "2A",
      "76", "20", "2E", "31", "00", "30", "FF", "FF"
    ],

    // Seed text
    "482960":
    [
      "1B", "13", "53", "00", "65", "65", "20", "64",
      "2A", "2A", "2A", "2A", "2A", "2A", "2A", "2A",
      "2A", "2A", "2A", "2A", "2A", "2A", "2A", "2A",
      "2A", "2A", "2A", "2A", "00", "00", "FF", "FF",
      "FF", "FF", "FF", "FF", "FF", "FF", "FF", "FF",
      "FF", "FF", "FF", "FF", "FF", "FF", "FF", "FF",
      "FF", "FF", "FF", "FF", "FF", "FF", "FF", "FF"
    ]
  }
}