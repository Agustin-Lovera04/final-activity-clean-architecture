import { IUser } from "../../entities";
import { authenticationService } from "../authentication/authentication-service";
import { ServiceResult } from "../../utils/types/serviceResult";
import jwt from 'jsonwebtoken';
import { config } from "../../config/config";

export class AuthenticationServiceMock implements authenticationService {
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

    async findAll(): Promise<ServiceResult<IUser[]>> {
        return { success: true, data: this.users };
    }

    async findById(id: string): Promise<ServiceResult<IUser>> {
        return { success: true, data: undefined };
    }

    async findUserByEmail(email: string): Promise<ServiceResult<IUser>> {
        const user = this.users.find(u => u.email === email);
        if (!user) {
            return { success: false, error: 'User not found' };
        }
        return { success: true, data: user };
    }


    async create(dataUser: IUser): Promise<ServiceResult<IUser>> {
        try {
            this.users.push(dataUser);
            return { success: true, data: dataUser };
        } catch (error) {
            return { success: false, error: "Internal error in register process." };
        }
    }

    async validPassword(password: string, existUserInDB: IUser): Promise<ServiceResult<IUser>> {
        if (password !== existUserInDB.password) {
            return { success: false, error: "Invalid password" };
        }
        return { success: true, data: existUserInDB };
    }

    async generateTokenUser(dataUser: Omit<IUser, "password">): Promise<ServiceResult<string>> {
        const token = jwt.sign(
            dataUser,
            config.SECRET_KEY_JWT,
            { expiresIn: '1h' }
        );
        return { success: true, data: token };
    }

    async editOne(dataUser: Partial<IUser>): Promise<ServiceResult<IUser>> {
        return { success: true, data: undefined };
    }

    async deleteOne(id: string): Promise<ServiceResult<IUser>> {
        return { success: true, data: undefined };
    }
}
