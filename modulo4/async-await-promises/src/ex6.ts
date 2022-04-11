import axios from "axios";
import { User } from "./ex3";
//a) Promise.all recebe um array de promises e retorna mais uma promise que retorna um array de respostas.

//c)

const sendNotificationAll = async (users: User[], message: string): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`https://labenews.herokuapp.com/notifications`, {
                userId: user.id,
                message
            })
        })

        await Promise.all(promises)
        console.log("Mensagens todas enviadas")

    } catch (error: any) {

        console.log(error.response)
    }
};