const fatTypeByteMap =
{
  gOriber: [            // Default
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "00", "00", "RR", "RR", "00", "FF"], 
  gOriberIlde: [        // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "02", "00", "RR", "RR", "00", "FF"], 
  gOriberHeadbutt: [    // Headbutt attack
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "06", "00", "RR", "RR", "00", "FF"], 

  gOriberCrouch: [      // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "04", "00", "RR", "RR", "00", "FF"], 

  gOriberIdleToFall: [  // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "08", "00", "RR", "RR", "00", "FF"], 



  billBull: [            // Default
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "00", "01", "RR", "RR", "00", "FF"], 
  billBullIlde: [        // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "02", "01", "RR", "RR", "00", "FF"], 
  billBullHeadbutt: [    // Headbutt attack
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "06", "01", "RR", "RR", "00", "FF"], 

  billBullCrouch: [      // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "04", "01", "RR", "RR", "00", "FF"], 

  billBullIdleToFall: [  // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "08", "01", "RR", "RR", "00", "FF"],



  wongWho: [            // Default
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "00", "02", "RR", "RR", "00", "FF"], 
  wongWhoIlde: [        // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "02", "02", "RR", "RR", "00", "FF"], 
  wongWhoHeadbutt: [    // Headbutt attack
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "06", "02", "RR", "RR", "00", "FF"], 

  wongWhoCrouch: [      // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "04", "02", "RR", "RR", "00", "FF"], 

  wongWhoIdleToFall: [  // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "04", "02", "08", "02", "RR", "RR", "00", "FF"]
}


export default fatTypeByteMap;