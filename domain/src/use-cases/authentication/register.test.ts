import { AuthenticationServiceMock } from './../../services/mocks/authentication-service-mocks';
import { describe, test, expect } from 'vitest'
import { registerUser } from './register'
import { UserRole } from '../../entities';

describe('Register', () => {

    const authenticationService = new AuthenticationServiceMock()

    test('Receives user data and should create and return the same', async () => {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload: {
                id: 'idUnique',
                email: 'test@gmail.com',
                password: 'test',
                name: 'Agustin',
                role: UserRole.CLIENT
            }
        })
        
        expect(result).toBeTypeOf('object')
        expect(result).toHaveProperty('email', 'test@gmail.com');
    })

    test('Receives user data with email already existing in DB and should return an error', async () => {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload: {
                id: 'idUnique',
                email: 'test@gmail.com',
                password: 'test',
                name: 'Agustin',
                role: UserRole.CLIENT
            }
        })

        expect(result).toStrictEqual('User already exists')
    })

    test('Receives user data with invalid email and should return an error', async () => {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload: {
                id: 'idUnique',
                email: 'test',
                password: 'test',
                name: 'Agustin',
                role: UserRole.CLIENT
            }
        })

        expect(result).toStrictEqual('Invalid email')
    })
        
    test('Receives user data with role = ADMIN and should create and return the same', async () => {
        const result = await registerUser({
            dependencies: { authenticationService },
            payload: {
                id: 'idADMIN',
                email: 'ADMIN@gmail.com',
                password: 'ADMIN',
                name: 'ADMIN',
                role: UserRole.ADMIN
            }
        })

        expect(result).toHaveProperty('role', 'ADMIN');
    })
})