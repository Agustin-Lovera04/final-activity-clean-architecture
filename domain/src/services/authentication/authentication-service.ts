import { IUser } from "../../entities";
import { Service } from "../../utils/types/service";
import { ServiceResult } from "../../utils/types/serviceResult";

export interface authenticationService extends Service<IUser>{
    findUserByEmail: (email: string) => Promise<ServiceResult<IUser>>
    validEmail: (email: string) => Promise<ServiceResult<boolean>>
    validPassword: (password: string, user: IUser) => Promise<ServiceResult<IUser>>
    generateTokenUser: (dataUser: Omit<IUser, 'password'>) => Promise<ServiceResult<string>>
}
