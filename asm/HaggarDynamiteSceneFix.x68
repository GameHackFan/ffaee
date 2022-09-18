*----------------------------------------------------------------------------------------------
* Title:        FFAEE Lock Improvement
* Written by:   GameHackFan
* Date:
* Description:  Ensures the lock will release only after all enemies are killed.
*----------------------------------------------------------------------------------------------

  JMP         $FF000.L                  ; Code to jump to the new code that handles andore color pallete (replace 5DB2).

; ORG         $D940E

                                        ; Block of code that fixes Haggar's dynamite scene.
  MOVE.B      ($13, A2), D0             ; Code from the original game.
  BEQ         $D9446                    ; Code from the original game readjusted.
  BTST        #0, D0                    ; Code from the original game.
  BEQ         $D9438                    ; Code from the original game readjusted.
  MOVE.W      #$70, ($6, A2)            ; Code from the original game.
  MOVE.W      #$A0, ($20, A2)           ; Code from the original game.
  MOVE.B      (-$1C, A2), D0            ; Stores (-$1C + A2) inside D0, player 1 character ID.
  CMP.B       #2, D0                    ; Compares 2 and D0, 2 is Haggar's ID. 
  BNE         $D945C                    ; If it is not 2, ignore the line below.
  SUB.W       #$10, (-$10, A2)          ; Subtracts 10 from (-$10 + A2), Haggar's head sprite position.
  BRA         $D945C                    ; Code from the original game.
  MOVE.W      #$100, ($6, A2)           ; Code from the original game.
  MOVE.W      #$130, ($20, A2)          ; Code from the original game.
  BRA         $D945C                    ; Code from the original game.
  MOVE.W      #$FFF0, ($6, A2)          ; Code from the original game.
  MOVE.W      #$20, ($20, A2)           ; Code from the original game.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.