export const disableFriendlyFirePatch = 
{
  priority: 16,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Disable friendly fire for all players
    "30626": ["40", "60", "3E", "60", "3C", "60", "3A", "60"]
  }
}