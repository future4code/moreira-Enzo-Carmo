import express from "express"

const app = express()

app.use(express.json())



const port = 3003

const server = app.listen (port, () => {
  if (server) {

    console.log(`Backened server running at http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; 



//1.


app.get('/users', (req: Request, res: Response) =>{
    let errorCode:number = 400
    try {
        const newUsers = users
        const ListUsers = newUsers.map((item) => item )
        if(!newUsers) {
            errorCode = 404
            throw new Error('Not found!')
        }
        res.status(200).send({result: ListUsers})
    }catch (error:any){
        res.status(errorCode).send({message: error.message})
    }   

})