*----------------------------------------------------------------------------------------------
* Title:        FFAEE Disable Friendly Fire
* Written by:   GameHackFan
* Date:
* Description:  Disables friendly fire between players.
*----------------------------------------------------------------------------------------------

; ORG         $77A2                     ; Replace 77A2.

                                        ; Block of code that forces friendly fire between players to be ignored.
  BRA         $77E4                     ; Jumps to 77E4, which ignores the friendly fire.
  BRA         $77E4                     ; Jumps to 77E4, which ignores the friendly fire.
  BRA         $77E4                     ; Jumps to 77E4, which ignores the friendly fire.



; This code disables the friendly fire between players.
; Final Fight is a game that was designed to play with
; 2 players only, the addition of the 3rd player brought
; by FFAE makes it way too easy to hit your partner all
; the time. The changes to add the 3rd player also added
; a bug where hits among players that shouldn't happen, when 
; they are far away from each other ends up being computed
; for some reason. Disabling friendly fire is an easy way
; to deal with all of those things.
;
; 0077A2:   Disable Friendly Fire (Player)