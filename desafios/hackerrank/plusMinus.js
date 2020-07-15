// Formato de entrada
//https://www.hackerrank.com/challenges/plus-minus/problem
// A primeira linha contém um número inteiro, , denotando o tamanho da matriz.
// A segunda linha contém inteiros separados por espaço que descrevem uma matriz de números .

// Restrições



// Formato de saída

// Você deve imprimir o seguinte  linhas:

// Um decimal que representa a fração de números positivos na matriz em comparação com seu tamanho.
// Um decimal que representa a fração de números negativos na matriz em comparação com seu tamanho.
// Um decimal que representa a fração de zeros na matriz em comparação com seu tamanho.
// Entrada de amostra

// 6
// -4 3 -9 0 4 1         
// Saída de amostra

// 0.500000
// 0.333333
// 0.166667
// Explicação

// tem  números positivos,  números negativos e zero na matriz.
// As proporções de ocorrência são positivas: , negativo:  e zeros: 


function plusMinus(arr) {
    let pos = 0, neg = 0 , zero = 0 , length = arr.length
    arr.forEach( n => {
        if( n > 0 )
            pos++
        else if( n < 0 )
            neg++
        else
            zero++
    } )
    
    console.log( (pos / length).toFixed(6) )
    console.log( (neg / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
    }


    //debug
    plusMinus([ -4, 3, -9, 0, 4, 1 ])
    console.log('---------')
    plusMinus([ 1, 2, 3, -1, -2, -3, 0, 0 ])