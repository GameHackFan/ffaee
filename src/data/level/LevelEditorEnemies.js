import bredTypeData from "./editor/BredTypeData";
import jTypeData from "./editor/JTypeData";
import axlTypeData from "./editor/AxlTypeData";
import andoreTypeData from "./editor/AndoreTypeData";
import fatTypeData from "./editor/FatTypeData";
import stabberTypeData from "./editor/StabberTypeData";
import girlTypeData from "./editor/GirlTypeData";

import bossTypeData from "./editor/BossTypeData";

import foodTypeData from "./editor/FoodTypeData";
import treasureTypeData from
    "./editor/TreasureTypeData";
import otherTypeData from "./editor/OtherTypeData";


import drumcanTypeData from "./editor/DrumcanTypeData";
import chandelierTypeData from
    "./editor/ChandelierTypeData";
import billboardTypeData from
    "./editor/BillboardTypeData";
import freightTypeData from "./editor/FreightTypeData";
import dustbinTypeData from "./editor/DustbinTypeData";
import barrelTypeData from "./editor/BarrelTypeData";
import tireTypeData from "./editor/TireTypeData";import telBoothTypeData from
    "./editor/TelBoothTypeData";
import drumcanKickTypeData from
    "./editor/DrumcanKickTypeData";




const levelEditorEnemies =
{
  bred: bredTypeData.bred,
  bredIdle: bredTypeData.bredIdle,
  bredWalkingOut: bredTypeData.bredWalkingOut,
  bredSitting1: bredTypeData.bredSitting1,
  bredSitting2: bredTypeData.bredSitting2,
  bredCrouch1: bredTypeData.bredCrouch1,
  bredCrouch2: bredTypeData.bredCrouch2,
  bredCrouch3: bredTypeData.bredCrouch3,
  bredCrouch4: bredTypeData.bredCrouch4,
  bredSittingToFall: bredTypeData.bredSittingToFall,
  bredCrouchToFall1: bredTypeData.bredCrouchToFall1,
  bredCrouchToFall2: bredTypeData.bredCrouchToFall2,
  bredCrouchToFall3: bredTypeData.bredCrouchToFall3,
  bredCrouchToFall4: bredTypeData.bredCrouchToFall4,

  dug: bredTypeData.dug,
  dugIdle: bredTypeData.dugIdle,
  dugWalkingOut: bredTypeData.dugWalkingOut,
  dugSitting1: bredTypeData.dugSitting1,
  dugSitting2: bredTypeData.dugSitting2,
  dugCrouch1: bredTypeData.dugCrouch1,
  dugCrouch2: bredTypeData.dugCrouch2,
  dugCrouch3: bredTypeData.dugCrouch3,
  dugCrouch4: bredTypeData.dugCrouch4,
  dugSittingToFall: bredTypeData.dugSittingToFall,
  dugCrouchToFall1: bredTypeData.dugCrouchToFall1,
  dugCrouchToFall2: bredTypeData.dugCrouchToFall2,
  dugCrouchToFall3: bredTypeData.dugCrouchToFall3,
  dugCrouchToFall4: bredTypeData.dugCrouchToFall4,

  jake: bredTypeData.jake,
  jakeIdle: bredTypeData.jakeIdle,
  jakeWalkingOut: bredTypeData.jakeWalkingOut,
  jakeSitting1: bredTypeData.jakeSitting1,
  jakeSitting2: bredTypeData.jakeSitting2,
  jakeCrouch1: bredTypeData.jakeCrouch1,
  jakeCrouch2: bredTypeData.jakeCrouch2,
  jakeCrouch3: bredTypeData.jakeCrouch3,
  jakeCrouch4: bredTypeData.jakeCrouch4,
  jakeSittingToFall: bredTypeData.jakeSittingToFall,
  jakeCrouchToFall1: bredTypeData.jakeCrouchToFall1,
  jakeCrouchToFall2: bredTypeData.jakeCrouchToFall2,
  jakeCrouchToFall3: bredTypeData.jakeCrouchToFall3,
  jakeCrouchToFall4: bredTypeData.jakeCrouchToFall4,

  simons: bredTypeData.simons,
  simonsIdle: bredTypeData.simonsIdle,
  simonsWalkingOut: bredTypeData.simonsWalkingOut,
  simonsSitting1: bredTypeData.simonsSitting1,
  simonsSitting2: bredTypeData.simonsSitting2,
  simonsCrouch1: bredTypeData.simonsCrouch1,
  simonsCrouch2: bredTypeData.simonsCrouch2,
  simonsCrouch3: bredTypeData.simonsCrouch3,
  simonsCrouch4: bredTypeData.simonsCrouch4,
  simonsSittingToFall:
      bredTypeData.simonsSittingToFall,
  simonsCrouchToFall1:
      bredTypeData.simonsCrouchToFall1,
  simonsCrouchToFall2:
      bredTypeData.simonsCrouchToFall2,
  simonsCrouchToFall3:
      bredTypeData.simonsCrouchToFall3,
  simonsCrouchToFall4:
      bredTypeData.simonsCrouchToFall4,


  j: jTypeData.j,
  jIdle: jTypeData.jIdle,
  jSitting: jTypeData.jSitting,
  jCrouch: jTypeData.jCrouch,
  jIdleToFall1: jTypeData.jIdleToFall1,
  jIdleToFall2: jTypeData.jIdleToFall2,
  jIdleToFall3: jTypeData.jIdleToFall3,

  twoP: jTypeData.twoP,
  twoPIdle: jTypeData.twoPIdle,
  twoPSitting: jTypeData.twoPSitting,
  twoPCrouch: jTypeData.twoPCrouch,
  twoPIdleToFall1: jTypeData.twoPIdleToFall1,
  twoPIdleToFall2: jTypeData.twoPIdleToFall2,
  twoPIdleToFall3: jTypeData.twoPIdleToFall3,


  axl: axlTypeData.axl,
  axlIdle: axlTypeData.axlIdle,
  axlCrouch: axlTypeData.axlCrouch,
  axlIdleToFall: axlTypeData.axlIdleToFall,
  axlCrouchToFall1: axlTypeData.axlCrouchToFall1,
  axlCrouchToFall2: axlTypeData.axlCrouchToFall2,

  slash: axlTypeData.slash,
  slashIdle: axlTypeData.slashIdle,
  slashCrouch: axlTypeData.slashCrouch,
  slashIdleToFall: axlTypeData.slashIdleToFall,
  slashCrouchToFall1: axlTypeData.slashCrouchToFall1,
  slashCrouchToFall2: axlTypeData.slashCrouchToFall2,


  andoreJr: andoreTypeData.andoreJr,
  andoreJrIdle: andoreTypeData.andoreJrIdle,
  andoreJrChestAttack:
      andoreTypeData.andoreJrChestAttack,
  andoreJrJumpAttack:
      andoreTypeData.andoreJrJumpAttack,
  andoreJrFalling: andoreTypeData.andoreJrFalling,
  andoreJrFallingFast:
      andoreTypeData.andoreJrFallingFast,
  andoreJrIdleToFall:
      andoreTypeData.andoreJrIdleToFall,


  andore: andoreTypeData.andore,
  andoreIdle: andoreTypeData.andoreIdle,
  andoreChestAttack: andoreTypeData.andoreChestAttack,
  andoreJumpAttack: andoreTypeData.andoreJumpAttack,
  andoreFalling: andoreTypeData.andoreFalling,
  andoreFallingFast: andoreTypeData.andoreFallingFast,
  andoreIdleToFall: andoreTypeData.andoreIdleToFall,


  gAndore: andoreTypeData.gAndore,
  gAndoreIdle: andoreTypeData.gAndoreIdle,
  gAndoreChestAttack:
      andoreTypeData.gAndoreChestAttack,
  gAndoreJumpAttack: andoreTypeData.gAndoreJumpAttack,
  gAndoreFalling: andoreTypeData.gAndoreFalling,
  gAndoreFallingFast:
      andoreTypeData.gAndoreFallingFast,
  gAndoreIdleToFall: andoreTypeData.gAndoreIdleToFall,


  uAndore: andoreTypeData.uAndore,
  uAndoreIdle: andoreTypeData.uAndoreIdle,
  uAndoreChestAttack:
      andoreTypeData.uAndoreChestAttack,
  uAndoreJumpAttack: andoreTypeData.uAndoreJumpAttack,
  uAndoreFalling: andoreTypeData.uAndoreFalling,
  uAndoreFallingFast:
      andoreTypeData.uAndoreFallingFast,
  uAndoreIdleToFall: andoreTypeData.uAndoreIdleToFall,


  fAndore: andoreTypeData.fAndore,
  fAndoreIdle: andoreTypeData.fAndoreIdle,
  fAndoreChestAttack:
      andoreTypeData.fAndoreChestAttack,
  fAndoreJumpAttack: andoreTypeData.fAndoreJumpAttack,
  fAndoreFalling: andoreTypeData.fAndoreFalling,
  fAndoreFallingFast:
      andoreTypeData.fAndoreFallingFast,
  fAndoreIdleToFall: andoreTypeData.fAndoreIdleToFall,


  gOriber: fatTypeData.gOriber,
  gOriberIlde: fatTypeData.gOriberIlde,
  gOriberHeadbutt: fatTypeData.gOriberHeadbutt,
  gOriberCrouch: fatTypeData.gOriberCrouch,
  gOriberIdleToFall: fatTypeData.gOriberIdleToFall,


  billBull: fatTypeData.billBull,
  billBullIlde: fatTypeData.billBullIlde,
  billBullHeadbutt: fatTypeData.billBullHeadbutt,
  billBullCrouch: fatTypeData.billBullCrouch,
  billBullIdleToFall: fatTypeData.billBullIdleToFall,


  wongWho: fatTypeData.wongWho,
  wongWhoIlde: fatTypeData.wongWhoIlde,
  wongWhoHeadbutt: fatTypeData.wongWhoHeadbutt,
  wongWhoCrouch: fatTypeData.wongWhoCrouch,
  wongWhoIdleToFall: fatTypeData.wongWhoIdleToFall,


  hollyWood: stabberTypeData.hollyWood,
  hollyWoodFalling: stabberTypeData.hollyWoodFalling,
  hollyWoodFallingFast:
      stabberTypeData.hollyWoodFallingFast,


  elGado: stabberTypeData.elGado,
  elGadoFalling: stabberTypeData.elGadoFalling,
  elGadoFallingFast:
      stabberTypeData.elGadoFallingFast,


  hollyWoodMolotov: stabberTypeData.hollyWoodMolotov,

  elGadoMolotov: stabberTypeData.elGadoMolotov,


  roxy: girlTypeData.roxy,
  roxyCrouch: girlTypeData.roxyCrouch,
  roxyFrontflipLeft: girlTypeData.roxyFrontflipLeft,
  roxyFrontflipRight: girlTypeData.roxyFrontflipRight,
  roxyFalling: girlTypeData.roxyFalling,


  poison: girlTypeData.poison,
  poisonCrouch: girlTypeData.poisonCrouch,
  poisonFrontflipLeft:
      girlTypeData.poisonFrontflipLeft,
  poisonFrontflipRight:
      girlTypeData.poisonFrontflipRight,
  poisonFalling: girlTypeData.poisonFalling,


  damnd: bossTypeData.damnd,
  sodom: bossTypeData.sodom,
  ediE: bossTypeData.ediE,
  rolento: bossTypeData.rolento,
  rolentoGrenade: bossTypeData.rolentoGrenade,
  abigail: bossTypeData.abigail,
  belger: bossTypeData.belger,


  barbecue: foodTypeData.barbecue,
  steak: foodTypeData.steak,
  chicken: foodTypeData.chicken,

  hamburger: foodTypeData.hamburger,
  hotdog: foodTypeData.hotdog,
  pizza: foodTypeData.pizza,
  curry: foodTypeData.curry,
  sushi: foodTypeData.sushi,

  banana: foodTypeData.banana,
  pineapple: foodTypeData.pineapple,
  apple: foodTypeData.apple,
  orange: foodTypeData.orange,
  grapes: foodTypeData.grapes,

  softDrink1: foodTypeData.softDrink1,
  softDrink2: foodTypeData.softDrink2,
  beer1: foodTypeData.beer1,
  beer2: foodTypeData.beer2,
  whisky: foodTypeData.whisky,
  beer3: foodTypeData.beer3,
  gum1: foodTypeData.gum1,


  barbecueFalling: foodTypeData.barbecueFalling,
  steakFalling: foodTypeData.steakFalling,
  chickenFalling: foodTypeData.chickenFalling,

  hamburgerFalling: foodTypeData.hamburgerFalling,
  hotdogFalling: foodTypeData.hotdogFalling,
  pizzaFalling: foodTypeData.pizzaFalling,
  curryFalling: foodTypeData.curryFalling,
  sushiFalling: foodTypeData.sushiFalling,

  bananaFalling: foodTypeData.bananaFalling,
  pineappleFalling: foodTypeData.pineappleFalling,
  appleFalling: foodTypeData.appleFalling,
  orangeFalling: foodTypeData.orangeFalling,
  grapesFalling: foodTypeData.grapesFalling,

  softDrink1Falling: foodTypeData.softDrink1Falling,
  softDrink2Falling: foodTypeData.softDrink2Falling,
  beer1Falling: foodTypeData.beer1Falling,
  beer2Falling: foodTypeData.beer2Falling,
  whiskyFalling: foodTypeData.whiskyFalling,
  beer3Falling: foodTypeData.beer3Falling,
  gum1Falling: foodTypeData.gum1Falling,


  diamond: treasureTypeData.diamond,
  goldBar: treasureTypeData.goldBar,
  ruby: treasureTypeData.ruby,
  emerald: treasureTypeData.emerald,
  pearl: treasureTypeData.pearl,
  topaz: treasureTypeData.topaz,
  necklace: treasureTypeData.necklace,
  watch: treasureTypeData.watch,
  dollar: treasureTypeData.dollar,
  yen: treasureTypeData.yen,
  yenCoin: treasureTypeData.yenCoin,
  radio: treasureTypeData.radio,
  napkin: treasureTypeData.napkin,
  hat: treasureTypeData.hat,
  hammer: treasureTypeData.hammer,


  diamondFalling: treasureTypeData.diamondFalling,
  goldBarFalling: treasureTypeData.goldBarFalling,
  rubyFalling: treasureTypeData.rubyFalling,
  emeraldFalling: treasureTypeData.emeraldFalling,
  pearlFalling: treasureTypeData.pearlFalling,
  topazFalling: treasureTypeData.topazFalling,
  necklaceFalling: treasureTypeData.necklaceFalling,
  watchFalling: treasureTypeData.watchFalling,
  dollarFalling: treasureTypeData.dollarFalling,
  yenFalling: treasureTypeData.yenFalling,
  yenCoinFalling: treasureTypeData.yenCoinFalling,
  radioFalling: treasureTypeData.radioFalling,
  napkinFalling: treasureTypeData.napkinFalling,
  hatFalling: treasureTypeData.hatFalling,
  hammerFalling: treasureTypeData.hammerFalling,


  knife: otherTypeData.knife,
  muramasa: otherTypeData.muramasa,
  ironPipe: otherTypeData.ironPipe,


  knifeFalling: otherTypeData.knifeFalling,
  muramasaFalling: otherTypeData.muramasaFalling,
  ironPipeFalling: otherTypeData.ironPipeFalling,


  drumcanBarbecue: drumcanTypeData.drumcanBarbecue,
  drumcanSteak: drumcanTypeData.drumcanSteak,
  drumcanChicken: drumcanTypeData.drumcanChicken,
  drumcanHamburger:
      drumcanTypeData.drumcanHamburger,
  drumcanHotdog: drumcanTypeData.drumcanHotdog,
  drumcanPizza: drumcanTypeData.drumcanPizza,
  drumcanCurry: drumcanTypeData.drumcanCurry,
  drumcanSushi: drumcanTypeData.drumcanSushi,
  drumcanBanana: drumcanTypeData.drumcanBanana,
  drumcanPineapple:
      drumcanTypeData.drumcanPineapple,
  drumcanApple: drumcanTypeData.drumcanApple,
  drumcanOrange: drumcanTypeData.drumcanOrange,
  drumcanGrape: drumcanTypeData.drumcanGrape,
  drumcanSoftDrink1:
      drumcanTypeData.drumcanSoftDrink1,
  drumcanSoftDrink2:
      drumcanTypeData.drumcanSoftDrink2,
  drumcanBeer1: drumcanTypeData.drumcanBeer1,
  drumcanBeer2: drumcanTypeData.drumcanBeer2,
  drumcanWhisky: drumcanTypeData.drumcanWhisky,
  drumcanBeer3: drumcanTypeData.drumcanBeer3,
  drumcanGum1: drumcanTypeData.drumcanGum1,

  drumcanDiamond: drumcanTypeData.drumcanDiamond,
  drumcanGoldBar: drumcanTypeData.drumcanGoldBar,
  drumcanRuby: drumcanTypeData.drumcanRuby,
  drumcanEmerald: drumcanTypeData.drumcanEmerald,
  drumcanPearl: drumcanTypeData.drumcanPearl,
  drumcanTopaz: drumcanTypeData.drumcanTopaz,
  drumcanNecklace: drumcanTypeData.drumcanNecklace,
  drumcanWatch: drumcanTypeData.drumcanWatch,
  drumcanDollar: drumcanTypeData.drumcanDollar,
  drumcanYen: drumcanTypeData.drumcanYen,
  drumcanYenCoin: drumcanTypeData.drumcanYenCoin,
  drumcanRadio: drumcanTypeData.drumcanRadio,
  drumcanNapkin: drumcanTypeData.drumcanNapkin,
  drumcanHat: drumcanTypeData.drumcanHat,
  drumcanHammer: drumcanTypeData.drumcanHammer,

  drumcanKnife: drumcanTypeData.drumcanKnife,
  drumcanMuramasa: drumcanTypeData.drumcanMuramasa,
  drumcanPipe: drumcanTypeData.drumcanPipe,

  drumcanEmpty: drumcanTypeData.drumcanEmpty,

  drumcanRandom1: drumcanTypeData.drumcanRandom1,
  drumcanRandom2: drumcanTypeData.drumcanRandom2,
  drumcanRandom3: drumcanTypeData.drumcanRandom3,
  drumcanRandom4: drumcanTypeData.drumcanRandom4,
  drumcanRandom5: drumcanTypeData.drumcanRandom5,
  drumcanRandom6: drumcanTypeData.drumcanRandom6,
  drumcanRandom7: drumcanTypeData.drumcanRandom7,
  drumcanRandom8: drumcanTypeData.drumcanRandom8,
  drumcanRandom9: drumcanTypeData.drumcanRandom9,
  drumcanRandom10: drumcanTypeData.drumcanRandom10,
  drumcanRandom11: drumcanTypeData.drumcanRandom11,
  drumcanRandom12: drumcanTypeData.drumcanRandom12,
  drumcanRandom13: drumcanTypeData.drumcanRandom13,
  drumcanRandom14: drumcanTypeData.drumcanRandom14,


  chandelierBarbecue:
      chandelierTypeData.chandelierBarbecue,
  chandelierSteak:
      chandelierTypeData.chandelierSteak,
  chandelierChicken:
      chandelierTypeData.chandelierChicken,
  chandelierHamburger:
      chandelierTypeData.chandelierHamburger,
  chandelierHotdog:
      chandelierTypeData.chandelierHotdog,
  chandelierPizza:
      chandelierTypeData.chandelierPizza,
  chandelierCurry:
      chandelierTypeData.chandelierCurry,
  chandelierSushi:
      chandelierTypeData.chandelierSushi,
  chandelierBanana:
      chandelierTypeData.chandelierBanana,
  chandelierPineapple:
      chandelierTypeData.chandelierPineapple,
  chandelierApple:
      chandelierTypeData.chandelierApple,
  chandelierOrange:
      chandelierTypeData.chandelierOrange,
  chandelierGrape:
      chandelierTypeData.chandelierGrape,
  chandelierSoftDrink1:
      chandelierTypeData.chandelierSoftDrink1,
  chandelierSoftDrink2:
      chandelierTypeData.chandelierSoftDrink2,
  chandelierBeer1:
      chandelierTypeData.chandelierBeer1,
  chandelierBeer2:
      chandelierTypeData.chandelierBeer2,
  chandelierWhisky:
      chandelierTypeData.chandelierWhisky,
  chandelierBeer3:
      chandelierTypeData.chandelierBeer3,
  chandelierGum1:
      chandelierTypeData.chandelierGum1,

  chandelierDiamond:
      chandelierTypeData.chandelierDiamond,
  chandelierGoldBar:
      chandelierTypeData.chandelierGoldBar,
  chandelierRuby:
      chandelierTypeData.chandelierRuby,
  chandelierEmerald:
      chandelierTypeData.chandelierEmerald,
  chandelierPearl:
      chandelierTypeData.chandelierPearl,
  chandelierTopaz:
      chandelierTypeData.chandelierTopaz,
  chandelierNecklace:
      chandelierTypeData.chandelierNecklace,
  chandelierWatch:
      chandelierTypeData.chandelierWatch,
  chandelierDollar:
      chandelierTypeData.chandelierDollar,
  chandelierYen:
      chandelierTypeData.chandelierYen,
  chandelierYenCoin:
      chandelierTypeData.chandelierYenCoin,
  chandelierRadio:
      chandelierTypeData.chandelierRadio,
  chandelierNapkin:
      chandelierTypeData.chandelierNapkin,
  chandelierHat:
      chandelierTypeData.chandelierHat,
  chandelierHammer:
      chandelierTypeData.chandelierHammer,

  chandelierKnife:
      chandelierTypeData.chandelierKnife,
  chandelierMuramasa:
      chandelierTypeData.chandelierMuramasa,
  chandelierPipe:
      chandelierTypeData.chandelierPipe,

  chandelierEmpty:
      chandelierTypeData.chandelierEmpty,

  chandelierRandom1:
      chandelierTypeData.chandelierRandom1,
  chandelierRandom2:
      chandelierTypeData.chandelierRandom2,
  chandelierRandom3:
      chandelierTypeData.chandelierRandom3,
  chandelierRandom4:
      chandelierTypeData.chandelierRandom4,
  chandelierRandom5:
      chandelierTypeData.chandelierRandom5,
  chandelierRandom6:
      chandelierTypeData.chandelierRandom6,
  chandelierRandom7:
      chandelierTypeData.chandelierRandom7,
  chandelierRandom8:
      chandelierTypeData.chandelierRandom8,
  chandelierRandom9:
      chandelierTypeData.chandelierRandom9,
  chandelierRandom10:
      chandelierTypeData.chandelierRandom10,
  chandelierRandom11:
      chandelierTypeData.chandelierRandom11,
  chandelierRandom12:
      chandelierTypeData.chandelierRandom12,
  chandelierRandom13:
      chandelierTypeData.chandelierRandom13,
  chandelierRandom14:
      chandelierTypeData.chandelierRandom14,


  billboardBarbecue:
      billboardTypeData.billboardBarbecue,
  billboardSteak:
      billboardTypeData.billboardSteak,
  billboardChicken:
      billboardTypeData.billboardChicken,
  billboardHamburger:
      billboardTypeData.billboardHamburger,
  billboardHotdog:
      billboardTypeData.billboardHotdog,
  billboardPizza:
      billboardTypeData.billboardPizza,
  billboardCurry:
      billboardTypeData.billboardCurry,
  billboardSushi:
      billboardTypeData.billboardSushi,
  billboardBanana:
      billboardTypeData.billboardBanana,
  billboardPineapple:
      billboardTypeData.billboardPineapple,
  billboardApple:
      billboardTypeData.billboardApple,
  billboardOrange:
      billboardTypeData.billboardOrange,
  billboardGrape:
      billboardTypeData.billboardGrape,
  billboardSoftDrink1:
      billboardTypeData.billboardSoftDrink1,
  billboardSoftDrink2:
      billboardTypeData.billboardSoftDrink2,
  billboardBeer1:
      billboardTypeData.billboardBeer1,
  billboardBeer2:
      billboardTypeData.billboardBeer2,
  billboardWhisky:
      billboardTypeData.billboardWhisky,
  billboardBeer3:
      billboardTypeData.billboardBeer3,
  billboardGum1:
      billboardTypeData.billboardGum1,

  billboardDiamond:
      billboardTypeData.billboardDiamond,
  billboardGoldBar:
      billboardTypeData.billboardGoldBar,
  billboardRuby:
      billboardTypeData.billboardRuby,
  billboardEmerald:
      billboardTypeData.billboardEmerald,
  billboardPearl:
      billboardTypeData.billboardPearl,
  billboardTopaz:
      billboardTypeData.billboardTopaz,
  billboardNecklace:
      billboardTypeData.billboardNecklace,
  billboardWatch:
      billboardTypeData.billboardWatch,
  billboardDollar:
      billboardTypeData.billboardDollar,
  billboardYen:
      billboardTypeData.billboardYen,
  billboardYenCoin:
      billboardTypeData.billboardYenCoin,
  billboardRadio:
      billboardTypeData.billboardRadio,
  billboardNapkin:
      billboardTypeData.billboardNapkin,
  billboardHat:
      billboardTypeData.billboardHat,
  billboardHammer:
      billboardTypeData.billboardHammer,

  billboardKnife:
      billboardTypeData.billboardKnife,
  billboardMuramasa:
      billboardTypeData.billboardMuramasa,
  billboardPipe:
      billboardTypeData.billboardPipe,

  billboardEmpty:
      billboardTypeData.billboardEmpty,

  billboardRandom1:
      billboardTypeData.billboardRandom1,
  billboardRandom2:
      billboardTypeData.billboardRandom2,
  billboardRandom3:
      billboardTypeData.billboardRandom3,
  billboardRandom4:
      billboardTypeData.billboardRandom4,
  billboardRandom5:
      billboardTypeData.billboardRandom5,
  billboardRandom6:
      billboardTypeData.billboardRandom6,
  billboardRandom7:
      billboardTypeData.billboardRandom7,
  billboardRandom8:
      billboardTypeData.billboardRandom8,
  billboardRandom9:
      billboardTypeData.billboardRandom9,
  billboardRandom10:
      billboardTypeData.billboardRandom10,
  billboardRandom11:
      billboardTypeData.billboardRandom11,
  billboardRandom12:
      billboardTypeData.billboardRandom12,
  billboardRandom13:
      billboardTypeData.billboardRandom13,
  billboardRandom14:
      billboardTypeData.billboardRandom14,


  freightBarbecue: freightTypeData.freightBarbecue,
  freightSteak: freightTypeData.freightSteak,
  freightChicken: freightTypeData.freightChicken,
  freightHamburger:
      freightTypeData.freightHamburger,
  freightHotdog: freightTypeData.freightHotdog,
  freightPizza: freightTypeData.freightPizza,
  freightCurry: freightTypeData.freightCurry,
  freightSushi: freightTypeData.freightSushi,
  freightBanana: freightTypeData.freightBanana,
  freightPineapple:
      freightTypeData.freightPineapple,
  freightApple: freightTypeData.freightApple,
  freightOrange: freightTypeData.freightOrange,
  freightGrape: freightTypeData.freightGrape,
  freightSoftDrink1:
      freightTypeData.freightSoftDrink1,
  freightSoftDrink2:
      freightTypeData.freightSoftDrink2,
  freightBeer1: freightTypeData.freightBeer1,
  freightBeer2: freightTypeData.freightBeer2,
  freightWhisky: freightTypeData.freightWhisky,
  freightBeer3: freightTypeData.freightBeer3,
  freightGum1: freightTypeData.freightGum1,

  freightDiamond: freightTypeData.freightDiamond,
  freightGoldBar: freightTypeData.freightGoldBar,
  freightRuby: freightTypeData.freightRuby,
  freightEmerald: freightTypeData.freightEmerald,
  freightPearl: freightTypeData.freightPearl,
  freightTopaz: freightTypeData.freightTopaz,
  freightNecklace: freightTypeData.freightNecklace,
  freightWatch: freightTypeData.freightWatch,
  freightDollar: freightTypeData.freightDollar,
  freightYen: freightTypeData.freightYen,
  freightYenCoin: freightTypeData.freightYenCoin,
  freightRadio: freightTypeData.freightRadio,
  freightNapkin: freightTypeData.freightNapkin,
  freightHat: freightTypeData.freightHat,
  freightHammer: freightTypeData.freightHammer,

  freightKnife: freightTypeData.freightKnife,
  freightMuramasa: freightTypeData.freightMuramasa,
  freightPipe: freightTypeData.freightPipe,

  freightEmpty: freightTypeData.freightEmpty,

  freightRandom1: freightTypeData.freightRandom1,
  freightRandom2: freightTypeData.freightRandom2,
  freightRandom3: freightTypeData.freightRandom3,
  freightRandom4: freightTypeData.freightRandom4,
  freightRandom5: freightTypeData.freightRandom5,
  freightRandom6: freightTypeData.freightRandom6,
  freightRandom7: freightTypeData.freightRandom7,
  freightRandom8: freightTypeData.freightRandom8,
  freightRandom9: freightTypeData.freightRandom9,
  freightRandom10: freightTypeData.freightRandom10,
  freightRandom11: freightTypeData.freightRandom11,
  freightRandom12: freightTypeData.freightRandom12,
  freightRandom13: freightTypeData.freightRandom13,
  freightRandom14: freightTypeData.freightRandom14,


  dustbinBarbecue: dustbinTypeData.dustbinBarbecue,
  dustbinSteak: dustbinTypeData.dustbinSteak,
  dustbinChicken: dustbinTypeData.dustbinChicken,
  dustbinHamburger:
      dustbinTypeData.dustbinHamburger,
  dustbinHotdog: dustbinTypeData.dustbinHotdog,
  dustbinPizza: dustbinTypeData.dustbinPizza,
  dustbinCurry: dustbinTypeData.dustbinCurry,
  dustbinSushi: dustbinTypeData.dustbinSushi,
  dustbinBanana: dustbinTypeData.dustbinBanana,
  dustbinPineapple:
      dustbinTypeData.dustbinPineapple,
  dustbinApple: dustbinTypeData.dustbinApple,
  dustbinOrange: dustbinTypeData.dustbinOrange,
  dustbinGrape: dustbinTypeData.dustbinGrape,
  dustbinSoftDrink1:
      dustbinTypeData.dustbinSoftDrink1,
  dustbinSoftDrink2:
      dustbinTypeData.dustbinSoftDrink2,
  dustbinBeer1: dustbinTypeData.dustbinBeer1,
  dustbinBeer2: dustbinTypeData.dustbinBeer2,
  dustbinWhisky: dustbinTypeData.dustbinWhisky,
  dustbinBeer3: dustbinTypeData.dustbinBeer3,
  dustbinGum1: dustbinTypeData.dustbinGum1,

  dustbinDiamond: dustbinTypeData.dustbinDiamond,
  dustbinGoldBar: dustbinTypeData.dustbinGoldBar,
  dustbinRuby: dustbinTypeData.dustbinRuby,
  dustbinEmerald: dustbinTypeData.dustbinEmerald,
  dustbinPearl: dustbinTypeData.dustbinPearl,
  dustbinTopaz: dustbinTypeData.dustbinTopaz,
  dustbinNecklace: dustbinTypeData.dustbinNecklace,
  dustbinWatch: dustbinTypeData.dustbinWatch,
  dustbinDollar: dustbinTypeData.dustbinDollar,
  dustbinYen: dustbinTypeData.dustbinYen,
  dustbinYenCoin: dustbinTypeData.dustbinYenCoin,
  dustbinRadio: dustbinTypeData.dustbinRadio,
  dustbinNapkin: dustbinTypeData.dustbinNapkin,
  dustbinHat: dustbinTypeData.dustbinHat,
  dustbinHammer: dustbinTypeData.dustbinHammer,

  dustbinKnife: dustbinTypeData.dustbinKnife,
  dustbinMuramasa: dustbinTypeData.dustbinMuramasa,
  dustbinPipe: dustbinTypeData.dustbinPipe,

  dustbinEmpty: dustbinTypeData.dustbinEmpty,

  dustbinRandom1: dustbinTypeData.dustbinRandom1,
  dustbinRandom2: dustbinTypeData.dustbinRandom2,
  dustbinRandom3: dustbinTypeData.dustbinRandom3,
  dustbinRandom4: dustbinTypeData.dustbinRandom4,
  dustbinRandom5: dustbinTypeData.dustbinRandom5,
  dustbinRandom6: dustbinTypeData.dustbinRandom6,
  dustbinRandom7: dustbinTypeData.dustbinRandom7,
  dustbinRandom8: dustbinTypeData.dustbinRandom8,
  dustbinRandom9: dustbinTypeData.dustbinRandom9,
  dustbinRandom10: dustbinTypeData.dustbinRandom10,
  dustbinRandom11: dustbinTypeData.dustbinRandom11,
  dustbinRandom12: dustbinTypeData.dustbinRandom12,
  dustbinRandom13: dustbinTypeData.dustbinRandom13,
  dustbinRandom14: dustbinTypeData.dustbinRandom14,


  barrelBarbecue: barrelTypeData.barrelBarbecue,
  barrelSteak: barrelTypeData.barrelSteak,
  barrelChicken: barrelTypeData.barrelChicken,
  barrelHamburger: barrelTypeData.barrelHamburger,
  barrelHotdog: barrelTypeData.barrelHotdog,
  barrelPizza: barrelTypeData.barrelPizza,
  barrelCurry: barrelTypeData.barrelCurry,
  barrelSushi: barrelTypeData.barrelSushi,
  barrelBanana: barrelTypeData.barrelBanana,
  barrelPineapple: barrelTypeData.barrelPineapple,
  barrelApple: barrelTypeData.barrelApple,
  barrelOrange: barrelTypeData.barrelOrange,
  barrelGrape: barrelTypeData.barrelGrape,
  barrelSoftDrink1: barrelTypeData.barrelSoftDrink1,
  barrelSoftDrink2: barrelTypeData.barrelSoftDrink2,
  barrelBeer1: barrelTypeData.barrelBeer1,
  barrelBeer2: barrelTypeData.barrelBeer2,
  barrelWhisky: barrelTypeData.barrelWhisky,
  barrelBeer3: barrelTypeData.barrelBeer3,
  barrelGum1: barrelTypeData.barrelGum1,

  barrelDiamond: barrelTypeData.barrelDiamond,
  barrelGoldBar: barrelTypeData.barrelGoldBar,
  barrelRuby: barrelTypeData.barrelRuby,
  barrelEmerald: barrelTypeData.barrelEmerald,
  barrelPearl: barrelTypeData.barrelPearl,
  barrelTopaz: barrelTypeData.barrelTopaz,
  barrelNecklace: barrelTypeData.barrelNecklace,
  barrelWatch: barrelTypeData.barrelWatch,
  barrelDollar: barrelTypeData.barrelDollar,
  barrelYen: barrelTypeData.barrelYen,
  barrelYenCoin: barrelTypeData.barrelYenCoin,
  barrelRadio: barrelTypeData.barrelRadio,
  barrelNapkin: barrelTypeData.barrelNapkin,
  barrelHat: barrelTypeData.barrelHat,
  barrelHammer: barrelTypeData.barrelHammer,

  barrelKnife: barrelTypeData.barrelKnife,
  barrelMuramasa: barrelTypeData.barrelMuramasa,
  barrelPipe: barrelTypeData.barrelPipe,

  barrelEmpty: barrelTypeData.barrelEmpty,

  barrelRandom1: barrelTypeData.barrelRandom1,
  barrelRandom2: barrelTypeData.barrelRandom2,
  barrelRandom3: barrelTypeData.barrelRandom3,
  barrelRandom4: barrelTypeData.barrelRandom4,
  barrelRandom5: barrelTypeData.barrelRandom5,
  barrelRandom6: barrelTypeData.barrelRandom6,
  barrelRandom7: barrelTypeData.barrelRandom7,
  barrelRandom8: barrelTypeData.barrelRandom8,
  barrelRandom9: barrelTypeData.barrelRandom9,
  barrelRandom10: barrelTypeData.barrelRandom10,
  barrelRandom11: barrelTypeData.barrelRandom11,
  barrelRandom12: barrelTypeData.barrelRandom12,
  barrelRandom13: barrelTypeData.barrelRandom13,
  barrelRandom14: barrelTypeData.barrelRandom14,


  tireBarbecue: tireTypeData.tireBarbecue,
  tireSteak: tireTypeData.tireSteak,
  tireChicken: tireTypeData.tireChicken,
  tireHamburger: tireTypeData.tireHamburger,
  tireHotdog: tireTypeData.tireHotdog,
  tirePizza: tireTypeData.tirePizza,
  tireCurry: tireTypeData.tireCurry,
  tireSushi: tireTypeData.tireSushi,
  tireBanana: tireTypeData.tireBanana,
  tirePineapple: tireTypeData.tirePineapple,
  tireApple: tireTypeData.tireApple,
  tireOrange: tireTypeData.tireOrange,
  tireGrape: tireTypeData.tireGrape,
  tireSoftDrink1: tireTypeData.tireSoftDrink1,
  tireSoftDrink2: tireTypeData.tireSoftDrink2,
  tireBeer1: tireTypeData.tireBeer1,
  tireBeer2: tireTypeData.tireBeer2,
  tireWhisky: tireTypeData.tireWhisky,
  tireBeer3: tireTypeData.tireBeer3,
  tireGum1: tireTypeData.tireGum1,

  tireDiamond: tireTypeData.tireDiamond,
  tireGoldBar: tireTypeData.tireGoldBar,
  tireRuby: tireTypeData.tireRuby,
  tireEmerald: tireTypeData.tireEmerald,
  tirePearl: tireTypeData.tirePearl,
  tireTopaz: tireTypeData.tireTopaz,
  tireNecklace: tireTypeData.tireNecklace,
  tireWatch: tireTypeData.tireWatch,
  tireDollar: tireTypeData.tireDollar,
  tireYen: tireTypeData.tireYen,
  tireYenCoin: tireTypeData.tireYenCoin,
  tireRadio: tireTypeData.tireRadio,
  tireNapkin: tireTypeData.tireNapkin,
  tireHat: tireTypeData.tireHat,
  tireHammer: tireTypeData.tireHammer,

  tireKnife: tireTypeData.tireKnife,
  tireMuramasa: tireTypeData.tireMuramasa,
  tirePipe: tireTypeData.tirePipe,

  tireEmpty: tireTypeData.tireEmpty,

  tireRandom1: tireTypeData.tireRandom1,
  tireRandom2: tireTypeData.tireRandom2,
  tireRandom3: tireTypeData.tireRandom3,
  tireRandom4: tireTypeData.tireRandom4,
  tireRandom5: tireTypeData.tireRandom5,
  tireRandom6: tireTypeData.tireRandom6,
  tireRandom7: tireTypeData.tireRandom7,
  tireRandom8: tireTypeData.tireRandom8,
  tireRandom9: tireTypeData.tireRandom9,
  tireRandom10: tireTypeData.tireRandom10,
  tireRandom11: tireTypeData.tireRandom11,
  tireRandom12: tireTypeData.tireRandom12,
  tireRandom13: tireTypeData.tireRandom13,
  tireRandom14: tireTypeData.tireRandom14,


  telBoothBarbecue:
      telBoothTypeData.telBoothBarbecue,
  telBoothSteak:
      telBoothTypeData.telBoothSteak,
  telBoothChicken:
      telBoothTypeData.telBoothChicken,
  telBoothHamburger:
      telBoothTypeData.telBoothHamburger,
  telBoothHotdog:
      telBoothTypeData.telBoothHotdog,
  telBoothPizza:
      telBoothTypeData.telBoothPizza,
  telBoothCurry:
      telBoothTypeData.telBoothCurry,
  telBoothSushi:
      telBoothTypeData.telBoothSushi,
  telBoothBanana:
      telBoothTypeData.telBoothBanana,
  telBoothPineapple:
      telBoothTypeData.telBoothPineapple,
  telBoothApple:
      telBoothTypeData.telBoothApple,
  telBoothOrange:
      telBoothTypeData.telBoothOrange,
  telBoothGrape:
      telBoothTypeData.telBoothGrape,
  telBoothSoftDrink1:
      telBoothTypeData.telBoothSoftDrink1,
  telBoothSoftDrink2:
      telBoothTypeData.telBoothSoftDrink2,
  telBoothBeer1:
      telBoothTypeData.telBoothBeer1,
  telBoothBeer2:
      telBoothTypeData.telBoothBeer2,
  telBoothWhisky:
      telBoothTypeData.telBoothWhisky,
  telBoothBeer3:
      telBoothTypeData.telBoothBeer3,
  telBoothGum1:
      telBoothTypeData.telBoothGum1,

  telBoothDiamond:
      telBoothTypeData.telBoothDiamond,
  telBoothGoldBar:
      telBoothTypeData.telBoothGoldBar,
  telBoothRuby:
      telBoothTypeData.telBoothRuby,
  telBoothEmerald:
      telBoothTypeData.telBoothEmerald,
  telBoothPearl:
      telBoothTypeData.telBoothPearl,
  telBoothTopaz:
      telBoothTypeData.telBoothTopaz,
  telBoothNecklace:
      telBoothTypeData.telBoothNecklace,
  telBoothWatch:
      telBoothTypeData.telBoothWatch,
  telBoothDollar:
      telBoothTypeData.telBoothDollar,
  telBoothYen:
      telBoothTypeData.telBoothYen,
  telBoothYenCoin:
      telBoothTypeData.telBoothYenCoin,
  telBoothRadio:
      telBoothTypeData.telBoothRadio,
  telBoothNapkin:
      telBoothTypeData.telBoothNapkin,
  telBoothHat:
      telBoothTypeData.telBoothHat,
  telBoothHammer:
      telBoothTypeData.telBoothHammer,

  telBoothKnife:
      telBoothTypeData.telBoothKnife,
  telBoothMuramasa:
      telBoothTypeData.telBoothMuramasa,
  telBoothPipe:
      telBoothTypeData.telBoothPipe,

  telBoothEmpty:
      telBoothTypeData.telBoothEmpty,

  telBoothRandom1:
      telBoothTypeData.telBoothRandom1,
  telBoothRandom2:
      telBoothTypeData.telBoothRandom2,
  telBoothRandom3:
      telBoothTypeData.telBoothRandom3,
  telBoothRandom4:
      telBoothTypeData.telBoothRandom4,
  telBoothRandom5:
      telBoothTypeData.telBoothRandom5,
  telBoothRandom6:
      telBoothTypeData.telBoothRandom6,
  telBoothRandom7:
      telBoothTypeData.telBoothRandom7,
  telBoothRandom8:
      telBoothTypeData.telBoothRandom8,
  telBoothRandom9:
      telBoothTypeData.telBoothRandom9,
  telBoothRandom10:
      telBoothTypeData.telBoothRandom10,
  telBoothRandom11:
      telBoothTypeData.telBoothRandom11,
  telBoothRandom12:
      telBoothTypeData.telBoothRandom12,
  telBoothRandom13:
      telBoothTypeData.telBoothRandom13,
  telBoothRandom14:
      telBoothTypeData.telBoothRandom14,


  drumcanRollingRightBarbecue:
      drumcanTypeData.drumcanRollingRightBarbecue,
  drumcanRollingRightSteak:
      drumcanTypeData.drumcanRollingRightSteak,
  drumcanRollingRightChicken:
      drumcanTypeData.drumcanRollingRightChicken,
  drumcanRollingRightHamburger:
      drumcanTypeData.drumcanRollingRightHamburger,
  drumcanRollingRightHotdog:
      drumcanTypeData.drumcanRollingRightHotdog,
  drumcanRollingRightPizza:
      drumcanTypeData.drumcanRollingRightPizza,
  drumcanRollingRightCurry:
      drumcanTypeData.drumcanRollingRightCurry,
  drumcanRollingRightSushi:
      drumcanTypeData.drumcanRollingRightSushi,
  drumcanRollingRightBanana:
      drumcanTypeData.drumcanRollingRightBanana,
  drumcanRollingRightPineapple:
      drumcanTypeData.drumcanRollingRightPineapple,
  drumcanRollingRightApple:
      drumcanTypeData.drumcanRollingRightApple,
  drumcanRollingRightOrange:
      drumcanTypeData.drumcanRollingRightOrange,
  drumcanRollingRightGrape:
      drumcanTypeData.drumcanRollingRightGrape,
  drumcanRollingRightSoftDrink1:
      drumcanTypeData.drumcanRollingRightSoftDrink1,
  drumcanRollingRightSoftDrink2:
      drumcanTypeData.drumcanRollingRightSoftDrink2,
  drumcanRollingRightBeer1:
      drumcanTypeData.drumcanRollingRightBeer1,
  drumcanRollingRightBeer2:
      drumcanTypeData.drumcanRollingRightBeer2,
  drumcanRollingRightWhisky:
      drumcanTypeData.drumcanRollingRightWhisky,
  drumcanRollingRightBeer3:
      drumcanTypeData.drumcanRollingRightBeer3,
  drumcanRollingRightGum1:
      drumcanTypeData.drumcanRollingRightGum1,

  drumcanRollingRightDiamond:
      drumcanTypeData.drumcanRollingRightDiamond,
  drumcanRollingRightGoldBar:
      drumcanTypeData.drumcanRollingRightGoldBar,
  drumcanRollingRightRuby:
      drumcanTypeData.drumcanRollingRightRuby,
  drumcanRollingRightEmerald:
      drumcanTypeData.drumcanRollingRightEmerald,
  drumcanRollingRightPearl:
      drumcanTypeData.drumcanRollingRightPearl,
  drumcanRollingRightTopaz:
      drumcanTypeData.drumcanRollingRightTopaz,
  drumcanRollingRightNecklace:
      drumcanTypeData.drumcanRollingRightNecklace,
  drumcanRollingRightWatch:
      drumcanTypeData.drumcanRollingRightWatch,
  drumcanRollingRightDollar:
      drumcanTypeData.drumcanRollingRightDollar,
  drumcanRollingRightYen:
      drumcanTypeData.drumcanRollingRightYen,
  drumcanRollingRightYenCoin:
      drumcanTypeData.drumcanRollingRightYenCoin,
  drumcanRollingRightRadio:
      drumcanTypeData.drumcanRollingRightRadio,
  drumcanRollingRightNapkin:
      drumcanTypeData.drumcanRollingRightNapkin,
  drumcanRollingRightHat:
      drumcanTypeData.drumcanRollingRightHat,
  drumcanRollingRightHammer:
      drumcanTypeData.drumcanRollingRightHammer,

  drumcanRollingRightKnife:
      drumcanTypeData.drumcanRollingRightKnife,
  drumcanRollingRightMuramasa:
      drumcanTypeData.drumcanRollingRightMuramasa,
  drumcanRollingRightPipe:
      drumcanTypeData.drumcanRollingRightPipe,

  drumcanRollingRightEmpty:
      drumcanTypeData.drumcanRollingRightEmpty,

  drumcanRollingRightRandom1:
      drumcanTypeData.drumcanRollingRightRandom1,
  drumcanRollingRightRandom2:
      drumcanTypeData.drumcanRollingRightRandom2,
  drumcanRollingRightRandom3:
      drumcanTypeData.drumcanRollingRightRandom3,
  drumcanRollingRightRandom4:
      drumcanTypeData.drumcanRollingRightRandom4,
  drumcanRollingRightRandom5:
      drumcanTypeData.drumcanRollingRightRandom5,
  drumcanRollingRightRandom6:
      drumcanTypeData.drumcanRollingRightRandom6,
  drumcanRollingRightRandom7:
      drumcanTypeData.drumcanRollingRightRandom7,
  drumcanRollingRightRandom8:
      drumcanTypeData.drumcanRollingRightRandom8,
  drumcanRollingRightRandom9:
      drumcanTypeData.drumcanRollingRightRandom9,
  drumcanRollingRightRandom10:
      drumcanTypeData.drumcanRollingRightRandom10,
  drumcanRollingRightRandom11:
      drumcanTypeData.drumcanRollingRightRandom11,
  drumcanRollingRightRandom12:
      drumcanTypeData.drumcanRollingRightRandom12,
  drumcanRollingRightRandom13:
      drumcanTypeData.drumcanRollingRightRandom13,
  drumcanRollingRightRandom14:
      drumcanTypeData.drumcanRollingRightRandom14,


  drumcanRollingLeftBarbecue:
      drumcanTypeData.drumcanRollingLeftBarbecue,
  drumcanRollingLeftSteak:
      drumcanTypeData.drumcanRollingLeftSteak,
  drumcanRollingLeftChicken:
      drumcanTypeData.drumcanRollingLeftChicken,
  drumcanRollingLeftHamburger:
      drumcanTypeData.drumcanRollingLeftHamburger,
  drumcanRollingLeftHotdog:
      drumcanTypeData.drumcanRollingLeftHotdog,
  drumcanRollingLeftPizza:
      drumcanTypeData.drumcanRollingLeftPizza,
  drumcanRollingLeftCurry:
      drumcanTypeData.drumcanRollingLeftCurry,
  drumcanRollingLeftSushi:
      drumcanTypeData.drumcanRollingLeftSushi,
  drumcanRollingLeftBanana:
      drumcanTypeData.drumcanRollingLeftBanana,
  drumcanRollingLeftPineapple:
      drumcanTypeData.drumcanRollingLeftPineapple,
  drumcanRollingLeftApple:
      drumcanTypeData.drumcanRollingLeftApple,
  drumcanRollingLeftOrange:
      drumcanTypeData.drumcanRollingLeftOrange,
  drumcanRollingLeftGrape:
      drumcanTypeData.drumcanRollingLeftGrape,
  drumcanRollingLeftSoftDrink1:
      drumcanTypeData.drumcanRollingLeftSoftDrink1,
  drumcanRollingLeftSoftDrink2:
      drumcanTypeData.drumcanRollingLeftSoftDrink2,
  drumcanRollingLeftBeer1:
      drumcanTypeData.drumcanRollingLeftBeer1,
  drumcanRollingLeftBeer2:
      drumcanTypeData.drumcanRollingLeftBeer2,
  drumcanRollingLeftWhisky:
      drumcanTypeData.drumcanRollingLeftWhisky,
  drumcanRollingLeftBeer3:
      drumcanTypeData.drumcanRollingLeftBeer3,
  drumcanRollingLeftGum1:
      drumcanTypeData.drumcanRollingLeftGum1,

  drumcanRollingLeftDiamond:
      drumcanTypeData.drumcanRollingLeftDiamond,
  drumcanRollingLeftGoldBar:
      drumcanTypeData.drumcanRollingLeftGoldBar,
  drumcanRollingLeftRuby:
      drumcanTypeData.drumcanRollingLeftRuby,
  drumcanRollingLeftEmerald:
      drumcanTypeData.drumcanRollingLeftEmerald,
  drumcanRollingLeftPearl:
      drumcanTypeData.drumcanRollingLeftPearl,
  drumcanRollingLeftTopaz:
      drumcanTypeData.drumcanRollingLeftTopaz,
  drumcanRollingLeftNecklace:
      drumcanTypeData.drumcanRollingLeftNecklace,
  drumcanRollingLeftWatch:
      drumcanTypeData.drumcanRollingLeftWatch,
  drumcanRollingLeftDollar:
      drumcanTypeData.drumcanRollingLeftDollar,
  drumcanRollingLeftYen:
      drumcanTypeData.drumcanRollingLeftYen,
  drumcanRollingLeftYenCoin:
      drumcanTypeData.drumcanRollingLeftYenCoin,
  drumcanRollingLeftRadio:
      drumcanTypeData.drumcanRollingLeftRadio,
  drumcanRollingLeftNapkin:
      drumcanTypeData.drumcanRollingLeftNapkin,
  drumcanRollingLeftHat:
      drumcanTypeData.drumcanRollingLeftHat,
  drumcanRollingLeftHammer:
      drumcanTypeData.drumcanRollingLeftHammer,

  drumcanRollingLeftKnife:
      drumcanTypeData.drumcanRollingLeftKnife,
  drumcanRollingLeftMuramasa:
      drumcanTypeData.drumcanRollingLeftMuramasa,
  drumcanRollingLeftPipe:
      drumcanTypeData.drumcanRollingLeftPipe,

  drumcanRollingLeftEmpty:
      drumcanTypeData.drumcanRollingLeftEmpty,

  drumcanRollingLeftRandom1:
      drumcanTypeData.drumcanRollingLeftRandom1,
  drumcanRollingLeftRandom2:
      drumcanTypeData.drumcanRollingLeftRandom2,
  drumcanRollingLeftRandom3:
      drumcanTypeData.drumcanRollingLeftRandom3,
  drumcanRollingLeftRandom4:
      drumcanTypeData.drumcanRollingLeftRandom4,
  drumcanRollingLeftRandom5:
      drumcanTypeData.drumcanRollingLeftRandom5,
  drumcanRollingLeftRandom6:
      drumcanTypeData.drumcanRollingLeftRandom6,
  drumcanRollingLeftRandom7:
      drumcanTypeData.drumcanRollingLeftRandom7,
  drumcanRollingLeftRandom8:
      drumcanTypeData.drumcanRollingLeftRandom8,
  drumcanRollingLeftRandom9:
      drumcanTypeData.drumcanRollingLeftRandom9,
  drumcanRollingLeftRandom10:
      drumcanTypeData.drumcanRollingLeftRandom10,
  drumcanRollingLeftRandom11:
      drumcanTypeData.drumcanRollingLeftRandom11,
  drumcanRollingLeftRandom12:
      drumcanTypeData.drumcanRollingLeftRandom12,
  drumcanRollingLeftRandom13:
      drumcanTypeData.drumcanRollingLeftRandom13,
  drumcanRollingLeftRandom14:
      drumcanTypeData.drumcanRollingLeftRandom14,


  drumcanBredKickBarbecue:
    drumcanKickTypeData.drumcanBredKickBarbecue,
  drumcanBredKickSteak:
    drumcanKickTypeData.drumcanBredKickSteak,
  drumcanBredKickChicken:
    drumcanKickTypeData.drumcanBredKickChicken,
  drumcanBredKickHamburger:
    drumcanKickTypeData.drumcanBredKickHamburger,
  drumcanBredKickHotdog:
    drumcanKickTypeData.drumcanBredKickHotdog,
  drumcanBredKickPizza:
    drumcanKickTypeData.drumcanBredKickPizza,
  drumcanBredKickCurry:
    drumcanKickTypeData.drumcanBredKickCurry,
  drumcanBredKickSushi:
    drumcanKickTypeData.drumcanBredKickSushi,
  drumcanBredKickBanana:
    drumcanKickTypeData.drumcanBredKickBanana,
  drumcanBredKickPineapple:
    drumcanKickTypeData.drumcanBredKickPineapple,
  drumcanBredKickApple:
    drumcanKickTypeData.drumcanBredKickApple,
  drumcanBredKickOrange:
    drumcanKickTypeData.drumcanBredKickOrange,
  drumcanBredKickGrape:
    drumcanKickTypeData.drumcanBredKickGrape,
  drumcanBredKickSoftDrink1:
    drumcanKickTypeData.drumcanBredKickSoftDrink1,
  drumcanBredKickSoftDrink2:
    drumcanKickTypeData.drumcanBredKickSoftDrink2,
  drumcanBredKickBeer1:
    drumcanKickTypeData.drumcanBredKickBeer1,
  drumcanBredKickBeer2:
    drumcanKickTypeData.drumcanBredKickBeer2,
  drumcanBredKickWhisky:
    drumcanKickTypeData.drumcanBredKickWhisky,
  drumcanBredKickBeer3:
    drumcanKickTypeData.drumcanBredKickBeer3,
  drumcanBredKickGum1:
    drumcanKickTypeData.drumcanBredKickGum1,

  drumcanBredKickDiamond:
    drumcanKickTypeData.drumcanBredKickDiamond,
  drumcanBredKickGoldBar:
    drumcanKickTypeData.drumcanBredKickGoldBar,
  drumcanBredKickRuby:
    drumcanKickTypeData.drumcanBredKickRuby,
  drumcanBredKickEmerald:
    drumcanKickTypeData.drumcanBredKickEmerald,
  drumcanBredKickPearl:
    drumcanKickTypeData.drumcanBredKickPearl,
  drumcanBredKickTopaz:
    drumcanKickTypeData.drumcanBredKickTopaz,
  drumcanBredKickNecklace:
    drumcanKickTypeData.drumcanBredKickNecklace,
  drumcanBredKickWatch:
    drumcanKickTypeData.drumcanBredKickWatch,
  drumcanBredKickDollar:
    drumcanKickTypeData.drumcanBredKickDollar,
  drumcanBredKickYen:
    drumcanKickTypeData.drumcanBredKickYen,
  drumcanBredKickYenCoin:
    drumcanKickTypeData.drumcanBredKickYenCoin,
  drumcanBredKickRadio:
    drumcanKickTypeData.drumcanBredKickRadio,
  drumcanBredKickNapkin:
    drumcanKickTypeData.drumcanBredKickNapkin,
  drumcanBredKickHat:
    drumcanKickTypeData.drumcanBredKickHat,
  drumcanBredKickHammer:
    drumcanKickTypeData.drumcanBredKickHammer,

  drumcanBredKickKnife:
    drumcanKickTypeData.drumcanBredKickKnife,
  drumcanBredKickMuramasa:
    drumcanKickTypeData.drumcanBredKickMuramasa,
  drumcanBredKickPipe:
    drumcanKickTypeData.drumcanBredKickPipe,

  drumcanBredKickEmpty:
    drumcanKickTypeData.drumcanBredKickEmpty,

  drumcanBredKickRandom1:
    drumcanKickTypeData.drumcanBredKickRandom1,
  drumcanBredKickRandom2:
    drumcanKickTypeData.drumcanBredKickRandom2,
  drumcanBredKickRandom3:
    drumcanKickTypeData.drumcanBredKickRandom3,
  drumcanBredKickRandom4:
    drumcanKickTypeData.drumcanBredKickRandom4,
  drumcanBredKickRandom5:
    drumcanKickTypeData.drumcanBredKickRandom5,
  drumcanBredKickRandom6:
    drumcanKickTypeData.drumcanBredKickRandom6,
  drumcanBredKickRandom7:
    drumcanKickTypeData.drumcanBredKickRandom7,
  drumcanBredKickRandom8:
    drumcanKickTypeData.drumcanBredKickRandom8,
  drumcanBredKickRandom9:
    drumcanKickTypeData.drumcanBredKickRandom9,
  drumcanBredKickRandom10:
    drumcanKickTypeData.drumcanBredKickRandom10,
  drumcanBredKickRandom11:
    drumcanKickTypeData.drumcanBredKickRandom11,
  drumcanBredKickRandom12:
    drumcanKickTypeData.drumcanBredKickRandom12,
  drumcanBredKickRandom13:
    drumcanKickTypeData.drumcanBredKickRandom13,
  drumcanBredKickRandom14:
    drumcanKickTypeData.drumcanBredKickRandom14,


  drumcanDugKickBarbecue:
    drumcanKickTypeData.drumcanDugKickBarbecue,
  drumcanDugKickSteak:
    drumcanKickTypeData.drumcanDugKickSteak,
  drumcanDugKickChicken:
    drumcanKickTypeData.drumcanDugKickChicken,
  drumcanDugKickHamburger:
    drumcanKickTypeData.drumcanDugKickHamburger,
  drumcanDugKickHotdog:
    drumcanKickTypeData.drumcanDugKickHotdog,
  drumcanDugKickPizza:
    drumcanKickTypeData.drumcanDugKickPizza,
  drumcanDugKickCurry:
    drumcanKickTypeData.drumcanDugKickCurry,
  drumcanDugKickSushi:
    drumcanKickTypeData.drumcanDugKickSushi,
  drumcanDugKickBanana:
    drumcanKickTypeData.drumcanDugKickBanana,
  drumcanDugKickPineapple:
    drumcanKickTypeData.drumcanDugKickPineapple,
  drumcanDugKickApple:
    drumcanKickTypeData.drumcanDugKickApple,
  drumcanDugKickOrange:
    drumcanKickTypeData.drumcanDugKickOrange,
  drumcanDugKickGrape:
    drumcanKickTypeData.drumcanDugKickGrape,
  drumcanDugKickSoftDrink1:
    drumcanKickTypeData.drumcanDugKickSoftDrink1,
  drumcanDugKickSoftDrink2:
    drumcanKickTypeData.drumcanDugKickSoftDrink2,
  drumcanDugKickBeer1:
    drumcanKickTypeData.drumcanDugKickBeer1,
  drumcanDugKickBeer2:
    drumcanKickTypeData.drumcanDugKickBeer2,
  drumcanDugKickWhisky:
    drumcanKickTypeData.drumcanDugKickWhisky,
  drumcanDugKickBeer3:
    drumcanKickTypeData.drumcanDugKickBeer3,
  drumcanDugKickGum1:
    drumcanKickTypeData.drumcanDugKickGum1,

  drumcanDugKickDiamond:
    drumcanKickTypeData.drumcanDugKickDiamond,
  drumcanDugKickGoldBar:
    drumcanKickTypeData.drumcanDugKickGoldBar,
  drumcanDugKickRuby:
    drumcanKickTypeData.drumcanDugKickRuby,
  drumcanDugKickEmerald:
    drumcanKickTypeData.drumcanDugKickEmerald,
  drumcanDugKickPearl:
    drumcanKickTypeData.drumcanDugKickPearl,
  drumcanDugKickTopaz:
    drumcanKickTypeData.drumcanDugKickTopaz,
  drumcanDugKickNecklace:
    drumcanKickTypeData.drumcanDugKickNecklace,
  drumcanDugKickWatch:
    drumcanKickTypeData.drumcanDugKickWatch,
  drumcanDugKickDollar:
    drumcanKickTypeData.drumcanDugKickDollar,
  drumcanDugKickYen:
    drumcanKickTypeData.drumcanDugKickYen,
  drumcanDugKickYenCoin:
    drumcanKickTypeData.drumcanDugKickYenCoin,
  drumcanDugKickRadio:
    drumcanKickTypeData.drumcanDugKickRadio,
  drumcanDugKickNapkin:
    drumcanKickTypeData.drumcanDugKickNapkin,
  drumcanDugKickHat:
    drumcanKickTypeData.drumcanDugKickHat,
  drumcanDugKickHammer:
    drumcanKickTypeData.drumcanDugKickHammer,

  drumcanDugKickKnife:
    drumcanKickTypeData.drumcanDugKickKnife,
  drumcanDugKickMuramasa:
    drumcanKickTypeData.drumcanDugKickMuramasa,
  drumcanDugKickPipe:
    drumcanKickTypeData.drumcanDugKickPipe,

  drumcanDugKickEmpty:
    drumcanKickTypeData.drumcanDugKickEmpty,

  drumcanDugKickRandom1:
    drumcanKickTypeData.drumcanDugKickRandom1,
  drumcanDugKickRandom2:
    drumcanKickTypeData.drumcanDugKickRandom2,
  drumcanDugKickRandom3:
    drumcanKickTypeData.drumcanDugKickRandom3,
  drumcanDugKickRandom4:
    drumcanKickTypeData.drumcanDugKickRandom4,
  drumcanDugKickRandom5:
    drumcanKickTypeData.drumcanDugKickRandom5,
  drumcanDugKickRandom6:
    drumcanKickTypeData.drumcanDugKickRandom6,
  drumcanDugKickRandom7:
    drumcanKickTypeData.drumcanDugKickRandom7,
  drumcanDugKickRandom8:
    drumcanKickTypeData.drumcanDugKickRandom8,
  drumcanDugKickRandom9:
    drumcanKickTypeData.drumcanDugKickRandom9,
  drumcanDugKickRandom10:
    drumcanKickTypeData.drumcanDugKickRandom10,
  drumcanDugKickRandom11:
    drumcanKickTypeData.drumcanDugKickRandom11,
  drumcanDugKickRandom12:
    drumcanKickTypeData.drumcanDugKickRandom12,
  drumcanDugKickRandom13:
    drumcanKickTypeData.drumcanDugKickRandom13,
  drumcanDugKickRandom14:
    drumcanKickTypeData.drumcanDugKickRandom14,


  drumcanJakeKickBarbecue:
    drumcanKickTypeData.drumcanJakeKickBarbecue,
  drumcanJakeKickSteak:
    drumcanKickTypeData.drumcanJakeKickSteak,
  drumcanJakeKickChicken:
    drumcanKickTypeData.drumcanJakeKickChicken,
  drumcanJakeKickHamburger:
    drumcanKickTypeData.drumcanJakeKickHamburger,
  drumcanJakeKickHotdog:
    drumcanKickTypeData.drumcanJakeKickHotdog,
  drumcanJakeKickPizza:
    drumcanKickTypeData.drumcanJakeKickPizza,
  drumcanJakeKickCurry:
    drumcanKickTypeData.drumcanJakeKickCurry,
  drumcanJakeKickSushi:
    drumcanKickTypeData.drumcanJakeKickSushi,
  drumcanJakeKickBanana:
    drumcanKickTypeData.drumcanJakeKickBanana,
  drumcanJakeKickPineapple:
    drumcanKickTypeData.drumcanJakeKickPineapple,
  drumcanJakeKickApple:
    drumcanKickTypeData.drumcanJakeKickApple,
  drumcanJakeKickOrange:
    drumcanKickTypeData.drumcanJakeKickOrange,
  drumcanJakeKickGrape:
    drumcanKickTypeData.drumcanJakeKickGrape,
  drumcanJakeKickSoftDrink1:
    drumcanKickTypeData.drumcanJakeKickSoftDrink1,
  drumcanJakeKickSoftDrink2:
    drumcanKickTypeData.drumcanJakeKickSoftDrink2,
  drumcanJakeKickBeer1:
    drumcanKickTypeData.drumcanJakeKickBeer1,
  drumcanJakeKickBeer2:
    drumcanKickTypeData.drumcanJakeKickBeer2,
  drumcanJakeKickWhisky:
    drumcanKickTypeData.drumcanJakeKickWhisky,
  drumcanJakeKickBeer3:
    drumcanKickTypeData.drumcanJakeKickBeer3,
  drumcanJakeKickGum1:
    drumcanKickTypeData.drumcanJakeKickGum1,

  drumcanJakeKickDiamond:
    drumcanKickTypeData.drumcanJakeKickDiamond,
  drumcanJakeKickGoldBar:
    drumcanKickTypeData.drumcanJakeKickGoldBar,
  drumcanJakeKickRuby:
    drumcanKickTypeData.drumcanJakeKickRuby,
  drumcanJakeKickEmerald:
    drumcanKickTypeData.drumcanJakeKickEmerald,
  drumcanJakeKickPearl:
    drumcanKickTypeData.drumcanJakeKickPearl,
  drumcanJakeKickTopaz:
    drumcanKickTypeData.drumcanJakeKickTopaz,
  drumcanJakeKickNecklace:
    drumcanKickTypeData.drumcanJakeKickNecklace,
  drumcanJakeKickWatch:
    drumcanKickTypeData.drumcanJakeKickWatch,
  drumcanJakeKickDollar:
    drumcanKickTypeData.drumcanJakeKickDollar,
  drumcanJakeKickYen:
    drumcanKickTypeData.drumcanJakeKickYen,
  drumcanJakeKickYenCoin:
    drumcanKickTypeData.drumcanJakeKickYenCoin,
  drumcanJakeKickRadio:
    drumcanKickTypeData.drumcanJakeKickRadio,
  drumcanJakeKickNapkin:
    drumcanKickTypeData.drumcanJakeKickNapkin,
  drumcanJakeKickHat:
    drumcanKickTypeData.drumcanJakeKickHat,
  drumcanJakeKickHammer:
    drumcanKickTypeData.drumcanJakeKickHammer,

  drumcanJakeKickKnife:
    drumcanKickTypeData.drumcanJakeKickKnife,
  drumcanJakeKickMuramasa:
    drumcanKickTypeData.drumcanJakeKickMuramasa,
  drumcanJakeKickPipe:
    drumcanKickTypeData.drumcanJakeKickPipe,

  drumcanJakeKickEmpty:
    drumcanKickTypeData.drumcanJakeKickEmpty,

  drumcanJakeKickRandom1:
    drumcanKickTypeData.drumcanJakeKickRandom1,
  drumcanJakeKickRandom2:
    drumcanKickTypeData.drumcanJakeKickRandom2,
  drumcanJakeKickRandom3:
    drumcanKickTypeData.drumcanJakeKickRandom3,
  drumcanJakeKickRandom4:
    drumcanKickTypeData.drumcanJakeKickRandom4,
  drumcanJakeKickRandom5:
    drumcanKickTypeData.drumcanJakeKickRandom5,
  drumcanJakeKickRandom6:
    drumcanKickTypeData.drumcanJakeKickRandom6,
  drumcanJakeKickRandom7:
    drumcanKickTypeData.drumcanJakeKickRandom7,
  drumcanJakeKickRandom8:
    drumcanKickTypeData.drumcanJakeKickRandom8,
  drumcanJakeKickRandom9:
    drumcanKickTypeData.drumcanJakeKickRandom9,
  drumcanJakeKickRandom10:
    drumcanKickTypeData.drumcanJakeKickRandom10,
  drumcanJakeKickRandom11:
    drumcanKickTypeData.drumcanJakeKickRandom11,
  drumcanJakeKickRandom12:
    drumcanKickTypeData.drumcanJakeKickRandom12,
  drumcanJakeKickRandom13:
    drumcanKickTypeData.drumcanJakeKickRandom13,
  drumcanJakeKickRandom14:
    drumcanKickTypeData.drumcanJakeKickRandom14,


  drumcanSimonsKickBarbecue:
    drumcanKickTypeData.drumcanSimonsKickBarbecue,
  drumcanSimonsKickSteak:
    drumcanKickTypeData.drumcanSimonsKickSteak,
  drumcanSimonsKickChicken:
    drumcanKickTypeData.drumcanSimonsKickChicken,
  drumcanSimonsKickHamburger:
    drumcanKickTypeData.drumcanSimonsKickHamburger,
  drumcanSimonsKickHotdog:
    drumcanKickTypeData.drumcanSimonsKickHotdog,
  drumcanSimonsKickPizza:
    drumcanKickTypeData.drumcanSimonsKickPizza,
  drumcanSimonsKickCurry:
    drumcanKickTypeData.drumcanSimonsKickCurry,
  drumcanSimonsKickSushi:
    drumcanKickTypeData.drumcanSimonsKickSushi,
  drumcanSimonsKickBanana:
    drumcanKickTypeData.drumcanSimonsKickBanana,
  drumcanSimonsKickPineapple:
    drumcanKickTypeData.drumcanSimonsKickPineapple,
  drumcanSimonsKickApple:
    drumcanKickTypeData.drumcanSimonsKickApple,
  drumcanSimonsKickOrange:
    drumcanKickTypeData.drumcanSimonsKickOrange,
  drumcanSimonsKickGrape:
    drumcanKickTypeData.drumcanSimonsKickGrape,
  drumcanSimonsKickSoftDrink1:
    drumcanKickTypeData.drumcanSimonsKickSoftDrink1,
  drumcanSimonsKickSoftDrink2:
    drumcanKickTypeData.drumcanSimonsKickSoftDrink2,
  drumcanSimonsKickBeer1:
    drumcanKickTypeData.drumcanSimonsKickBeer1,
  drumcanSimonsKickBeer2:
    drumcanKickTypeData.drumcanSimonsKickBeer2,
  drumcanSimonsKickWhisky:
    drumcanKickTypeData.drumcanSimonsKickWhisky,
  drumcanSimonsKickBeer3:
    drumcanKickTypeData.drumcanSimonsKickBeer3,
  drumcanSimonsKickGum1:
    drumcanKickTypeData.drumcanSimonsKickGum1,

  drumcanSimonsKickDiamond:
    drumcanKickTypeData.drumcanSimonsKickDiamond,
  drumcanSimonsKickGoldBar:
    drumcanKickTypeData.drumcanSimonsKickGoldBar,
  drumcanSimonsKickRuby:
    drumcanKickTypeData.drumcanSimonsKickRuby,
  drumcanSimonsKickEmerald:
    drumcanKickTypeData.drumcanSimonsKickEmerald,
  drumcanSimonsKickPearl:
    drumcanKickTypeData.drumcanSimonsKickPearl,
  drumcanSimonsKickTopaz:
    drumcanKickTypeData.drumcanSimonsKickTopaz,
  drumcanSimonsKickNecklace:
    drumcanKickTypeData.drumcanSimonsKickNecklace,
  drumcanSimonsKickWatch:
    drumcanKickTypeData.drumcanSimonsKickWatch,
  drumcanSimonsKickDollar:
    drumcanKickTypeData.drumcanSimonsKickDollar,
  drumcanSimonsKickYen:
    drumcanKickTypeData.drumcanSimonsKickYen,
  drumcanSimonsKickYenCoin:
    drumcanKickTypeData.drumcanSimonsKickYenCoin,
  drumcanSimonsKickRadio:
    drumcanKickTypeData.drumcanSimonsKickRadio,
  drumcanSimonsKickNapkin:
    drumcanKickTypeData.drumcanSimonsKickNapkin,
  drumcanSimonsKickHat:
    drumcanKickTypeData.drumcanSimonsKickHat,
  drumcanSimonsKickHammer:
    drumcanKickTypeData.drumcanSimonsKickHammer,

  drumcanSimonsKickKnife:
    drumcanKickTypeData.drumcanSimonsKickKnife,
  drumcanSimonsKickMuramasa:
    drumcanKickTypeData.drumcanSimonsKickMuramasa,
  drumcanSimonsKickPipe:
    drumcanKickTypeData.drumcanSimonsKickPipe,

  drumcanSimonsKickEmpty:
    drumcanKickTypeData.drumcanSimonsKickEmpty,

  drumcanSimonsKickRandom1:
    drumcanKickTypeData.drumcanSimonsKickRandom1,
  drumcanSimonsKickRandom2:
    drumcanKickTypeData.drumcanSimonsKickRandom2,
  drumcanSimonsKickRandom3:
    drumcanKickTypeData.drumcanSimonsKickRandom3,
  drumcanSimonsKickRandom4:
    drumcanKickTypeData.drumcanSimonsKickRandom4,
  drumcanSimonsKickRandom5:
    drumcanKickTypeData.drumcanSimonsKickRandom5,
  drumcanSimonsKickRandom6:
    drumcanKickTypeData.drumcanSimonsKickRandom6,
  drumcanSimonsKickRandom7:
    drumcanKickTypeData.drumcanSimonsKickRandom7,
  drumcanSimonsKickRandom8:
    drumcanKickTypeData.drumcanSimonsKickRandom8,
  drumcanSimonsKickRandom9:
    drumcanKickTypeData.drumcanSimonsKickRandom9,
  drumcanSimonsKickRandom10:
    drumcanKickTypeData.drumcanSimonsKickRandom10,
  drumcanSimonsKickRandom11:
    drumcanKickTypeData.drumcanSimonsKickRandom11,
  drumcanSimonsKickRandom12:
    drumcanKickTypeData.drumcanSimonsKickRandom12,
  drumcanSimonsKickRandom13:
    drumcanKickTypeData.drumcanSimonsKickRandom13,
  drumcanSimonsKickRandom14:
    drumcanKickTypeData.drumcanSimonsKickRandom14,


  flame1: otherTypeData.flame1,
  flame2: otherTypeData.flame2,
  flame3: otherTypeData.flame3,
  flame4: otherTypeData.flame4,
  flame5: otherTypeData.flame5,
  flame6: otherTypeData.flame6,
  flame7: otherTypeData.flame7,
  flame8: otherTypeData.flame8,
  flame9: otherTypeData.flame9,
  flame10: otherTypeData.flame10,
  flame11: otherTypeData.flame11,
  flame12: otherTypeData.flame12,
  flame13: otherTypeData.flame13,
  flame14: otherTypeData.flame14,
  flame15: otherTypeData.flame15,
  flame16: otherTypeData.flame16,
  flameFastest: otherTypeData.flameFastest,


  glassPanel: otherTypeData.glassPanel,


  door: otherTypeData.door,


  groupLimit: otherTypeData.groupLimit,
  cameraFOV: otherTypeData.cameraFOV,
  elevator: otherTypeData.elevator
}


export default levelEditorEnemies;