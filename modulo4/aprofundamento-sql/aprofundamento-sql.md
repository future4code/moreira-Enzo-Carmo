## Exercício 1
+ a)
  - ALTER TABLE Actor DROP COLUMN salary;
  * O comando acima faz uma alteração na tabela Actor e deleta a coluna salary.

+ b)
- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
* O comando acima  faz uma alteração na tabela Actor e altera a quantidade de caracteres no campo sex.
+ c)
- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
* O comando acima faz uma alteração na tabela Actor e  aumenta o número de caracteres em Gender.
+ d)
- ALTER TABLE Actor CHANGE gender gender VARCHAR(100); 






## Exercício 2




+ a)
  - UPDATE Actor
  *  SET 
  *     name = "Fernanda Torres"
  *     birth_date = "1957-08-25"
  *  WHERE id = "003"

  + b)
  - UPDATE Actor
  - SET name = "JULIANA PÃES"
  - WHERE name = "Juliana Paes";
  
  + c)
- UPDATE Actor
- SET 
- name = "Juliete Paes",
- birth_date = "2005-07-15",
- salary = "150000",
- gender = "female"
- WHERE id = "005";

+ d)
- UPDATE Actor
- SET 
- name = "Juliete Paes",
- birth_date = "2005-07-15",
- salary = "150000",
- gender = "female"
- WHERE id = "2000";
* //Nada foi alterado pois não existe nenhum ator com o id:2000.

## Exercício 3


+ a) DELETE FROM Actor WHERE name = "Fernanda Torres";
+ b) 
* DELETE FROM 
* Actor 
* WHERE
* gender = "male" AND 
* salary > 100000000;
  
## Exercício 4


+ a) SELECT MAX(salary) FROM Actor;
+ b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
+ c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
+ d) SELECT SUM(salary) FROM Actor;

## Exercício 5


+ a) RETORNA QUANTIDADE DE ATORES POR GENERO FEMININO E MASCULINO
+ b) SELECT id, name FROM Actor
+ ORDER BY name DESC;
+ c) SELECT * FROM Actor
+ ORDER BY salary;
+ d) SELECT * FROM Actor
+ ORDER BY salary DESC
+ LIMIT 3;
+ e) SELECT AVG(salary), gender FROM Actor
+ GROUP BY gender;

## Exercício 6


+ a) ALTER TABLE Movie ADD playing_limit_date DATE;
+ b) ALTER TABLE Movie CHANGE rating rating FLOAT;
+ c) UPDATE Movie 
+ SET 
+ 	playing_limit_date = "2022-04-01"
+ WHERE id = "2";

+ UPDATE Movie 
+ SET 
+ 	playing_limit_date = "2022-05-15"
+ WHERE id = "3";
+ d) DELETE FROM Movie WHERE id = "001"

+ AO INSERIR A QUERY ABAIXO, NÃO MUDA NADA PORQUE O ID E OS 
+ DADOS NÃO EXISTEM MAIS.

+ UPDATE Movie
+ SET sinopse = "se eu fosse você, filme de comédia espanhola"
+ WHERE id = "1";