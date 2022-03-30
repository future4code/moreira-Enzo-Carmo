import express, {Request, Response} from "express";
import { comidas } from "./data";

const app = express();
app.use(express.json());


const port = 3003


const server = app.listen (port, () =>{
    if(server){
        console.log(`Backend server running at: http://localhost:${port}`);
    } else{
        console.error(`Failure upon starting server.`)
    }
})


//1.

app.get("/test", (req:Request, res: Response) =>{
    return res.status(200).json({message: "It's working."})
})

//3. 
app.post ("/newdish", (req: Request, res:Response) =>{
    const createDish = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price
    }

    const newDishes = [...comidas, createDish];
    return res.status(200).send(newDishes)
})

//4.

app.get("/returndishes", (req:Request, res: Response) =>{
    const newDish = comidas
    const newDishList = newDish.map((item) => {
        return item
    })
    res.status(200).send({result: newDishList})
})