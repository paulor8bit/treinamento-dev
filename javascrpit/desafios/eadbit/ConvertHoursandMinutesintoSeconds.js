// ConvertHoursandMinutesintoSeconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0



function convert(hours, minutes) {
    let total  = (hours*60*60)+(minutes*60)
    return total
}

console.log(convert(1, 3))