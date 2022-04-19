const idEmission :string = '15/08/2015'

const birthday :string = '02/04/2002'

function needToRenew(birth:string, emission:string): boolean{
    const birthArray :string[] = birth.split('/')
    const birthDate :Date = new Date(Number(birthArray[2]), Number(birthArray[1]) -1, Number(birthArray[0]))

    const emissionArray :string[] = emission.split('/')
    const emissionDate :Date = new Date(Number(emissionArray[2]), Number(emissionArray[1]) -1, Number(emissionArray[0]))

    const todayDate :Date = new Date()

    const day: number = 1000 * 60 * 60 * 24 * 365;

    const age :number = (Number(todayDate) - Number(birthDate)) / day
    const idTime:number = (Number(todayDate) - Number(emissionDate)) / day

    const cond1 : boolean = age <= 20 && idTime >= 5
    const cond2 : boolean = age > 20 && age <= 50 && idTime >= 10
    const cond3 : boolean = age > 50 && idTime >= 15

    return cond1 || cond2 || cond3

}

console.log(needToRenew(birthday,idEmission))