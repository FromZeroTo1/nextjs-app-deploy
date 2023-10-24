import { instance } from '@/api/api.interceptor'
import Cookies from 'js-cookie'
import { IAuthResponse, IEmailPassword } from '../../store/user/user.interface'
import { saveToStorage } from './auth.helper'
import { REFRESH_TOKEN } from '@/constants/token.constants'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN)

		const response = await instance.post<string, { data: IAuthResponse }>(
			'/auth/login/access-token',
			{ refreshToken },
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
