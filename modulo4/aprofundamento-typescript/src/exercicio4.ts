//Letra b) Criando um start nos scripts e rodando o mesmo com npm run "nome do script". Sim, teríamos que atualizar as configs do arquivo tsconfig.json para funcionar.
//Letra c) Podemos rodar o comando tsc para transpilar vários arquivos ao colocar seus nomes separados por um espaço.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}