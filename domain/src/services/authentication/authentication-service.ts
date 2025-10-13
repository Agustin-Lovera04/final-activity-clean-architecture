import { IUser } from "../../entities";
import { Service } from "../../utils/types/service";

export interface authenticationService extends Service<IUser>{
    registerUser:( dataUser: IUser) => Promise<IUser | undefined>
    findUserByEmail: (email: string) => Promise<IUser | undefined>
    validPassword: (password: string, user: IUser) => Promise<boolean>
    generateTokenUser: (dataUser: Omit<IUser, 'password'>) => Promise<string | undefined>
}
