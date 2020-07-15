// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


function comp(str1, str2) {
    return str1.length === str2.length
}

console.log(comp('AB', 'DC' ))
console.log(comp('AAB', 'DC' ))
// x.length