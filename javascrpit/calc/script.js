console.log("Ola mundo")

// let r1 = 1

// let r2 = 2

// let inputN1 = document.getElementById("n1");

// let inputN2 = document.getElementById("n2");

// function calculator() {
//     console.log("Calculand...");

//     let = n1 

// }

// function inputN(input) {
//     let n1 = document.getElementsByClassName("a")[0];
//     r1 = n1.innerText = input.value;
//     p = r1*1
//     let n2 = document.getElementsByClassName("b")[0];
//     r2 = n2.innerText = input.value;
//     r = r2 *1 

//     console.log(n1+n2)
    
// }


function calcular() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var somamais = document.getElementById("soma")
    somamais.textContent =  String(n1 + n2)
    if (somamais.textContent === undefined) {
       somamais.textContent =  String(n1 + n2)
    }
    else {
       somamais.innerText = (String(n1 + n2)).toFixed(2)
    }
}




    // let num1 = document.getElementsByClassName("n1")[0];
    // let num2 = document.getElementsByClassName("n2")[0];
    // let numero1 = parseInt(num1.textContent);
    // let numero2 = parseInt(num2.textContent);
    // let soma = numero1+numero2;
    
    // document.getElementById("soma").innerHTML = (soma)
    // document.getElementById("soma").innerHTML = `${soma} `

    


