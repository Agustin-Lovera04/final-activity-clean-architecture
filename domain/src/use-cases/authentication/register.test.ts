import { describe, test, expect } from 'vitest'
import { authenticationService } from '../../services/mocks/register-service-mocks'
import { registerUser } from './register'

describe('Register', async () => {

    test('Receives user data and should create and return the same', async()=>{
        const result = registerUser({
            dependencies: { authenticationService },
            payload: {
                id: 'idUnique',
                email: 'test@gmail.com',
                password: 'test',
                name: 'Agustin',
                role: 'CLIENT'
            }
        })

        expect(result).toStrictEqual('Usuario registrado con éxito')
    })

    test('Receives incomplete user data and should return error', async()=> {})

    test('Receives user data with email already existing in DB and should return an error', async ()=> {})
})