
enum Sector{
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro',
}



type Colaborators = {
    nome: string,
    salário: number,
    setor: Sector,
    presencial: boolean
}[]




const colaboratorsList :Colaborators = [
	{ nome: "Marcos", salário: 2500, setor: Sector.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Sector.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Sector.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Sector.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Sector.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Sector.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Sector.MARKETING, presencial: true }
]


function workingColaborators(item: Colaborators): Colaborators{
    const filter = item.filter((colaborator) =>{
        return colaborator.setor === Sector.MARKETING && colaborator.presencial === true
    })
    return filter
}

console.log(workingColaborators(colaboratorsList))

