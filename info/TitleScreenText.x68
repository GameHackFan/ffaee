*-----------------------------------------------------------
* Title:				FFAEE Title Screen Tool Texts
* Written by:		GameHackFan
* Date:
* Description:
*-----------------------------------------------------------
	JMP					$75E00.L									; Code to jump to the new code that adds more text in the title screen (replace 18C6).


																				; Block that adds extra text to the Title Screen.
	MOVE.W			#$00, D0									; The offset that contains the data related to the first text.
	LEA					$75E2C.L, A1							; The base address for the text position and data.
	JSR					$1264											; Sub routine that prints the text.
	MOVE.W			#$02, D0									; The offset that contains the data related to the second text.
	LEA					$75E2C.L, A1							; The base address for the text position and data.
	JSR					$1264											; Sub routine that prints the text.
	LEA					$9096F0.L, A0							; Code from the original game that was replaced to jump to this code.
	JMP					$18CC											; Jumps back to where it stopped in the original code.


; After the last line (JMP) you need to add the text code for the randomizer or the level editor.
; For the level editor, add the hex below:

; 1A 0C 52 00 4D 4F 43 20 73 75 6F 74 69 6D 65 7A
; 20 64 79 62 74 20 65 68 4C 20 76 65 6C 65 45 20
; 69 64 6F 74 20 72 76 20 2E 30 00 32 FF FF FF FF


; For the randomizer, add the hex below:

; 1A 0B 52 00 6E 61 6F 64 69 6D 65 7A 20 72 4C 52
; 4C 56 2A 20 2A 2A 2A 2A 2A 2A 2A 2A 2A 2A 2A 2A
; 2A 2A 2A 2A 2A 2A 20 2A 76 20 2E 30 00 32 FF FF