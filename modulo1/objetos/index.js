//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


// 1.console.log("Matheus Nachtergaele",)
//   console.log("Virginia Cavendish")
//   console.log("Globo", "14h")


// 2. console.log("Juca, 3, SRD")
//    console.log("Juba", 3, "SRD")
//    console.log("Jubo", 3, "SRD")
//    b)Copia o objeto, fazendo possível com que se altere qualquer valor sem mudar o que já foi estabelecido e sem ter que copiar tudo outra vez.


//3. console.log(false)
//   console.log(undefined)
//   O valor impresso no console foi este pois os parâmetros da função não foram definidos e nem a altura no objeto.



//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
//  const pessoa = {
//      nome: "Amanda",
//       apelidos: ["Amandinha", "Mandinha", "ou", "Mandi"]
//  }

//  function imprimeMensagem(pessoa) {
//      console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
//  }

//  //console.log(imprimeMensagem(pessoa))

//  const novosApelidos = {
//      ...pessoa,
//     apelidos: ["Dinha", "Mandy", "Manda"]
//  }

//  console.log(imprimeMensagem(novosApelidos))




//2.

// const pessoa1 = {
//     nome: "Enzo",
//     idade: 19,
//     profissao: "Estudante"
// }

// const pessoa2 = {
//     nome: "Marcos",
//     idade: 28,
//     profissao: "Garçom" 
// }

// function imprimeInfo(pessoa) {
//    let array= []
//    array.push(pessoa.nome)
//    array.push(pessoa.nome.length)
//    array.push(pessoa.idade)
//    array.push(pessoa.profissao)
//    array.push(pessoa.profissao.length)

//    return array
// }

// console.log(imprimeInfo(pessoa1))
// console.log(imprimeInfo(pessoa2))



//3.

let carrinho= []