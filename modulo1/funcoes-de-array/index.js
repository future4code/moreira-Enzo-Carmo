//Exercícios de interpretação de código
//1. O nome, o apelido, e o índice de cada item do array.
//2. Amanda Rangel, Laís Petra, Letícia Chijo
//3. Irá imprimir os nome e os apelidos de Amanda Rangel e Laís Petra, menos a de Letícia Chijo




//Exercícios de escrita de código

//1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 
 //a)

//  const nomesCachorros = pets.map((cachorro, indice, array) => {
//      return cachorro.nome
//  })
//  console.log(nomesCachorros)


//b)

// const salsichas = pets.filter((salsichas, indice, array) => {
//     return salsichas.raca === "Salsicha"

// })
// console.log(salsichas)

//c)

// function ehPoodle(Poodle, indice, array){
//     return Poodle.raca === "Poodle"
// }

// function retornaNome(item, indice, array){
//     return item.nome
// }

// const descontoPoodle = pets.filter(ehPoodle)
// const nomesPoodles = descontoPoodle.map(retornaNome)
// console.log("Você ganhou um cupom de desconto para tosar o/a", descontoPoodle, "!" )





//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 

 //a)

//  const nomesProdutos = produtos.map((Produto, indice, array) => {
     
//     return Produto.nome
//  })
//  console.log(nomesProdutos)


//b)

// const produtosComDesconto = produtos.map((item) => {
 
//  return item.nome + ' ' + item.preco * 0.95
// })
// console.log(produtosComDesconto)



//c)

// const bebidas = produtos.filter((bebida, indice, array) => {
//  return bebida.categoria === "Bebidas"
// })
// console.log(bebidas)


//d)

// const produtosYpe = produtos.filter((item, indice, array) =>{
//     return item.nome.includes("Ypê")
// })
// console.log(produtosYpe)


//e)


// const produtosYpe = produtos.filter((item, indice, array) =>{
//     return item.nome.includes("Ypê")
// })

// const compreProdutos = produtosYpe.map((item, indice, array) =>{
//     return `Compre ${item.nome} por ${item.preco}`
// })

// console.log(compreProdutos)