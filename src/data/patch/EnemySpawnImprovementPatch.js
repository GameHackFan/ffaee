const enemySpawnImprovementPatch = 
{
	type: "overwrite",
	filename: "ff-23m.8h",
	byteFormat: "hex",
	data:
	{
		// Convert all validation code to NOP
		"15966":
		[
			"71", "4E", "71", "4E", "71", "4E", "71", "4E",
			"71", "4E", "71", "4E", "71", "4E", "71", "4E"
		]
	}
}


export default enemySpawnImprovementPatch;



// Enemies spawning are limited to 1F (31), so if more than
// that spawns, it would lead for more than half of the enemy
// types to stop spawning (Andore, Girl and Axl type are exceptions),
// when enemies dies, the counter also drops by 1, which sometimes
// could result in 0 being subtracted by 1 resulting in FF (255),
// which is checked as an unsigned value by the validation.
// Since this counter and validation is just way too stupid, all the
// validation code is removed by this patch.