*----------------------------------------------------------------------------------------------
* Title:        FFAEE Disable Any Drop To Treasure Conversion
* Written by:   GameHackFan
* Date:
* Description:  Disables any drop being converted to treasure.
*----------------------------------------------------------------------------------------------

; ORG         $5A8E6                    ; Replace 5A8E6.

                                        ; Block of code that disables any drop being converted to treasure.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.



; This code disables the feature that converts any drop
; to a treasure if the player presses any direction or the
; jump button 1 frame before the drop code is executed.
;
; 05A8E6:   Disable Any Drop To Treasure Conversion