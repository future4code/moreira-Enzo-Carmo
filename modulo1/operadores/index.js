//------------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO------------//
//1. A) console.log(false)
//   B) console.log(false)
//   C) console.log(false)

//2. O código irá tratar as duas variáveis como strings ao invés de números.
//3. Ele deveria colocar Number antes de prompt, assim o console irá reconhecer as variáveis declaradas como números e conta poderá ser feita.


//------------EXERCÍCIOS DE ESCRITA DE CÓDIGO------------//
//1.
let idadeDoUsuario = Number(prompt("Qual a sua idade?"))
let idadeDoAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
console.log("Sua idade é maior que a do seu melhor amigo?", idadeDoUsuario >= idadeDoAmigo)
let diferençaDeIdade = idadeDoUsuario - idadeDoAmigo
console.log("A diferença de idade entre vocês dois é de:", diferençaDeIdade)


//2.
let numeropar = Number(prompt("Insira um número par"))
console.log(numeropar)
let restoDaDivisao = numeropar % 2
console.log("O resto da divisão é:", restoDaDivisao)
// O resto da divisão por números pares sempre foi 0 e quando foi dividido por números ímpares foi 1.


//3.
let idadeUsuarioAnos = Number(prompt("Quantos anos você tem?"))
console.log(idadeUsuarioAnos)
console.log("Idade em meses:", idadeUsuarioAnos * 12)
console.log("Idade em dias", idadeUsuarioAnos * 365)
console.log("Idade em horas", idadeUsuarioAnos * 8760)


//4.
let numero1 = Number(prompt("Insira um número"))
let numero2 = Number(prompt("Insira outro número"))
console.log(numero1, numero2)
console.log(numero1 > numero2)
console.log(numero1 === numero2)
console.log(numero1 % numero2 === 0)
console.log(numero2 % numero1 === 0)