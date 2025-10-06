import { IUser } from "../../entities";

const users: IUser[] = [
    {
        id: "user1",
        email: 'test@gmail.com',
        password: 'test',
        name: 'Agustin',
        role: 'CLIENT'
    },
    {
        id: "user2",
        email: 'test2@gmail.com',
        password: 'test2',
        name: 'Juan',
        role: 'CLIENT'
    }
]

export interface authenticationService {
    registerUser:( dataUser: IUser)=> string
    findUserByEmail: (email: string) =>{
/*         const existUser = users.find(u => u.email === email)
        if(existUser){
            return true
        }else{
            return false
        } */
    }
}
