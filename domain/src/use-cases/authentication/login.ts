import { IUser } from "../../entities";
import { authenticationService } from "../../services/authentication/register-service";

type loginFields = 'email' | 'password';

type loginData = Pick<IUser, loginFields>

interface loginUserData{
    dependencies: {authenticationService: authenticationService},
    payload: loginData
}

export async function loginUser({dependencies, payload}: loginUserData){
    const {email, password} = payload

    let existUserInDB = await dependencies.authenticationService.findUserByEmail(email)
    if(!existUserInDB){
        return 'Invalid credentials'
    }

    let validPassword = await dependencies.authenticationService.validPassword(password, existUserInDB)

    if(validPassword == false){
        return 'Invalid credentials'
    }

    return payload
}