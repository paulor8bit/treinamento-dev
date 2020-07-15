// WordWithoutFirstCharacter
// Create a function that takes a word and returns the new word without including the first character.

// Examples
// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"
// Notes
// Input is valid word.


function newWord(txt) {
	// let fase = new Array();
	
	// for ( i=0; i < txt.length ; i++ ){
	// 	fase[i] = txt.charAt(i);		
	// }
	// let sumDiagonal1 = ''
	// let diagonalIndex = 1
	// for (let i in fase) {
    //     sumDiagonal1 = sumDiagonal1 + fase[diagonalIndex];
	// 	diagonalIndex = diagonalIndex +  1;
	// 	console.log(sumDiagonal1)
	// }
	
	// return sumDiagonal1
	return txt.substring(1, txt.length)
	

	
}

console.log(newWord("apple"))
console.log(newWord("plum"))