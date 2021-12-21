// Find GreatestCommonDivisor of N Numbers
// Create a function that takes an array of numbers and returns the greatest common factor of those numbers.

// Examples
// gcd([84, 70, 42, 56]) ➞ 14

// gcd([19, 38, 76, 133]) ➞ 19

// gcd([120, 300, 95, 425, 625]) ➞ 5
// Notes
// The GCD is the largest factor that divides all numbers in the array


function gcd(array){
    var i = Math.min(...array)+1
    
    while (i--){
    
    if (array.every(x=>x%i==0)) return i;
    }
    }

console.log(gcd([84, 70, 42, 56]))
console.log(gcd([19, 38, 76, 133]) )
console.log(gcd([120, 300, 95, 425, 625]))