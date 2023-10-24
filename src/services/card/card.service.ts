import { instance } from '@/api/api.interceptor'
import { CardType } from './types/card.types'
import { ICard } from '@/types/card.interface'

const CARDS = 'cards'

export const CardService = {
	async getAll() {
		return instance<ICard[]>({
			url: CARDS,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ICard>({
			url: `${CARDS}/${id}`,
			method: 'GET'
		})
	},

	async create(data: CardType) {
		return instance<ICard>({
			url: `${CARDS}/create`,
			method: 'POST',
			data
		})
	},

	async update(id: string | number, data: CardType) {
		return instance<ICard>({
			url: `${CARDS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<ICard>({
			url: `${CARDS}/${id}`,
			method: 'DELETE'
		})
	}
}
