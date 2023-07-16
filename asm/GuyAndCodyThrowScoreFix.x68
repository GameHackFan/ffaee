*----------------------------------------------------------------------------------------------
* Title:        FFAEE Guy and Cody Throw Score Fix
* Written by:   GameHackFan
* Date:
* Description:  Fixes the amount of points Guy and Cody gets
*               when they throw an enemy.
*----------------------------------------------------------------------------------------------

; ORG         $CF14                     ; Replace CF14.

                                        ; Block of code that fixes the amount of points Guy and Cody gets after throwing an enemy.
  MOVE.W      #$D, D0                   ; Code from the original FF that was forgotten to be executed.
  JMP         $D9C4E                    ; Code from FFAE.


; This code fixes the throw score bug brought by Final Fight
; AE version, Guy and Cody in the original game gets 300
; points when they throw an enemy, in Final Fight AE, a value
; was forgotten to be set to the D0 register, because of that
; the game was computing 10000 instead of 300 points.
;
; 00CF14:   Fixes Guy And Cody Throw Score