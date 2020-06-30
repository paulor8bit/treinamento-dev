//Alunos de classificação
//https://www.hackerrank.com/challenges/grading/problem



function gradingStudents(grades) {
    let transformaInteiro10 = 0
    let numeros = []
    grades.forEach( n => {
        if( n < 38 ) { numeros.push(n)} //Em alguns problemas é console.log
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

