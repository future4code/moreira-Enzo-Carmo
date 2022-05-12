import { User } from "./types/user";



export function purchase(user: User, value: number): User | undefined{

    if(user.balance>=value){
        const newBalance=user.balance-value
        return {...user,balance:newBalance}
    }else{
        return undefined
    }
}