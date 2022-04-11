*----------------------------------------------------------------------------------------------
* Title:				FFAEE Title Screen Tool Texts
* Written by:		GameHackFan
* Date:
* Description:	Adds extra texts to the title screen.
*----------------------------------------------------------------------------------------------

	JMP					$75E00.L									; Code to jump to the new code that adds more text in the title screen (replace 18C6).


																				; Block that adds extra text to the Title Screen.
	MOVE.W			#$00, D0									; The offset that contains the data related to the 1st text.
	LEA					$75E2C.L, A1							; The base address for the text position and data.
	JSR					$1264											; Sub routine that prints the text.
	MOVE.W			#$02, D0									; The offset that contains the data related to the 2nd text.
	LEA					$75E2C.L, A1							; The base address for the text position and data.
	JSR					$1264											; Sub routine that prints the text.
	MOVE.W			#$04, D0									; The offset that contains the data related to the 3rd text.
	LEA					$75E2C.L, A1							; The base address for the text position and data.
	JSR					$1264											; Sub routine that prints the text.
	LEA					$9096F0.L, A0							; Code from the original game that was replaced to jump to this code.
	JMP					$18CC											; Jumps back to where it stopped in the original code.



; At 75E2C, you need to add add the bytes that hold the offset
; of the texts, and at the 75E2C + offset, you should add the
; data of the texts you want.