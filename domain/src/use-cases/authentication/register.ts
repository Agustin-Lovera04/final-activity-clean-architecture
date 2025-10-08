import { IUser } from "../../entities"
import { authenticationService } from "../../services/authentication/register-service"


interface registerUserData{
    dependencies: {authenticationService: authenticationService},
    payload: IUser
}

export async function registerUser({dependencies, payload}: registerUserData){

    const {email} = payload 

    let existUserInDB = await dependencies.authenticationService.findUserByEmail(email)
    if(existUserInDB?.id){
        return 'User already exists'
    }

    const createUser = await dependencies.authenticationService.createUser(payload)

    if(!createUser){
        return 'Error registering user'
    }


   return 'User successfully registered'
}