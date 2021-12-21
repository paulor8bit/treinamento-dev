// Are the NumbersEqual?
// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false
// Notes
// Don't forget to return the result.


function isSameNum(num1, num2) {
    if (num1%num2 == 0
       && (typeof(num1) == 'number') && (typeof(num2) == 'number')
       && (num1 != 0) 
       ){
		
		return true
		
    } else {
        return false
    }
}

console.log(isSameNum(4, 8))
console.log(isSameNum(2, 2))
console.log(isSameNum(2, "2"))
console.log(isSameNum(0, 6))
