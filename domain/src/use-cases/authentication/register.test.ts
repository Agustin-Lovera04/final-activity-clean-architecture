import { describe, test, expect } from 'vitest'
import { authenticationService } from '../../services/mocks/register-service-mocks'
import { registerUser } from './register'
import { IUser } from '../../entities'

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

})