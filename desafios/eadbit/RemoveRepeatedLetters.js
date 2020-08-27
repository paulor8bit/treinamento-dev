// RemoveRepeatedLetters
// Create a function that replaces all consecutively repeated letters in a word with single letters.

// Examples
// removeRepeats("aaabbbccc") ➞ "abc"

// removeRepeats("bookkeeper") ➞ "bokeper"

// removeRepeats("nananana") ➞ "nananana"
// Notes
// N/A

function removeRepeats(str) {
	return str.replace(/(.)\1+/gi,x=>x[0])
}
console.log(removeRepeats("aaabbbccc"))

