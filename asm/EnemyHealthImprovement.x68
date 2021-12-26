*-----------------------------------------------------------
* Title:				FFAEE Enemy Health Improvement
* Written by:		GameHackFan
* Date:					
* Description:	
*-----------------------------------------------------------

	JSR					$75B50.L									; Code to jump to the new code that handles andore color pallete (replace D6FCA).
	NOP
	NOP
	NOP

;	ORG					$75B50

																				; Block of code that handles the increase of the health.
	CMP.B				#$04, ($12, A6)						; Compares 4 and ($12 + A6), the character type
	BHI					$75B70										; If it is bigger than 4, it is not an enemy, go to the last block of code.
	BEQ					$75B6C										; If it is equals 4, a boss, go to 4th block of code.

	CMP.W				#$A0, D1									; Compares A0 and D1, the current character health.
	BCS					$75B66										; If it is lower than 90, go to the 3rd block of code.

																				; Block of code that increases the health by 46 (70)
	ADD.W				#$46, D1									; Increases the character health by 46.
	BRA					$75B70										; Jumps to the last block of code.

																				; Block of code that increases the health by 64 (100)
	ADD.W				#$64, D1									; Increases the character health by 64.
	BRA					$75B70										; Jumps to the last block of code.

																				; Block of code that increases the health by 12C (300)
	ADD.W				#$12C, D1									; Increases the character health by 12C.

																				; Block of code from the original that was replaced.
	CMP.W				#$487, D1									; Compares 487 and D1, maximum health before lifebar color bugs.
	BLS					$75B7A										; If it is lower or the same, ignore the line below.
	MOVE.W			#$487, D1									; Stores 487 inside D1, maximum health value.
	MOVE.W			D1, ($18, A6)							; Stores D1 inside D6, it is already less than 91.
	MOVE.W			D1, ($1a, A6)							; Stores D1 inside D6, it is already less than 91.
	MOVE.W			D1, ($1c, A6)							; Stores D1 inside D6, it is already less than 91.
	RTS																		; Goes back to the original code.