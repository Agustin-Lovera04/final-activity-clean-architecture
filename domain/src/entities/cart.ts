interface IProductCartItem {
    product: string
    quantity: number
}

export interface ICart {
    id: string
    products: IProductCartItem
}