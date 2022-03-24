//Letra a) Acontece um erro pois não se pode atribuir um number à uma variável do tipo string sem usar Union Type
const minhaString:string = "Abublê"

//Letra b)Para fazer com que a variável aceite tanto numbers quanto strings, utilizamos Union Type
const meuNumero:number= 20

//Letra c)

enum colors {
    RED= "Red",
    BLUE= "Blue",
    GREEN= "Green",
    INDIGO= "Indigo"
}

const Enzo:person = {
    name: "Enzo",
    age: 19,
    favoriteColor: colors.RED
}

const Lucas:person = {
    name: "Lucas",
    age: 24,
    favoriteColor: colors.BLUE
}

const Sergio:person = {
    name: "Sergio",
    age: 49,
    favoriteColor: colors.GREEN
}

const Leo:person = {
    name: "Leo",
    age: 24,
    favoriteColor: colors.INDIGO
}

type person ={
    name: string
    age: number
    favoriteColor: string
}

