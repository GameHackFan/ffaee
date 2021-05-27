const foodTypeByteMap =
{
  barbecue: [     // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "00", "00", "01", "00", "FF"],
  steak: [        // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "01", "00", "01", "00", "FF"],
  chicken: [      // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "02", "00", "01", "00", "FF"],

  hamburger: [    // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "03", "00", "01", "00", "FF"],
  hotdog: [       // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "04", "00", "01", "00", "FF"],
  pizza: [        // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "05", "00", "01", "00", "FF"],
  curry: [        // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "06", "00", "01", "00", "FF"],
  sushi: [        // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "07", "00", "01", "00", "FF"],

  banana: [       // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "08", "00", "01", "00", "FF"],
  pineapple: [    // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "09", "00", "01", "00", "FF"],
  apple: [        // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0A", "00", "01", "00", "FF"],
  orange: [       // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0B", "00", "01", "00", "FF"],
  grapes: [       // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0C", "00", "01", "00", "FF"],

  softDrink1: [   // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0D", "00", "01", "00", "FF"],
  softDrink2: [   // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0E", "00", "01", "00", "FF"],
  beer1: [        // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0F", "00", "01", "00", "FF"],
  beer2: [        // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "10", "00", "01", "00", "FF"],
  whisky: [       // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "11", "00", "01", "00", "FF"],
  beer3: [        // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "12", "00", "01", "00", "FF"],
  gum1: [         // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "13", "00", "01", "00", "FF"],



  barbecueFalling: [    // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "00", "00", "02", "00", "FF"],
  steakFalling: [       // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "01", "00", "02", "00", "FF"],
  chickenFalling: [     // Good Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "02", "00", "02", "00", "FF"],

  hamburgerFalling: [   // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "03", "00", "02", "00", "FF"],
  hotdogFalling: [      // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "04", "00", "02", "00", "FF"],
  pizzaFalling: [       // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "05", "00", "02", "00", "FF"],
  curryFalling: [       // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "06", "00", "02", "00", "FF"],
  sushiFalling: [       // Average Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "07", "00", "02", "00", "FF"],

  bananaFalling: [      // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "08", "00", "02", "00", "FF"],
  pineappleFalling: [   // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "09", "00", "02", "00", "FF"],
  appleFalling: [       // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0A", "00", "02", "00", "FF"],
  orangeFalling: [      // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0B", "00", "02", "00", "FF"],
  grapesFalling: [      // Bad Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0C", "00", "02", "00", "FF"],

  softDrink1Falling: [        // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0D", "00", "02", "00", "FF"],
  softDrink2Falling: [        // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0E", "00", "02", "00", "FF"],
  beer1Falling: [             // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "0F", "00", "02", "00", "FF"],
  beer2Falling: [             // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "10", "00", "02", "00", "FF"],
  whiskyFalling: [            // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "11", "00", "02", "00", "FF"],
  beer3Falling: [             // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "12", "00", "02", "00", "FF"],
  gum1Falling: [              // Horrible Food
      "RR", "RR", "RR", "RR", "RR", "RR", 
      "00", "12", "00", "13", "00", "02", "00", "FF"]
}


export default foodTypeByteMap;