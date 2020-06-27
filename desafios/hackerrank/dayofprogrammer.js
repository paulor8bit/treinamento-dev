//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
if (year === 2017) {
return '13.09.'+year    
} else {
return '12.09.'+year
}

}

//Debug

console.log('Com ano de 2017:  ' + dayOfProgrammer(2017))
console.log('Com ano de 2018:  ' + dayOfProgrammer(2018))



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
