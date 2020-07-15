https://www.hackerrank.com/challenges/a-very-big-sum/problem


// Complete the dayOfProgrammer function below.
function aVeryBigSum(ar) {
	var result = 0; 
	var x = 0; 
	for(var i = 1; i<= ar.length; i++){
		 var newArray = ar.slice(x, i); 
		 x++; 
		 var result = parseInt(result) + parseInt(newArray); }
	return result;
	}
	//Debug
	
	console.log(aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]))
	
	
	
	