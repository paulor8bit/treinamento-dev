let numero = '1'


document.getElementById("cabeca").innerHTML = `Generico`
document.getElementById("titulo").innerHTML = `Titulo`
document.getElementById("saida").innerHTML = `Saida`


document.getElementById("print1").innerHTML = numero
document.getElementById("print2").innerHTML = `2`
document.getElementById("print3").innerHTML = `3`
document.getElementById("print4").innerHTML = `5`
document.getElementById("print5").innerHTML = `Print`


document.getElementById("titulo-read").innerHTML = `Read`
document.getElementById("read1").innerHTML = numero
document.getElementById("read2").innerHTML = numero
document.getElementById("read3").innerHTML = numero
document.getElementById("read4").innerHTML = numero





for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
