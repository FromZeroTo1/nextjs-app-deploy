import { instance } from '@/api/api.interceptor'
import { IAddress } from '@/types/address.interface'
import { AddressType } from './types/address.types'

const ADDRESSES = 'addresses'

export const AddressService = {
	async getAll() {
		return instance<IAddress[]>({
			url: ADDRESSES,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IAddress>({
			url: `${ADDRESSES}/${id}`,
			method: 'GET'
		})
	},

	async create(data: AddressType) {
		return instance<IAddress>({
			url: `${ADDRESSES}/create`,
			method: 'POST',
			data
		})
	},

	async update(id: string | number, data: AddressType) {
		return instance<IAddress>({
			url: `${ADDRESSES}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IAddress>({
			url: `${ADDRESSES}/${id}`,
			method: 'DELETE'
		})
	}
}
