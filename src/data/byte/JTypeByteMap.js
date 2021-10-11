const jTypeByteMap =
{
	j: [
		"RR", "RR", "RR", "RR", "RR", "RR", 
		"01", "02", "00", "00", "00", "00", "00", "FF"], 
	jIdle: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "03", "00", "00", "00", "00", "FF"], 
	jSitting: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "01", "00", "00", "00", "00", "FF"], 

	jCrouch: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "02", "00", "00", "00", "00", "FF"], 

	jIdleToFall1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "04", "00", "00", "00", "00", "FF"], 
	jIdleToFall2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "05", "00", "00", "00", "00", "FF"], 
	jIdleToFall3: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "0A", "00", "00", "00", "00", "FF"], 



	twoP: [
		"RR", "RR", "RR", "RR", "RR", "RR", 
		"01", "02", "00", "01", "00", "00", "00", "FF"], 
	twoPIdle: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "03", "01", "00", "00", "00", "FF"], 
	twoPSitting: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "01", "01", "00", "00", "00", "FF"], 

	twoPCrouch: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "02", "01", "00", "00", "00", "FF"], 

	twoPIdleToFall1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "04", "01", "00", "00", "00", "FF"], 
	twoPIdleToFall2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "05", "01", "00", "00", "00", "FF"], 
	twoPIdleToFall3: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"01", "02", "0A", "01", "00", "00", "00", "FF"]
}


export default jTypeByteMap;