import { Entity } from "./entity";
import { Error } from "./error";


export interface Service<TEntity extends Entity> {
    findAll: () => Promise<TEntity[] | Error>,
    findById:(id: string) => Promise<TEntity | undefined>
    editOne: (payload: TEntity) => Promise<TEntity | Error>
    create: (payload: TEntity) => Promise<void | Error>
    deleteOne: (id: string) => Promise<void | Error>
}


