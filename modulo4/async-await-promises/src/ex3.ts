import axios from "axios"



export type User = {
    id: string;
    name: string;
    email: string
} 




//a) Não.

//c)

const getAllSubscribersMap = async(): Promise<User[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
};

// getAllSubscribersMap();