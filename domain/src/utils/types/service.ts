import { Entity } from "./entity";

type error = {error: string}

export interface Service<TEntity extends Entity> {
    findAll: () => Promise<TEntity[]>,
    findById:(id: string) => Promise<TEntity | undefined>
    editOne: (payload: TEntity) => Promise<TEntity | error>
    create: (payload: TEntity) => Promise<void | error>
    deleteOne: (id: string) => Promise<void | error>
}


