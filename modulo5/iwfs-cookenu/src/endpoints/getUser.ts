import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id }= req.params 

        const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("This endpoint requires a token.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role !== 'ADMIN') {
            res.status(401).send('Access permited for admins only.')
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUser(id)

        res.status(200).send(user)

    } catch(error){
        res.status(400).send(error.message)
    }
} 