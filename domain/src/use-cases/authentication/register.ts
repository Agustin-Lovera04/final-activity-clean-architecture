import { IUser } from "../../entities"
import { authenticationService } from "../../services/authentication/register-service"


interface registerUserData{
    dependencies: {authenticationService: authenticationService},
    payload: IUser
}

export function registerUser(data: registerUserData){

    const {id, email, password, name, role} = data.payload 

    let existUserInDB = data.dependencies.authenticationService.findUserByEmail(email)

   return 'Usuario registrado con éxito'
}