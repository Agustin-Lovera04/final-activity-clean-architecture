import { Entity } from "../utils/entity"

interface IProductCartItem {
    product: string
    quantity: number
}

export interface ICart extends Entity {
    products: IProductCartItem
}