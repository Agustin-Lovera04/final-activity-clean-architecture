import { IUser } from "../../entities"

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

export const authenticationService = {
    registerUser: async(dataUser: IUser): Promise<IUser | undefined> => {
        const user = users[0]
        return user
    },
    findUserByEmail: async (email: string): Promise<IUser | undefined> => {
        const user = users.find(u => u.email === email)
        return user
    } 
}