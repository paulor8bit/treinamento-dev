// FliptheBoolean
// Booleans can also be written as integers, where 1 = True and 0 = False. Make a function that returns the opposite of the boolean given.

// Examples
// flipBool(true) ➞ 0

// flipBool(false) ➞ 1

// flipBool(1) ➞ 0

// flipBool(0) ➞ 1

function flipBool(b) {
    if (b) {return 0}
    else {return 1}
}

console.log(flipBool(true))
console.log(flipBool(false))
console.log(flipBool(1))
console.log(flipBool(0) )

