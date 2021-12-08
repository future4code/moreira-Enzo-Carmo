//Exercícios de interpretação de código
// 1. a)ele checa se o número inserido é par
//    b)números que possuem resto da divisão 0
//    c)números ímpares

// 2. a)o código diz qual o preço das frutas que o usuário inserir.
//    b)"O preço da fruta Maçã é R$2.25"
//    c)Irá dizer que a Pêra custa 5 reais.

// 3. a)Pedindo para o usuário inserir um número
//    b)Esse número passou no teste. Não será imprimido nada
//    c)O console irá falar que a variável mensagem não foi definida, pois não está em um escopo global e sim dentro de um bloco. 




//Exercícios de escrita de código

//1.

// let idadeUsuario = Number(prompt("Digite a sua idade."))


// if(idadeUsuario >= 18) {
//     console.log("Você pode dirigir.")

//     } else{
//         console.log("Você não pode dirigir.")
//     }



//2.

// const periodos = prompt("Digite se o seu período é M (Matutino), V (Vespertino) ou N (Noturno)")
// if(periodos === 'M'){
//     console.log("Bom dia!")
// } else if (periodos === 'V'){
//     console.log("Boa tarde!")
// } else if (periodos === 'N'){
//     console.log("Boa noite!")
// } else {
//     console.log("Período não encontrado")
// }

//3.

// const periodos = prompt("Digite se o seu período é M (Matutino), V (Vespertino) ou N (Noturno)")
// switch(periodos){
//     case 'M':
//         console.log("Bom dia!")
//         break
//     case 'V':
//         console.log("Boa tarde!")
//         break
//     case 'N':
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Período não encontrado")
//         break            
// }


//4.

// let generoFilme = prompt("Qual o gênero do filme que você vai assistir")
// let precoIngresso = Number(prompt("Qual o preço do ingresso?"))
// if(generoFilme === 'Fantasia'){
//     console.log("Bom filme!")
// } else{
//     console.log("Escolha outro filme :(")
// }
// if(precoIngresso <= 15){
//     console.log("Bom filme!")
// } else{
//     console.log("Escolha outro filme :(")
// }