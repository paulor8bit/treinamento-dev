//https://www.hackerrank.com/challenges/diagonal-difference/problem


// Complete the dayOfProgrammer function below.
function diagonalDifference(arr) {
	let diagonalIndex = 0;
    let sumDiagonal1 = 0;
	let sumDiagonal2 = 0;
	
	
	for (let i in arr) {
        sumDiagonal1 = sumDiagonal1 + arr[i][diagonalIndex];
        diagonalIndex = diagonalIndex +  1;
    }
	
    diagonalIndex = arr[0].length -1;
    for (let i in arr) {
        sumDiagonal2 = sumDiagonal2 + arr[i][diagonalIndex];
        diagonalIndex = diagonalIndex - 1;
    }
	
	
	return Math.abs(sumDiagonal1-sumDiagonal2)
	}
	

	
console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))

	
	