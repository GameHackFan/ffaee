const axlTypeByteMap =
{
  axl: [                 // Default
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "00", "00", "RR", "RR", "00", "FF"],
  axlIdle: [             // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "02", "00", "RR", "RR", "00", "FF"],

  axlCrouch: [           // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "01", "00", "RR", "RR", "00", "FF"],

  axlIdleToFall: [       // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "03", "00", "RR", "RR", "00", "FF"],
  axlCrouchToFall1: [    // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "0B", "00", "RR", "RR", "00", "FF"],
  axlCrouchToFall2: [    // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "0C", "00", "RR", "RR", "00", "FF"],



  slash: [                 // Default
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "00", "01", "RR", "RR", "00", "FF"],
  slashIdle: [             // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "02", "01", "RR", "RR", "00", "FF"],

  slashCrouch: [           // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "01", "01", "RR", "RR", "00", "FF"],

  slashIdleToFall: [       // Leaning on a wall
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "03", "01", "RR", "RR", "00", "FF"],
  slashCrouchToFall1: [    // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "0B", "01", "RR", "RR", "00", "FF"],
  slashCrouchToFall2: [    // Face towards the screen.
      "RR", "RR", "RR", "RR", "RR", "RR",
      "02", "02", "0C", "01", "RR", "RR", "00", "FF"]
}


export default axlTypeByteMap;