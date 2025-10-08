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
    }
}