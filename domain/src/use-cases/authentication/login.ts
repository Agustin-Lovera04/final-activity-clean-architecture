import { IUser } from "../../entities";
import { authenticationService } from "../../services/authentication/authentication-service";

type loginFields = 'email' | 'password';

type loginData = Pick<IUser, loginFields>

interface loginUserData{
    dependencies: {authenticationService: authenticationService},
    payload: loginData
}

export async function loginUser({dependencies, payload}: loginUserData){
    const {email, password} = payload

    let existUserInDB = await dependencies.authenticationService.findUserByEmail(email)
    if(!existUserInDB.success || existUserInDB.data == undefined){
        return 'Invalid credentials'
    }


    let validPassword = await dependencies.authenticationService.validPassword(password, existUserInDB.data)

    if(!validPassword.success){
        return 'Invalid credentials'
    }

    const token = await dependencies.authenticationService.generateTokenUser(existUserInDB.data)

    if(!token.success || token.data == undefined){
        return 'Internal error in login process'
    }

    return token.data
}