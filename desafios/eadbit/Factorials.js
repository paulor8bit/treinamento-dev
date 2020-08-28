// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.

// Examples
// factorial(5) ➞ 120

// factorial(3) ➞ 6

// factorial(1) ➞ 1

// factorial(0) ➞ 1
// Notes
// N/A

function factorial(n) {
    let fac = 1
    for (var i = 1; i < n+1; i++) {
        fac = fac * i
        
     } 
     return fac
    
}
//let factorial = n => n ? n * factorial(--n) : 1;
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(0))