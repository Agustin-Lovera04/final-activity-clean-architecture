import { describe, test, expect } from 'vitest'
import { authenticationService } from '../../services/mocks/authentication-service-mocks'
import { registerUser } from './register'

describe('Register', () => {

    test('Receives user data and should create and return the same', async()=>{
        const result = await registerUser({
            dependencies: { authenticationService },
            payload:  {
                id: 'idUnique',
                email: 'test@gmail.com',
                password: 'test',
                name: 'Agustin',
                role: 'CLIENT'
            }
        })
        expect(result).toStrictEqual('User successfully registered')
    })

    test('Receives user data with email already existing in DB and should return an error', async()=> {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload:  {
                id: 'idUnique',
                email: 'test@gmail.com',
                password: 'test',
                name: 'Agustin',
                role: 'CLIENT'
            }
        })

        expect(result).toStrictEqual('User already exists')
    })

        test('Receives user data with invalid email and should return an error', async()=> {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload:  {
                id: 'idUnique',
                email: 'test',
                password: 'test',
                name: 'Agustin',
                role: 'CLIENT'
            }
        })

        expect(result).toStrictEqual('Invalid email')
    })
})