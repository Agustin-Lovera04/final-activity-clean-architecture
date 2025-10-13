import { Entity } from "../utils/types/entity"

interface IProductCartItem {
    product: string
    quantity: number
}

export interface ICart extends Entity {
    products: IProductCartItem
}