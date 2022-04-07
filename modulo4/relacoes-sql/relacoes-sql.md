````Exercício 1

a)

 Foreign key é a que estabelece uma relação entre tabelas

b)

 INSERT INTO Ratings (id, comment, rate, movie_id) 
 VALUES (
 "001",
 "Muito bom!",
 7,
 "3"
 );

SELECT * FROM Ratings

c)

 14:56:00	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES (   "001",     "Muito bom!",     7,   "004" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`moreira-21712141-enzo-carmo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.313 sec
* O erro diz que não tem ID

d)

ALTER TABLE Movies DROP COLUMN rating;

e)

 Deletei o filme pelo ID especificado



// Ex 2

a)

 CREATE TABLE MovieCast (
	  	movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
     FOREIGN KEY (actor_id) REFERENCES Actor(id)
 ); 
 Tem 2 Foreign keys, relacionando com as tabelas de avaliação e filmes.

b)

 ALTER TABLE Movies DROP COLUMN rating
````