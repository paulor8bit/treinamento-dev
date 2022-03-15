// a + b = soma

let a = 5
let b = 1
let soma = a+b


document.getElementById("a").innerHTML = `${a} +  `  
document.getElementById("b").innerHTML = `${b}  = `  
document.getElementById("soma").innerHTML = `${soma} `  


let n1 = document.getElementsByClassName("n1")[0];
let n2 = document.getElementsByClassName("n2")[0];
let numero1 = parseInt(n1.textContent);
let numero2 = parseInt(n2.textContent) ;
let somaa = numero1+numero2
document.getElementById("somaa").innerHTML = `${somaa} `  
