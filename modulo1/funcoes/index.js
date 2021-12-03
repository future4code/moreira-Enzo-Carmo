//---------------Exercícios de interpretação de código---------------//
// 1. a) 10, 50
//    b) não aconteceria nada e nada seria impresso no console.
// 2.
//     a)Colocar o texto do usuário em caixa baixa, verificar se  a palavra cenoura está no texto e
//      e obter a resposta através da invocação da função junto do texto do usuário.
//     b) i.true ii.false ii.false


//---------------Exercícios de escrita de código---------------//

//1. letra A
// function sobreMim() {
//     console.log("Meu nome é Enzo, tenho 19 anos, moro no Rio de Janeiro e sou estudante")
// }
// sobreMim()

//letra B

// function dadosPessoais(nome, idade, cidade, profissao) {
// return (`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
// }
// console.log(dadosPessoais("Enzo", 19, "Rio de Janeiro", "estudante"))



//2. letra A


// function numeros (numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// const resultado = numeros(5, 40)
// console.log(numeros(5, 40))



//letra B

// function numbers(numero1, numero2){
//     const diferença = numero1 >= numero2
//     return diferença
// }
// const resultado1 = numbers(25, 45)
// console.log(numbers(5, 40))


//letra C

// function paridade(numero){
//     const resultado = numero % 2 === 0
//     return resultado
// }
// const resultadoParidade = paridade(2)
// console.log(paridade(2))


//letra D

// function mensagem(frase){
//     return frase.toUpperCase()

// }
// const fraseFeita = mensagem("Meu nome é Enzo e tenho 19 anos.")
// console.log(fraseFeita.length, fraseFeita)



//3.

function adição(numero1, numero2){
    let soma = numero1 + numero2
    return soma
}

function subtração(numero1, numero2){
    let diferença = numero1 - numero2
    return diferença
}

function multiplicação(numero1, numero2){
    let multiplicado = numero1 * numero2
    return multiplicado
}

function divisão(numero1, numero2){
    let dividido = numero1 / numero2
    return dividido
}

const perguntaUsuario1 = Number(prompt("Insira um número"))
const perguntaUsuario2 = Number(prompt("Insira um segundo número"))

console.log("Números inseridos:", perguntaUsuario1, "e", perguntaUsuario2)

let resultadoSoma = adição(perguntaUsuario1, perguntaUsuario2)
let resultadoSub =  subtração((perguntaUsuario1, perguntaUsuario2))
let resultadoMult = multiplicação((perguntaUsuario1, perguntaUsuario2))
let resultadoDiv = divisão((perguntaUsuario1, perguntaUsuario2))

console.log(adição(perguntaUsuario1, perguntaUsuario2))
console.log(subtração(perguntaUsuario1, perguntaUsuario2))
console.log(multiplicação(perguntaUsuario1, perguntaUsuario2))
console.log(divisão(perguntaUsuario1, perguntaUsuario2))