export const editorManagerData = 
{
  romTypeMap:
  {
    fbneo:
    {
      key: "fbneo",
      label: "FBNeo",
      converterKey: "hbMameFBNeoMap" 
    },
    hbmame:
    {
      key: "hbmame",
      label: "HBMame",
      converterKey: "fbneoHBMameMap" 
    }
  },
  fbneoHBMameMap:
  {
    "ff-22m.7h": "c07ae.p5",
    "ff-23m.8h": "c07ae.p1"
  },
  hbMameFBNeoMap:
  {
    "ff-22mae.7h": "ff-22m.7h",   // Older Versions of HBMame
    "ff-23mae.8h": "ff-23m.8h",   // Older Versions of HBMame
    "c07ae.p5": "ff-22m.7h",
    "c07ae.p1": "ff-23m.8h"
  }
}