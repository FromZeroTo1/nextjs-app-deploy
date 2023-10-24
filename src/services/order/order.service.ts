import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'
import { OrderType } from './types/order.types'

const ORDERS = 'orders'

export const OrderService = {
	async getAll(searchTerm?: string) {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET',
			params: { searchTerm }
		})
	},

	async getByUserId() {
		return instance<IOrder[]>({
			url: `${ORDERS}/by-user`,
			method: 'GET'
		})
	},

	async getActive() {
		return instance<IOrder[]>({
			url: `${ORDERS}/active`,
			method: 'GET'
		})
	},

	async place(data: OrderType) {
		return instance<{ confirmation: { confirmation_url: string } }>({
			url: ORDERS,
			method: 'POST',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IOrder>({
			url: `${ORDERS}/${id}`,
			method: 'DELETE'
		})
	}
}
