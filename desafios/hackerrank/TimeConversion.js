// TimeConversion
//https://www.hackerrank.com/challenges/time-conversion/problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// s: a string representing time in  hour format
// Input Format

// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .

// Constraints

// All input times are valid
// Output Format

// Convert and print the given time in -hour format, where .

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45


function timeConversion(s) {
	let i = 0;
	let fase = new Array();
	
	for ( i=0; i < s.length ; i++ ){
		fase[i] = s.charAt(i);		
	}
	
	if ( fase[fase.length-2] == 'P' ) {
		let transforma = (fase[0]+fase[1])
		let transforma2 = 12 + (transforma*1)
				
		if (transforma == 12) {
			return(`12:${fase[3]}${fase[4]}:${fase[6]}${fase[7]}` )
		} else {
			return(`${transforma2}:${fase[3]}${fase[4]}:${fase[6]}${fase[7]}` ) }
		
	} else {
		let transforma = (fase[0]+fase[1])
		
		if (transforma == 12) {
			return(`00:${fase[3]}${fase[4]}:${fase[6]}${fase[7]}` )
		} else {
			return(`${fase[0]}${fase[1]}:${fase[3]}${fase[4]}:${fase[6]}${fase[7]}` )
		 }
		
	} 
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('07:05:45AM'))
console.log(timeConversion('12:05:45PM'))
console.log(timeConversion('12:25:25AM'))
console.log(timeConversion('06:40:03AM'))
console.log(timeConversion('12:45:54PM'))





// Input (stdin)
// 12:40:22AM

// Expected Output
// 00:40:22