export const lockImprovementPatch =
{
  priority: 13,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Instruction that redirects the execution to the
    // code handles the release of the lock.
    "23986":["F9", "4E", "07", "00", "A0", "5B"],



    // Code that checks if the lock should release or not.
    "482208":
    [
      "53", "0C", "FF", "7F", "0C", "65", "6D", "0C",
      "0D", "00", "10", "4F", "04", "66", "00", "70",
      "75", "4E", "01", "70", "75", "4E"
    ]
  }
}