// IstheNumberLess0?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ truenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information.
function lessThanOrEqualToZero(num) {
	return num <= 0 ? true : false
}

console.log(lessThanOrEqualToZero(5))
