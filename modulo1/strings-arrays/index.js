//------------------Exercícios de interpretação de código------------------//

//1. a)a.undefined
//   b)b.null
//   c)c.11
//   d)d.3
//   e)e.(11)
//   f)f.9


//2. SUBI NUM ÔNIBUS EM MIRROCOS 27
//   

//------------------Exercícios de escrita de código------------------//

//1.

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu email?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

//2.

const comidasPreferidas = ["Frango empanado", "Churrasco", "Pizza", "Hambúrger", "Peixe"]
console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaUsuario = prompt("Qual é a sua comida favorita?")
comidasPreferidas[1] = comidaUsuario
console.log(comidasPreferidas)


//3.



let listaDeTarefas = [0]
let tarefa1 = prompt("Diga uma tarefa que você precisa realizar no dia.")
let tarefa2 = prompt("Diga uma segunda tarefa que você precisa realizar no dia.")
let tarefa3 = prompt("Diga uma terceira tarefa que você precisa realizar no dia.")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
let perguntaUsuario = prompt("Digite o índice de uma tarefa que você já realizou.")
console.log(perguntaUsuario)
listaDeTarefas.splice(1, 1)
console.log(listaDeTarefas)


