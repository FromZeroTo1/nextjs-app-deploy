import { AuthService } from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from '@/api/api.helper'

import { removeFromStorage } from '@/services/auth/auth.helper'
import { IAuthResponse, IEmailPassword } from './user.interface'

// Register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('register', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)


// Login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('login', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// Logout
export const logout = createAsyncThunk('auth/logout', async() => {
	removeFromStorage()
})

// Check Auth
export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async(_, thunkApi) => {
	try {
		const response = await AuthService.getNewTokens()
		return response.data
	} catch (error) {
		if(errorCatch(error) === 'jwt expired') {
			thunkApi.dispatch(logout())
		}

		return thunkApi.rejectWithValue(error)
	}
})