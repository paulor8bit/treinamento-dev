// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) {
	let juncao = ''
	for (var i = 0; i < arr.length; i++) {
   juncao = juncao + arr[i]
} 
return juncao
}


console.log(arrayToString([1,2,3,4,5,6]))