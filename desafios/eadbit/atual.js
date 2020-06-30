//Alunos de classificação
//https://www.hackerrank.com/challenges/grading/problem

// Aluna  recebeu um e o próximo múltiplo de  de  é . Desde a, a nota do aluno é arredondada para .
// Aluna  recebeu um e o próximo múltiplo de  de  é . Desde a, a nota não será modificada e a nota final do aluno será .
// Aluna  recebeu um e o próximo múltiplo de  de  é . Desde a, a nota do aluno será arredondada para .
// Aluna  recebeu uma nota abaixo , para que a nota não seja modificada e a nota final do aluno seja .

function gradingStudents(grades) {
    let transformaInteiro10 = 0
    let numeros = []
    grades.forEach( n => {
        if( n < 38 ) { numeros.push(n)}
        else if( n > 37 && n % 5 == 0) {
            numeros.push(n)
        } else { 
            transformaInteiro10 = (((parseInt(n/10)*10)+10)-n)
                if (transformaInteiro10 > 4) {
                    if ((transformaInteiro10-5) < 3) 
                    {numeros.push(n+transformaInteiro10-5)}
                    else { numeros.push(n)}
                    
                 } else { 
                     if (transformaInteiro10 < 3)
                      {numeros.push(n+transformaInteiro10)}
                      else { numeros.push(n)}
                    
                 }
        }

    } )
    return numeros

    }

// gradingStudents(grades){
//     return grades.map((n) => {
//         let diff = 5 - (n % 5);
//         if(diff < 3 && n >= 38) {
//             n += diff;
//         }
        
//         return n;
//     })
// }
 
 

 console.log(gradingStudents([ 73, 67, 38, 33]))

