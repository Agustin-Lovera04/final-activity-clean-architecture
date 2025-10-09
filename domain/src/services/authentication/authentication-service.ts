import { IUser } from "../../entities";

export interface authenticationService {
    registerUser:( dataUser: IUser) => Promise<IUser | undefined>
    findUserByEmail: (email: string) => Promise<IUser | undefined>
    createUser: (dataUser: IUser) => Promise<IUser | undefined>
    validPassword: (password: string, user: IUser) => Promise<boolean>
    generateTokenUser: (dataUser: Omit<IUser, 'password'>) => Promise<string | undefined>
}
