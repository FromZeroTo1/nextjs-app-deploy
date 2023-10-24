import { IProduct } from './product.interface'

export interface IOrderItem {
	id: number
	createdAt: string
	quantity: number
  price: number
	color?: string
	dimension?: string
	product: IProduct
  estimatedDate: string
}