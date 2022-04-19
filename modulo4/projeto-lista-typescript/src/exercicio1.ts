type Person = {
    name: string,
    birthDate: string,
};

const printInfo = (person: Person) => {
    const info: string[] = person.birthDate.split("/")
    console.log(`Olá me chamo ${person.name}, nasci no dia ${info[0]} do mês de ${info[1]} do ano de ${info[2]}`)
}

printInfo({name:'Enzo', birthDate: '02/04/2002'});