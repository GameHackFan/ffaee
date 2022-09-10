export const featuresAndFixesPatch1 = 
{
  priority: 3,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Remove the character check for P1, allowing 
    // they to select any character they want.
    "88796": ["75", "4E", "71", "4E", "71", "4E"],



    // Instruction that redirects the execution to where 
    // the new code that handles Holly Wood / El Gado
    // posture ID after being knocked out.
    "220510": ["F9", "4E", "07", "00", "00", "5A"],

    // Code that checks if Holly Wood / El Gado is dead 
    // before setting his posture ID after being knocked 
    // out. It fixes the immortal bug.
    "481792":
    [
      "6E", "4A", "18", "00", "0A", "6C", "7C", "3D",
      "02", "04", "02", "00", "6E", "42", "04", "00",
      "6E", "2D", "0E", "00", "0A", "00", "F9", "4E",
      "03", "00", "64", "5D" 
    ],



    // Instruction that redirects the execution to where 
    // the new code that handles Rolento's posture ID 
    // after being knocked out.
    "301858": ["F9", "4E", "07", "00", "20", "5A"],

    // Code that checks if Rolento is dead before setting 
    // his posture ID after being knocked out. It fixes 
    // the immortal bug.
    "481824":
    [
      "6E", "4A", "18", "00", "0A", "6C", "7C", "3D",
      "02", "04", "02", "00", "6E", "42", "04", "00",
      "6E", "2D", "0E", "00", "0A", "00", "F9", "4E",
      "04", "00", "28", "9B"
    ]



    // NOTE: Old fix, it is inferior
    // Instruction that redirects the execution to where 
    // the new code that handles Holly Wood / El Gado
    // posture ID after being knocked out.
    // "224608": ["F9", "4E", "07", "00", "00", "5A"],

    // Code that checks if Holly Wood / El Gado is dead 
    // before setting his posture ID after being knocked 
    // out. It fixes the immortal bug.
    // "481792":
    // [
    //   "6E", "4A", "18", "00", "0C", "6C", "7C", "3D",
    //   "00", "04", "02", "00", "F9", "4E", "03", "00",
    //   "66", "6D", "7C", "1D", "06", "00", "03", "00",
    //   "F9", "4E", "03", "00", "66", "6D" 
    // ],


    // NOTE: Old fix, it is inferior
    // Instruction that redirects the execution to where 
    // the new code that handles Rolento's posture ID 
    // after being knocked out.
    // "307116": ["F9", "4E", "07", "00", "00", "5A"],

    // Code that checks if Rolento is dead before setting 
    // his posture ID after being knocked out. It fixes 
    // the immortal bug.
    // "481824":
    // [
    //   "6E", "4A", "18", "00", "0C", "6C", "7C", "3D",
    //   "00", "04", "02", "00", "F9", "4E", "04", "00",
    //   "B2", "AF", "7C", "1D", "06", "00", "03", "00",
    //   "F9", "4E", "04", "00", "B2", "AF"
    // ]
  }
}





export const featuresAndFixesPatch2 = 
{
  priority: 4,
  type: "overwrite",
  filename: "ff-22m.7h",
  byteFormat: "hex",
  data:
  {
    // Fixes Haggar's dynamite scene.
    "365582":
    [
      "2A", "10", "13", "00", "32", "67", "00", "08",
      "00", "00", "1E", "67", "7C", "35", "70", "00",
      "06", "00", "7C", "35", "A0", "00", "20", "00",
      "2A", "10", "E4", "FF", "3C", "B0", "02", "00",
      "2C", "66", "6A", "04", "10", "00", "F0", "FF",
      "24", "60", "7C", "35", "00", "01", "06", "00",
      "7C", "35", "30", "01", "20", "00", "16", "60",
      "7C", "35", "F0", "FF", "06", "00", "7C", "35",
      "20", "00", "20", "00", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E" 
    ],
  }
}