import { IUser } from "../../entities"

const users: IUser[] = [
    {
        id: "user1",
        email: 'agustin@gmail.com',
        password: 'Agustin',
        name: 'Agustin',
        role: 'CLIENT'
    },
    {
        id: "user2",
        email: 'Juan@gmail.com',
        password: 'Juan',
        name: 'Juan',
        role: 'CLIENT'
    }
]

export const authenticationService = {
    registerUser: async(dataUser: IUser): Promise<IUser | undefined> => {
        const user = users[0]
        return user
    },
    findUserByEmail: async (email: string): Promise<IUser | undefined> => {
        const user = users.find(u => u.email === email)
        return user
    },
    createUser: async (dataUser: IUser): Promise<IUser | undefined> => {
        users.push(dataUser)
        return dataUser
    },
    validPassword:async (password: string, existUserInDB: IUser) : Promise<boolean> => {
        if(password !== existUserInDB.password){
            return false
        }
        return true
    },
    generateTokenUser: async(dataUser: Omit<IUser, 'password'>):Promise<string | undefined> => {

        // Generacion de token

        return 'token'
    }


}