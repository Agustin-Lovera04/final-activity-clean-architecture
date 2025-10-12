import { Entity } from "../utils/entity"

export interface IProduct extends Entity{
    title: string
    price: number
    stock: boolean
}