'use strict';
//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    console.log(s)
    // Complete this function
    let stringToFind = "hackerrank";
    let foundIndex=0;
    let i = 0
    for(i=0;i<s.length;i++) {
        if (foundIndex == stringToFind.length-1) {
           return "YES";
        }
        if (s[i] == stringToFind[foundIndex]) {
            foundIndex++;
        }
    }
    return "NO";
}

//Debug
// console.log(hackerrankInString(2+
//     'djaslkjdlsa'+
//     'asd'))  
// console.log(hackerrankInString('asjhackerrankkdkajsl'))
// console.log(hackerrankInString('ajskdjsal'))
// console.log(hackerrankInString('ajskdjsal'))
// console.log(hackerrankInString('asjhackerrankkdkajsdihasbasbjhsaahjajsl'))



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
