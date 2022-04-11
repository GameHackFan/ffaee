const freightTypeByteMap =
{
	freightBarbecue: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "00", "01", "00", "01", "00", "FF"],
		
	freightSteak: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "01", "01", "00", "01", "00", "FF"],
		
	freightChicken: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "02", "01", "00", "01", "00", "FF"],
		
	freightHamburger: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "03", "01", "00", "01", "00", "FF"],
		
	freightHotdog: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "04", "01", "00", "01", "00", "FF"],
		
	freightPizza: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "05", "01", "00", "01", "00", "FF"],
		
	freightCurry: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "06", "01", "00", "01", "00", "FF"],
		
	freightSushi: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "07", "01", "00", "01", "00", "FF"],
		
	freightBanana: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "08", "01", "00", "01", "00", "FF"],
		
	freightPineapple: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "09", "01", "00", "01", "00", "FF"],
		
	freightApple: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0A", "01", "00", "01", "00", "FF"],
		
	freightOrange: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0B", "01", "00", "01", "00", "FF"],
		
	freightGrape: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0C", "01", "00", "01", "00", "FF"],
		
	freightSoftDrink1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0D", "01", "00", "01", "00", "FF"],
		
	freightSoftDrink2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0E", "01", "00", "01", "00", "FF"],
		
	freightBeer1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "0F", "01", "00", "01", "00", "FF"],
		
	freightBeer2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "10", "01", "00", "01", "00", "FF"],
		
	freightWhisky: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "11", "01", "00", "01", "00", "FF"],
		
	freightBeer3: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "12", "01", "00", "01", "00", "FF"],
		
	freightGum1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "13", "01", "00", "01", "00", "FF"],
		
	freightDiamond: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "14", "01", "00", "01", "00", "FF"],
		
	freightGoldBar: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "15", "01", "00", "01", "00", "FF"],
		
	freightRuby: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "16", "01", "00", "01", "00", "FF"],
		
	freightEmerald: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "17", "01", "00", "01", "00", "FF"],
		
	freightPearl: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "18", "01", "00", "01", "00", "FF"],
		
	freightTopaz: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "19", "01", "00", "01", "00", "FF"],
		
	freightNecklace: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1A", "01", "00", "01", "00", "FF"],
		
	freightWatch: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1B", "01", "00", "01", "00", "FF"],
		
	freightDollar: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1C", "01", "00", "01", "00", "FF"],
		
	freightYen: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1D", "01", "00", "01", "00", "FF"],
		
	freightYenCoin: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1E", "01", "00", "01", "00", "FF"],
		
	freightRadio: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "1F", "01", "00", "01", "00", "FF"],
		
	freightNapkin: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "20", "01", "00", "01", "00", "FF"],
		
	freightHat: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "21", "01", "00", "01", "00", "FF"],
								
	freightHammer: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "22", "01", "00", "01", "00", "FF"],
		
	freightKnife: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "24", "01", "00", "01", "00", "FF"],
		
	freightMuramasa: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "25", "01", "00", "01", "00", "FF"],
		
	freightPipe: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "26", "01", "00", "01", "00", "FF"],
		
	freightEmpty: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "FF", "01", "00", "01", "00", "FF"],			// "04", "0A", "27", "01", 
		
	freightRandom1: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "80", "01", "00", "01", "00", "FF"],
		
	freightRandom2: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "81", "01", "00", "01", "00", "FF"],
		
	freightRandom3: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "82", "01", "00", "01", "00", "FF"],
		
	freightRandom4: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "83", "01", "00", "01", "00", "FF"],
		
	freightRandom5: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "85", "01", "00", "01", "00", "FF"],
		
	freightRandom6: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "86", "01", "00", "01", "00", "FF"],
		
	freightRandom7: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "87", "01", "00", "01", "00", "FF"],
		
	freightRandom8: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "88", "01", "00", "01", "00", "FF"],
		
	freightRandom9: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "89", "01", "00", "01", "00", "FF"],
		
	freightRandom10: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "8A", "01", "00", "01", "00", "FF"],
		
	freightRandom11: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "8C", "01", "00", "01", "00", "FF"],
		
	freightRandom12: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "8D", "01", "00", "01", "00", "FF"],
		
	freightRandom13: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "8E", "01", "00", "01", "00", "FF"],
		
	freightRandom14: [
			"RR", "RR", "RR", "RR", "RR", "RR",
			"04", "0A", "8F", "01", "00", "01", "00", "FF"]
}


export default freightTypeByteMap;