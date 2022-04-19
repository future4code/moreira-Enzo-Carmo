import express from "express";
import { todoList } from "./data";
const app = express();
app.use(express.json());


const port = 3003


const server = app.listen (port, () =>{
    if(server){
        console.log(`Backend server running at: http://localhost:${port}`);
    } else{
        console.error(`Failure upon starting server`)
    }
})


//1.
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})


//2/3.

app.get("/list", (req, res) =>{
    res.send(todoList)
})


//4.

app.get("/completed", (req, res) => {
    const complete = todoList.filter((task) =>{
        return task.completed === true
    })
    res.send(complete)
})


//5.

app.post("/creating", (req, res) =>{
    const createToDo = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: req.body.title,
        completed: req.body.completed
    }
    console.log(req.body)
    if(!req.body){
        throw new Error ("Doesn't have body");
    }if(typeof req.body.title !== "string")
        throw new Error ("Title");

    const newToDo = [...todoList, createToDo]

    res.status(200).send({newToDo})
})


//6.


//7.

app.delete("/list/:Id", (req, res) => {          
    const Id = Number(req.params.Id);

    const newList = todoList.filter((task) => {
        return task.id !== Id
    })
    res.status(220).send(newList)
})






