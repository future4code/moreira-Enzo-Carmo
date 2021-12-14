// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for(i = 0; i < array.length; i++) {
      let verificaPar = array[i] % 2
      if (verificaPar === 0) {
        numerosPares.push(array[i])  
      }
  }
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter((numero1)=> {
      if (numero1 % 2 === 0) {
          return numero1
      }
  })
  return numerosPares.map(numeroAoQuadrado => numeroAoQuadrado ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
    for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
          maiorNumero = array[i]
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   
    let numeroMaior  
    let maiorDivisivel 
    let menorNumero  

    if(num1 > num2){
        numeroMaior = num1
        menorNumero = num2
    }else{
        numeroMaior = num2 
        menorNumero = num1
    }

    maiorDivisivel = numeroMaior % menorNumero === 0

    const diferença = numeroMaior - menorNumero


    return {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: maiorDivisivel,
        diferenca: diferença
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   for (let i = 0; numerosPares.length < n; i++){
       if(numerosPares % 2 === 0){
         numerosPares.push()
       }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if(ladoA === ladoB && ladoB === ladoC){
     return "Equilátero"
 } else if(ladoA === ladoB && ladoB !== ladoC){
     return "Isósceles"
 } else if(ladoA !== ladoB && ladoB !== ladoC){
     return "Escaleno"
 } else{
     return "Triângulo não encontrado."
 }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.forEach((contaCliente) => {
      let totalDeCompras = 0
      contaCliente.compras.forEach((dinheiroGasto) =>{
          totalDeCompras = totalDeCompras + dinheiroGasto
      })
      contaCliente.saldoTotal = contaCliente.saldoTotal - totalDeCompras
      contaCliente.compras = []
  })
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}