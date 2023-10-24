import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.interface'
import { GetAllUserType, NotificationType, UserType } from './types/user.types'

const USERS = 'users'

export const UserService = {
	async getAll(searchTerm?: string) {
		const { data } = await instance<GetAllUserType[]>({
			url: USERS,
			method: 'GET',
			params: {searchTerm}
		})

		return data
	},

	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: UserType) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IUser>({
			url: `${USERS}/${id}`,
			method: 'DELETE'
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IFullUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	},

	async toggleNotification(data: NotificationType) {
		return instance<IFullUser>({
			url: `${USERS}/profile/notification`,
			data,
			method: 'PUT'
		})
	}
}
