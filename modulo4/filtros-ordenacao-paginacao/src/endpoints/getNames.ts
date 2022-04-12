

export const getName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const params = req.params.name
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       res.status(200).send(users)

    } catch (error) {
       console.log(error)
       //res.send(error.message || error.sqlMessage)
    }
 }

 export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM, name, email, password
     
    `)

    return result[0]}