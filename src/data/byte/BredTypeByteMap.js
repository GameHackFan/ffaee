const bredTypeByteMap =
{
	bred: [										// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "00", "00", "RR", "RR", "00", "FF"],
	bredIdle: [								// Leaning on a wall
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "02", "00", "RR", "RR", "00", "FF"],
	bredWalkingOut: [					// Walking out of a door
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "07", "00", "RR", "RR", "00", "FF"],

	bredSitting1: [						// Sitting on a bench
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "01", "00", "RR", "RR", "00", "FF"],
	bredSitting2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "08", "00", "RR", "RR", "00", "FF"],
	
	bredCrouch1: [						// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR", 
			"00", "02", "03", "00", "RR", "RR", "00", "FF"],
	bredCrouch2: [						// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "04", "00", "RR", "RR", "00", "FF"],
	bredCrouch3: [						// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "05", "00", "RR", "RR", "00", "FF"],
	bredCrouch4: [						// Looking left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "06", "00", "RR", "RR", "00", "FF"],
	
	bredSittingToFall: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0A", "00", "RR", "RR", "00", "FF"],

	bredCrouchToFall1: [			// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0B", "00", "RR", "RR", "00", "FF"],
	bredCrouchToFall2: [			// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0C", "00", "RR", "RR", "00", "FF"],
	bredCrouchToFall3: [			// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0D", "00", "RR", "RR", "00", "FF"],
	bredCrouchToFall4: [			// Looking left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0E", "00", "RR", "RR", "00", "FF"],



	dug: [										// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "00", "01", "RR", "RR", "00", "FF"],
	dugIdle: [								// Leaning on a wall
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "02", "01", "RR", "RR", "00", "FF"],
	dugWalkingOut: [					// Walking out of a door
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "07", "01", "RR", "RR", "00", "FF"],

	dugSitting1: [						// Sitting on a bench
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "01", "01", "RR", "RR", "00", "FF"],
	dugSitting2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "08", "01", "RR", "RR", "00", "FF"],
	
	dugCrouch1: [							// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR", 
			"00", "02", "03", "01", "RR", "RR", "00", "FF"],
	dugCrouch2: [							// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "04", "01", "RR", "RR", "00", "FF"],
	dugCrouch3: [							// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "05", "01", "RR", "RR", "00", "FF"],
	dugCrouch4: [							// Looking left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "06", "01", "RR", "RR", "00", "FF"],
	
	dugSittingToFall: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0A", "01", "RR", "RR", "00", "FF"],

	dugCrouchToFall1: [				// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0B", "01", "RR", "RR", "00", "FF"],
	dugCrouchToFall2: [				// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0C", "01", "RR", "RR", "00", "FF"],
	dugCrouchToFall3: [				// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0D", "01", "RR", "RR", "00", "FF"],
	dugCrouchToFall4: [				// Looking left     
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0E", "01", "RR", "RR", "00", "FF"],



	jake: [										// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "00", "02", "RR", "RR", "00", "FF"],
	jakeIdle: [								// Leaning on a wall
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "02", "02", "RR", "RR", "00", "FF"],
	jakeWalkingOut: [					// Walking out of a door
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "07", "02", "RR", "RR", "00", "FF"],

	jakeSitting1: [						// Sitting on a bench
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "01", "02", "RR", "RR", "00", "FF"],
	jakeSitting2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "08", "02", "RR", "RR", "00", "FF"],
	
	jakeCrouch1: [						// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR", 
			"00", "02", "03", "02", "RR", "RR", "00", "FF"],
	jakeCrouch2: [						// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "04", "02", "RR", "RR", "00", "FF"],
	jakeCrouch3: [						// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "05", "02", "RR", "RR", "00", "FF"],
	jakeCrouch4: [						// Looking left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "06", "02", "RR", "RR", "00", "FF"],
	
	jakeSittingToFall: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0A", "02", "RR", "RR", "00", "FF"],

	jakeCrouchToFall1: [			// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0B", "02", "RR", "RR", "00", "FF"],
	jakeCrouchToFall2: [			// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0C", "02", "RR", "RR", "00", "FF"],
	jakeCrouchToFall3: [			// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0D", "02", "RR", "RR", "00", "FF"],
	jakeCrouchToFall4: [			// Looking left     
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0E", "02", "RR", "RR", "00", "FF"],



	simons: [									// Default
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "00", "03", "RR", "RR", "00", "FF"],
	simonsIdle: [							// Leaning on a wall
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "02", "03", "RR", "RR", "00", "FF"],
	simonsWalkingOut: [				// Walking out of a door
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "07", "03", "RR", "RR", "00", "FF"],

	simonsSitting1: [					// Sitting on a bench
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "01", "03", "RR", "RR", "00", "FF"],
	simonsSitting2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "08", "03", "RR", "RR", "00", "FF"],
	
	simonsCrouch1: [					// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR", 
			"00", "02", "03", "03", "RR", "RR", "00", "FF"],
	simonsCrouch2: [					// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "04", "03", "RR", "RR", "00", "FF"],
	simonsCrouch3: [					// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "05", "03", "RR", "RR", "00", "FF"],
	simonsCrouch4: [					// Looking left
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "06", "03", "RR", "RR", "00", "FF"],
	
	simonsSittingToFall: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0A", "03", "00", "00", "00", "FF"],

	simonsCrouchToFall1: [		// Back towards the screen. 
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0B", "03", "RR", "RR", "00", "FF"],
	simonsCrouchToFall2: [		// Looking right
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0C", "03", "RR", "RR", "00", "FF"],
	simonsCrouchToFall3: [		// Face towards the screen.
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0D", "03", "RR", "RR", "00", "FF"],
	simonsCrouchToFall4: [		// Looking left     
			"RR", "RR", "RR", "RR", "RR", "RR",
			"00", "02", "0E", "03", "RR", "RR", "00", "FF"]
}


export default bredTypeByteMap;