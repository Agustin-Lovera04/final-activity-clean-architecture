import { describe, test, expect } from 'vitest'
import { AuthenticationServiceMock } from '../../services/mocks/authentication-service-mocks'
import { loginUser } from './login'


describe('Login User', () => {

    const authenticationService = new AuthenticationServiceMock()

    test("Receive user data and compare it with existing users and should return a JWT set in cookies with the user information.", async()=>{
        const result = await loginUser({
            dependencies: {authenticationService},
            payload: {
                email: 'agustin@gmail.com',
                password: 'Agustin'
            }
        })

        expect(result).toBeTypeOf('string')
    })
/* 
    test("Receive data from user with invalid email and compare it with existing users and should return a JWT with the user's information.", async()=>{
        const result = await loginUser({
            dependencies: {authenticationService},
            payload: {
                email: 'agustin@gmail.com',
                password: 'Agustin'
            }
        })

        expect(result).toStrictEqual({
            email: 'agustin@gmail.com',
            password: 'Agustin'
        })
    }) */
})