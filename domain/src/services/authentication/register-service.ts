import { IUser } from "../../entities";

export interface authenticationService {
    registerUser:( dataUser: IUser) => Promise<IUser | undefined>
    findUserByEmail: (email: string) => Promise<IUser | undefined>
}
