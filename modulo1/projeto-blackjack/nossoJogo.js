/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!")

const comecaOJogo = confirm("Deseja iniciar uma nova rodada?")

const primeiraCarta = comprarCarta()
const segundaCarta = comprarCarta()
const terceiraCarta = comprarCarta()
const quartaCarta = comprarCarta()
const somaCartasDoUsuario = primeiraCarta.valor + segundaCarta.valor
const somaCartasDoComputador = terceiraCarta.valor + quartaCarta.valor

console.log("Usuário - cartas:", primeiraCarta.texto , segundaCarta.texto, "- pontuação:", somaCartasDoUsuario)
console.log("Computador - cartas:", terceiraCarta.texto , quartaCarta.texto, "- pontuação:", somaCartasDoComputador)

if(somaCartasDoUsuario > somaCartasDoComputador){
   console.log("Parabéns, o Usuário ganhou!")
} else if(somaCartasDoUsuario === somaCartasDoComputador){
   console.log("Empate!")
} else{
   console.log("Parabéns, o Computador ganhou!")
}
