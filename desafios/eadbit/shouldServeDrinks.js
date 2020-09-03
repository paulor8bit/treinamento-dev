// Bebidas são permitidas?
// Um bartender está escrevendo um programa simples para determinar se deve servir bebidas para alguém. Ele só serve bebidas para maiores de 18 anos e quando não está de folga .

// Dada a idade da pessoa e se o intervalo está em andamento, crie uma função que retorne se ela deve servir bebidas.

// Exemplos
// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false
// Notas
// Retorno trueou false.
// Alguns países têm uma idade ligeiramente superior para beber, mas para os fins deste desafio, será de 18 anos .

//true esta trabalhando



function shouldServeDrinks(age, onBreak) {
	return onBreak ? false : (age < 18 ? false : true )
}

console.log(shouldServeDrinks(30, true))
console.log(shouldServeDrinks(19, false))
console.log(shouldServeDrinks(30, true))
console.log(shouldServeDrinks(3, false))