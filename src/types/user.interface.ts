import { IAddress } from './address.interface'
import { ICard } from './card.interface'
import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	password: string
	name: string
	avatarPath: string
	bornAt: string
	phone: string
	isAdmin: boolean
}

export interface IPromocode {
	id: number
	description: string
	code: string
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
	cards: ICard[]
	addresses: IAddress[]
	promocodes: IPromocode[]
	smsNotification: boolean
	emailNotification: boolean
}
