const editorManagerData = 
{
	romTypeMap:
	{
		fbneo:
		{
			label: "FBNeo",
			converterKey: "hbMameFBNeoMap" 
		},
		hbmame:
		{
			label: "HBMame",
			converterKey: "fbneoHBMameMap" 
		}
	},
	fbneoHBMameMap:
	{
		"ff-22m.7h": "ff-22mae.7h",
		"ff-23m.8h": "ff-23mae.8h"
	},
	hbMameFBNeoMap:
	{
		"ff-22mae.7h": "ff-22m.7h",
		"ff-23mae.8h": "ff-23m.8h"
	},
	toolTextCheckBytes:
	[
		"68", "00", "74", "74", "73", "70", "2F", "3A",
		"67", "2F", "74", "69", "75", "68", "2E", "62",
		"6F", "63", "2F", "6D", "61", "47", "65", "6D",
		"61", "48", "6B", "63", "61", "46", "2F", "6E",
		"66", "66", "65", "61", "00", "65"
	],
}


export default editorManagerData;