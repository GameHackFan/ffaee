*----------------------------------------------------------------------------------------------
* Title:        FFAEE Lifebar Improvement
* Written by:   GameHackFan
* Date:
* Description:  Ensures all lifebar colors have their progress.
*----------------------------------------------------------------------------------------------

  JMP         $75B00.L                  ; Code to jump to the new code that handles andore color pallete (replace D6418).
  NOP
  NOP
  NOP
  NOP

                                        ; Block of code that handles the lifebar value and pallete.
  SWAP        D1                        ; Swaps D1 halves, to clean high bits.
  CLR.W       D1                        ; Clears D1 operand, to make sure no high bits are set.
  SWAP        D1                        ; Swaps D1 halves, to put the main value back.
  DIVU.W      #$91, D1                  ; Divides D1 by 91, each life bar is 90 (144).
  MOVE.L      D1, D6                    ; Stores D1 inside D6, it is already less than 91.
  CLR.W       D1                        ; Clears D1 operand.
  SWAP        D1                        ; Swaps D1 halves, the result is the rest of the division.
  LSR.W       #1, D1                    ; Code from the original game that was replaced to jump to this code.
  SWAP        D6                        ; Swaps D6 halves.
  MOVE.W      D6, D2                    ; Stores D6 inside D2, it is already less than 91.
  LSR.W       #3, D2                    ; Code from the original game that was replaced to jump to this code.
  ADD.W       D2, D1                    ; Code from the original game that was replaced to jump to this code.
  MOVE.W      D6, D2                    ; Stores D6 inside D2, it is already less than 91.
  CLR.W       D6                        ; Clears D6 operand.
  SWAP        D6                        ; Swaps D6 halves, so it now has the result of the division.
  ADD.W       #$181, D6                 ; Adds 181 to D6, 181 is the first life bar pallete.
  JMP         $D6426                    ; Goes back to the original code.