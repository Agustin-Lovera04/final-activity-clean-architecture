import { describe, test, expect } from 'vitest'
import { authenticationService } from '../../services/mocks/register-service-mocks'
import { loginUser } from './login'


describe('Login User', () => {

    test("Receive data from user and compare it with existing users and should return a JWT with the user's information.", async()=>{
        const result = await loginUser({
            dependencies: {authenticationService},
            payload: {
                email: 'test@gmail.com',
                password: 'test'
            }
        })

        expect(result).toStrictEqual('')
    })
})