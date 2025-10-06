import { IUser } from "../../entities"

export const authenticationService = {
    registerUser: (dataUser: IUser)=> string,
    findUserByEmail: (email: string)=> boolean

}