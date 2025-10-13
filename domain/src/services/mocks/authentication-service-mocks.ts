import { IUser } from "../../entities";
import { Error } from "../../utils/types/error";
import { authenticationService } from "../authentication/authentication-service";

export class AuthenticationServiceMock implements authenticationService{
    private users: IUser[] = [
        {
            id: "user1",
            email: "agustin@gmail.com",
            password: "Agustin",
            name: "Agustin",
            role: "CLIENT"
        },
        {
            id: "user2",
            email: "Juan@gmail.com",
            password: "Juan",
            name: "Juan",
            role: "CLIENT"
        }
    ];


    async findAll(): Promise<IUser[] | Error>{return {error: ''}}

    async findById(id:string):Promise<IUser | undefined>{return undefined}

    async registerUser(dataUser: IUser): Promise<IUser | undefined> {
        const user = this.users[0];
        return user;
    }

    async findUserByEmail(email: string): Promise<IUser | undefined> {
        const user = this.users.find(u => u.email === email);
        return user;
    }

    async create(dataUser: IUser): Promise<void | Error> {
        this.users.push(dataUser);
        return;
    }

    async validPassword(password: string, existUserInDB: IUser): Promise<boolean> {
        if (password !== existUserInDB.password) {
            return false;
        }
        return true;
    }

    async generateTokenUser(dataUser: Omit<IUser, 'password'>): Promise<string | undefined> {
        // Generación de token (mock)
        return 'token';
    }

    async editOne (dataUser: Partial<IUser>): Promise<IUser | Error>{return {error: ''}}

    async deleteOne (id: string): Promise<void | Error>{return}
}
