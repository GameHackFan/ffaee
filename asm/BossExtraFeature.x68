*----------------------------------------------------------------------------------------------
* Title:        FFAEE Boss Extra Feature
* Written by:   GameHackFan
* Date:
* Description:  Not used. An attempt to bring bosses as sub-bosses.
*----------------------------------------------------------------------------------------------

  JMP         $75D20.L                  ; Code to jump to the new code that handles extra bosses (replace 6210).

; ORG         $75D20
                                        ; Block of code that handles calling the correct spawn routine.
  CMPI.B      #$4, ($6, A3)             ; Compares 4 and ($6 + A3), the character type
  BNE         $75D9C                    ; If it is not 4, it is not a boss, go to the last block of code.
  MOVE.W      ($8, A3), D0              ; Stores ($8 + A3) inside D0, posture ID of the character.
  MULU.W      #$2, D0                   ; Multiplies D0 by 2, extra boss posture ID will be 1+.  
  LEA         $75D00, A5                ; Stores 75D00 inside A5, spawn routine base address.
  MOVE.W      (A5, D0.W), D2            ; Stores (A5 + D0.W) inside D2, the spawn routine address.
  JMP         (A5, D2.W)                ; Jumps to the extra boss spawn routine.

                                        ; Block of code that handles Damnd's spawn.
  MOVE.W      #$200, ($2, A4)           ; Stores 200 inside ($2 + A4), character current action.
  MOVE.W      #$19, ($2E, A4)           ; Stores 19 inside ($2E + A4), character color pallete id.
  MOVE.W      #$47E, ($3A, A4)          ; Stores 47E inside ($3A + A4), half of a needed address.
  MOVE.W      #$59D, ($5E, A4)          ; Stores 47E inside ($5E + A4), half of a needed address.
  MOVE.W      #$4, ($A4, A4)            ; Stores 4 inside ($A4 + A4), damnd whistle flag, 0 for 2, 2 for 1, 4 for 0.
  BRA         $75D9C                    ; Jumps to the last block of code.

                                        ; Block of code that handles Edi E.'s spawn.
  MOVE.W      #$202, ($2, A4)           ; Stores 202 inside ($2 + A4), character current action.
  MOVE.W      #$1D, ($2E, A4)           ; Stores 1D inside ($2E + A4), character color pallete id.
  CMP.B       #$03, ($BE, A5)           ; Compares 3 and ($BE + A5), level ID.
  BNE         $75D50                    ; If it is not 3 (Industrial Area), ignore the code line below.
  MOVE.W      #$11, ($2E, A4)           ; Stores 11 inside ($2E + A4), character color pallete id.
  MOVE.W      #$88BA, ($3A, A4)         ; Stores 88BA inside ($3A + A4), half of a needed address.
  MOVE.W      #$897D, ($5E, A4)         ; Stores 897D inside ($5E + A4), half of a needed address.
  BRA         $75D9C                    ; Jumps to the last block of code.

                                        ; Block of code that handles Abigail's spawn.
  MOVE.W      #$202, ($2, A4)           ; Stores 202 inside ($2 + A4), character current action.
  MOVE.W      #$10, ($2E, A4)           ; Stores 10 inside ($2E + A4), character color pallete id.
  MOVE.W      #$E6F4, ($3A, A4)         ; Stores E6F4 inside ($3A + A4), half of a needed address.
  MOVE.W      #$E82C, ($5E, A4)         ; Stores E82C inside ($5E + A4), half of a needed address.

                                        ; Block of code that is a base to spawn the characters.
  ADD.W       #$10, D0                  ; Adds 10 to D0, line that contains the character HP.
  MOVE.W      (A5, D0.W), D2            ; Stores (A5 + D0.W) inside D2, character HP.
  MOVE.W      D2, ($18, A4)             ; Stores D2 inside ($18 + A4), character current HP.
  MOVE.W      D2, ($1A, A4)             ; Stores D2 inside ($1A + A4), character current HP.
  MOVE.W      D2, ($1C, A4)             ; Stores D2 inside ($1C + A4), character starting HP.
  MOVE.W      #$101, (A4)               ; Stores 101 inside (A4), character active flag.
  MOVE.W      #$4, D2                   ; Stores 4 inside D2.
  MOVE.W      D2, ($38, A4)             ; Stores D2 inside ($38 + A4), half of a needed address.
  MOVE.W      D2, ($5C, A4)             ; Stores D2 inside ($5C + A4), half of a needed address.
  MOVE.W      #$01, ($80, A4)           ; Stores D2 inside ($5C + A4), half of a needed address.

                                        ; Block that restore data and execute replaced code.
  LEA         $FFFF8000.L, A5           ; Stores FFFF8000 inside A5, previous value.
  MOVE.W      ($0A, A4), D2             ; Stores ($A + A4) inside D2, previous value.
  MOVE.B      ($07, A3), ($13, A4)      ; Code from the original game that was replaced to jump to this code.
  JMP         $6216.L                   ; Returns back to the original code.


; Damnd is very buggy, his AI works well only on his area
; and his collisions too.
; Remove him calling his friends.
; Modify his AI.
; Fix his collisions.
; With fixes, maybe can be added.
;
; Sodom spawns with his swords, unless removing it.
; Remove his swords?
; With fixes, Maybe can be added?.
;
; Edi E. is quite clean and could be easily added.
; Remove him running and shooting.
; With fixes, maybe can be added.
; 
; Rolento replaces some enemies palletes.
; Maybe I shouldn't add him?
; 
; Abigail replaces the stage boss pallete.
; Bred Type pallete is good for him, maybe with fixes.
; Forbid him to make pallete changes.
; With fixes, maybe can be added.
; 
; Belger is very buggy too, he works better where he spawns,
; Maybe I shouldn't add him?