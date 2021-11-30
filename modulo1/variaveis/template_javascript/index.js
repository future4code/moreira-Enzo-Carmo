// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

//EXERCÍCIO 1: a resposta é (10, 5)
//EXERCÍCIO 2: a reposta é (10, 10 ,10)
//EXERCÍCIO 3: p = expediente, t = salário.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

//EXERCÍCIO 1//

let nome = null
let idade = null
console.log (typeof(nome, idade)) 
/* O tipo das variáveis é Object, não sei o porquê de ser Object pois ainda não foi visto no curso. */

/*nome = prompt("Qual o seu nome?")
idade = Number( prompt("Qual a sua idade?"))
console.log (typeof nome)
console.log(typeof idade)
 Percebi que o tipo da variável nome no console é um string e a variável idade é um Number no console também. 
console.log ("Olá", nome, "você tem", idade, "anos.")*/ 

//EXERCÍCIO 2//
let pergunta1 = "Você foi ao Banheiro hoje?"
let pergunta2 = "Você almoçou hoje?"
let pergunta3 = "Você levou o lixo pra fora?"

let resposta1 = "Sim"
let resposta2 = "Sim"
let resposta3 = "Não"

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3)

//EXERCÍCIO 3//

let a = 10
let b = 25
let c = a
a = b
b = c


// Crei uma nova variável c para poder inverter os valores de a e b.

// Depois de trocados, teremos o seguinte resultado:
/*-console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10*/

