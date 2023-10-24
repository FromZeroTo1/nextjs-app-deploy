import { IOrderItem } from './order-items.interface'
import { IUser } from './user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}

export interface IOrder {
	id: number
	createdAt: string
	items: IOrderItem[]
	status: EnumOrderStatus
	total: number
	user: IUser
}