
const customers: Customer = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaCustomer(array: Customer) {
    const customerFilter = array.filter((customer) => {
        const debitValue = customer.debitos.reduce((account, value) =>
        { return account + value }, 0)
        
        const balance = customer.saldoTotal - debitValue
        return balance < 0
    })

    const negativeCustomers = customerFilter.map((customer) => {
        const debitValue = customer.debitos.reduce((account, value) => 
        { return account + value }, 0)
        
        customer.saldoTotal = customer.saldoTotal - debitValue
        customer.debitos = []

        return customer
    })

    return negativeCustomers
}


type Customer = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}[]


console.log(retornaCustomer(customers))

