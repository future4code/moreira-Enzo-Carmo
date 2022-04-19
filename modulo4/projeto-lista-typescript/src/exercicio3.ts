enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


function movieInfo(name: string, yearOfRelease:number, genre:GENERO, score?:number):Data{
    const movieData: Data ={
        name: name,
        yearOfRelease: yearOfRelease,
        genre: genre,
        score: score
    }
    return movieData
}

type Data = {
    name: string,
    yearOfRelease: number,
    genre: GENERO
    score: number | null | undefined
}

console.log(movieInfo("Joker", 2019, GENERO.DRAMA, 88))