import { IAddress } from '@/types/address.interface'
import { ICard } from '@/types/card.interface'
import { IPromocode } from '@/types/user.interface'

export type GetAllUserType = {
	id: string
	email: string
	phone: string
	name: string
	createdAt: string
}

export type UserType = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	bornAt?: string
	phone?: string
	cards?: ICard[]
	addresses?: IAddress[]
	promocodes?: IPromocode[]
	smsNotification?: boolean
	emailNotification?: boolean
}

export type NotificationType = {
	smsNotification?: boolean
	emailNotification?: boolean
}