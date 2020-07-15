function solution(number){
    let sum = [];
    let i;
    let a = parseInt(i)
    for (i=0; i < number; i++) {
    if (parseInt(i)%3 === 0 ||parseInt(i)%5 === 0) {
    sum.push(parseInt(i));
    var result = sum.reduce(function(a, b){
    return a + b;
    }, 0);
    }
    }
    return result;
    }
    console.log(solution(10));