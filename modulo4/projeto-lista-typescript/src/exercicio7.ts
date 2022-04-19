

const produtos :Product = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type Product = {
    nome: string,
    quantidade: number, 
    valorUnitario: number | string 
}[]


const fixPrice = (price :number): string => {
	const fixedValue: string = price.toFixed(2).replace('.', ',')
	return "R$" + fixedValue
}

function order(array: Product) :Product {
    const fixedPrice = array.map((product) => {
        product. valorUnitario = fixPrice(product.valorUnitario as number)
        return product
    })

    const ordered = fixedPrice.sort((a, b) => {
        return a.quantidade - b.quantidade
    })

    return ordered
}

console.log(order(produtos))