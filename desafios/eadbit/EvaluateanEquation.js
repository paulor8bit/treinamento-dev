// EvaluateanEquation
// Create a function that evaluates an equation.

// Examples
// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1
// Notes
// Don't print, return a value.
// Return the value, not the equation.
// The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information.


function eq(evaluate) {
    return(eval(evaluate))
}



console.log(eq("1+2"))
console.log(eq("6/(9-7)"))
console.log(eq("3+2-4"))