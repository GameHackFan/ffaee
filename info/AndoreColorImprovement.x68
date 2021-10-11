*-----------------------------------------------------------
* Title:				FFAEE Andore Color Improvement
* Written by:		GameHackFan
* Date:					
* Description:	
*-----------------------------------------------------------
	JMP					$75F00.L									; Code to jump to the new code that handles andore color pallete (replace 2CCFA).


	CMPI.B			#$3, ($13, A6)						; Compare the enemy ID and 3 (3 is Andore type).
	BNE.W				$75F28										; If it is not Andore type, go to the code from the original game below.

																				; Block that handles Andore type color id.
	MOVE.L			A3, D0										; Backups the content of A3 so we can use it (D0 is safe to use).
	MOVEQ				#$0, D1										; Cleans D1 (D1 might be safe to use).
	LEA					$75FAA, A3								; Stores the base address that contains the new color IDs of andore type enemies inside A3.
	MOVE.B			($14, A6), D1							; Stores the sub enemy ID inside D1.
	ADD.L				D1, A3										; Add D1 to A3 (sub enemy ID is used as offset to get the value of the color ID).
	MOVE.B			(A3), ($2F, A6)						; Store the andore new color id the memory location.
	MOVE.L			D0, A3										; Restores A3 value from D0.
	MOVEQ				#$0, D0										; Cleans D0.
	JMP					$2CD06										; Jumps back to the original code.

																				; Block that handle non Andore type enemies (original code).
	MOVEQ				#$0, D0										; Code from the original game that was replaced to jump to this code.
	MOVE.B			($14, A6), D0							; Code from the original game that was replaced to jump to this code.
	JMP					$2DC00										; Jumps back to where it stopped in the original code.



; After the last line (JMP) you need to add the color pallete ID values.
; The 02 value should be tested in all levels to see if it is bad or not, if not 1B).
;
; FF FF FF FF FF FF 0D 00 0E 1A 00 02