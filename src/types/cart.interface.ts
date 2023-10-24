import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	price: number
	salePrice: number
	color?: string | null
	dimension?: string | null
}