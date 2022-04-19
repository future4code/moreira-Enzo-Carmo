import app from "./app";
import connection from "./connection";
import express, {Request, Response} from "express"


// Exercício 1
// a)
//A resposta que chega do metodo raw é um Promise contendo
//informações da tabela de dados junto com o resultado esperado em si no caso este ocupa a posição result[0]

//b) 

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }


//c)

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };


//Exercício 2

//a)
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

//b)

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 


//c)

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };


//Exercício 3.


  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


//Exercício 4.

//a) 

app.put("/actor", async (req: Request, res: Response) => {
    try {
      await UpdateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


//b)

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });