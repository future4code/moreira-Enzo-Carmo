```


//a: DATE representa uma data, NOT NULL que o valor não pode ser nulo, VARCHAR o numero máximo de caracteres.

SHOW TABLES;
SHOW DATABASES;
DESCRIBE Actor;


//c descrevem os campos da tabela



// ex 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

//b: erro double key primary.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002", 
"Cleo Pires",
1200000,
"1984-08-23",
"female"
);

//c: a quantidade de colunas declaradas não bate com os das atribuídas.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); 

//d: O campo não pode ser idêntico.
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Ary Toledo",
  400000,
  "1949-04-18", 
  "male"
);



// e: A data foi passada como number e o código processou a operação, deixando explicíto  o erro na data.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


#f:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Mônica",
  20000,
  "1978-05-07", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "Star Wars", 
  "Enzo",
  0,
  "2002-04-02", 
  "male"
);

//3
SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name FROM Actor WHERE gender = "male";

//a
SELECT * FROM Actor WHERE gender = "female";

//b

SELECT name, salary FROM Actor WHERE name = "Tony Ramos";



//c

SELECT * FROM Actor WHERE gender = "invalid";

//retornou null por não existir o gênero na tabela.

//d

SELECT id, name, salary FROM Actor WHERE salary <= 500000;

//e

SELECT id, name from Actor WHERE id = "002";

//O parâmetro nome é inexistente, o certo é name.

//4
//a: retorna todos os dados onde os nomes dos atores começam com A ou J, e o salário é maior que 300000 reais.

//b:
SELECT * FROM Actor
WHERE name  NOT LIKE "A%" AND salary > 350000;

//c
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";


//d
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%")
AND (salary BETWEEN 300000 AND 900000);


// ex5
CREATE TABLE Filmes(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL, //permite inserir caracteres maiores que varchar
    data_de_lançamento DATE NOT NULL,
    avaliação  FLOAT NOT NULL
);


);

INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Auto da compadecida",
  "num sei, só sei que foi assim.",
  "1984-05-04", 
  1000
);

#6
SELECT id, name, avaliação from Filmes WHERE id = "004";

SELECT * from Filmes WHERE name = "Auto da compadecida";

SELECT id, name, sinopse from Filmes WHERE avaliação >= 7;

#7
SELECT name from Filmes WHERE name LIKE "%vida%";  ```