import { IUser } from "../../entities"
import { authenticationService } from "../../services/authentication/authentication-service"


interface registerUserData{
    dependencies: {authenticationService: authenticationService},
    payload: IUser
}

export async function registerUser({dependencies, payload}: registerUserData){

    const {email} = payload 

    let exReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let valid = exReg.test(email);
    if (!valid) return 'Invalid email';


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