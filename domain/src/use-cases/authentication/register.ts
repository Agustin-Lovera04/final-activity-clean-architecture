import { IUser } from "../../entities"
import { authenticationService } from "../../services/authentication/authentication-service"


interface registerUserData {
    dependencies: { authenticationService: authenticationService },
    payload: IUser
}

export async function registerUser({ dependencies, payload }: registerUserData) {

    const { email, password } = payload

    let validEmail = await dependencies.authenticationService.validEmail(email)
    if (!validEmail.success) return validEmail.error;

    if(password.length === 0) return 'Invalid password'

    let existUserInDB = await dependencies.authenticationService.findUserByEmail(email)
    if (existUserInDB.success && existUserInDB.data) {
        return 'User already exists'
    }

    const createUser = await dependencies.authenticationService.create(payload)

    if (!createUser.success) {
        return createUser.error
    }


    return createUser.data
}