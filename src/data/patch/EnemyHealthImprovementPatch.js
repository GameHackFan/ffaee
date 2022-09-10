export const enemyHealthImprovementPatch1 =
{
  priority: 8,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Removes the code that changes Belger's HP
    // after he is taken off his wheel chair.
    "329548": ["71", "4E", "71", "4E", "71", "4E", "71", "4E"],



    // Damnd
    // Instruction that redirects the execution to the
    // code that increases the HP
    "250908":
    [
      "B9", "4E", "07", "00", "6C", "5B", "71", "4E",
      "71", "4E", "71", "4E"
    ],

    // Sodom
    // Instruction that redirects the execution to the
    // code that increases the HP
    "265332":
    [
      "B9", "4E", "07", "00", "6C", "5B", "71", "4E",
      "71", "4E", "71", "4E"
    ],

    // Edi E.
    // Instruction that redirects the execution to the
    // code that increases the HP
    "286580":
    [
      "00", "32", "B9", "4E", "07", "00", "6C", "5B",
      "71", "4E", "71", "4E"
    ],

    // Abigail
    // Instruction that redirects the execution to the
    // code that increases the HP
    "310864":
    [
      "00", "32", "B9", "4E", "07", "00", "6C", "5B",
      "71", "4E", "71", "4E"
    ],

    // Belger
    // Instruction that redirects the execution to the
    // code that increases the HP
    "322096":
    [
      "00", "32", "B9", "4E", "07", "00", "6C", "5B",
      "71", "4E", "71", "4E"
    ],

    // Code that handles the increase of the character HP.
    "482128":
    [
      "2E", "0C", "04", "00", "12", "00", "18", "62",
      "12", "67", "7C", "B2", "A0", "00", "06", "65",
      "41", "06", "46", "00", "0A", "60", "41", "06",
      "64", "00", "04", "60", "41", "06", "2C", "01",
      "7C", "B2", "87", "04", "04", "63", "3C", "32",
      "87", "04", "41", "3D", "18", "00", "41", "3D",
      "1A", "00", "41", "3D", "1C", "00", "75", "4E"
    ]
  }
}

export const enemyHealthImprovementPatch2 =
{
  priority: 9,
  type: "overwrite",
  filename: "ff-22m.7h",
  byteFormat: "hex",
  data:
  {
    // Rolento
    // Instruction that redirects the execution to the
    // code that increases the HP
    "356070":
    [
      "B9", "4E", "07", "00", "6C", "5B", "71", "4E",
      "71", "4E", "71", "4E"
    ],

    // Instruction that redirects the execution to the
    // code that increases the HP, all enemies.
    "356298":
    [
      "B9", "4E", "07", "00", "50", "5B", "71", "4E",
      "71", "4E", "71", "4E"
    ]
  }
}