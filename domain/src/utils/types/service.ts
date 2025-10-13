import { Entity } from "./entity";
import { ServiceResult } from "./serviceResult";


export interface Service<TEntity extends Entity> {
    findAll: () => Promise<ServiceResult<TEntity[]>>,
    findById:(id: string) => Promise<ServiceResult<TEntity>>
    editOne: (payload: TEntity) => Promise<ServiceResult<TEntity>>
    create: (payload: TEntity) => Promise<ServiceResult<TEntity>>
    deleteOne: (id: string) => Promise<ServiceResult<TEntity>>
}


