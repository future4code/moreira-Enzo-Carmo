import app from "./app";
import {Request, Response} from "express";
import connection from "./connection";





app.post("/user", async (req: Request, res: Response) => {
    try{
        await connection.raw(`
        INSERT INTO TodoListUser(id, name, nickname, email)
        VALUE(${Date.now().toString()},
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
         );        
        `)
            res.status(201).send("Success.")
}
catch(error: any){
    console.log(error.message);
    res.status(500).send("Unexpected error occured.")
    }
})


app.get("/user/:id", async (req, res) => {
    try {
      const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE id =${req.params.id}
        `);
      console.table(result[0]);
      res.send(result[0]);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Unexpected error occured.");
      }
  });




  app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let newError: number=400
  try{
      await connection("TodoListUser").update({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email
      }).where({id: req.params.id})
      const newList = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
    }
          if(!newList.name || !newList.nickname || !newList.email){
        newError=422
        throw new Error("Fill in the form correctly.");
      }
      res.send("Succesfully edited.")
  
    }
    catch(error: any){
      console.log(error.message);
      res.status(newError).send(error.message);
    }
  });


  app.post("/TodoListTask/task", async (req: Request, res: Response) =>{
    let newError: number=400 
    try{
        await connection.raw(`
        INSERT INTO TodoListUser(id, title, description, limit_date, creator_user_id)
        VALUE(
        "${Date.now().toString()}",  
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.limit_date}"
        "${req.body.creator_userId}"      
         );      
         `)
        const newTask = {
          id: Date.now().toString(),
          title: req.body.title,
          description: req.body.description,
          limiteDate: req.body.limit_date,
          creator_User_Id: req.body.creator_User_Id
      }
      if(!newTask.title||!newTask.description||!newTask.limiteDate||!newTask.creator_User_Id){
        newError=422 
        throw new Error("Fill the form correctly.");

      }
          res.status(201).send("Successful edit.")
    }
    catch(error: any){
        console.log(error.message);
        res.status(newError).send(error.message)
    }
  })






  app.get("/TodoListTask/task/:id", async (req, res) => {
    try {
      const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE id =${req.params.id}
        `);
      console.table(result[0]);
      res.send(result[0]);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("unexpected error occured");
    }
  });