*----------------------------------------------------------------------------------------------
* Title:        FFAEE Lock Improvement
* Written by:   GameHackFan
* Date:
* Description:  Ensures the lock will release only after all enemies are killed.
*----------------------------------------------------------------------------------------------

  JMP         $75BA0.L                  ; Code to jump to the new code that handles andore color pallete (replace 5DB2).

; ORG         $75BA0

                                        ; Block of code that makes a different check to release the lock.
  CMP.W       #$7FFF, (A3)              ; Compare 7FFF and (A3), the enemy spawn time delay.
  BCS         $75BB2                    ; If it is lower than 7FFF, last valid time, go to last code block.
  CMP.W       #$D, ($4F10, A5)          ; Compare D and ($4F10 + A5), the enemy list empty spaces.
  BNE         $75BB2                    ; If it is not D, the enemy list is not empty, go to last code block.

                                        ; Block of code that releases the lock.
  MOVEQ       #$0, D0                   ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Code from the original game that was replaced to jump to this code.

                                        ; Block of code that keeps the lock.
  MOVEQ       #$1, D0                   ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Code from the original game that was replaced to jump to this code.



; Original check, it checks if all enemies from
; the lock were killed. New code checks if the
; data of all enemies were read and if there are
; no more enemies in the screen.
;
; CMP.W        ($C, A6), D1
; BNE          $75BB0