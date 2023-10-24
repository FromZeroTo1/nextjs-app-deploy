'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import Heading from '@/ui/heading/Heading'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from './validation/valid-email'
import Loader from '@/ui/loader/Loader'
import { useAuthRedirect } from './redirect/useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<section className='flex h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-white shadow-sm p-8 m-auto'
			>
				<Heading className='capitalize text-center mb-4'>{type}</Heading>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email'
								}
							})}
							placeholder='moyapochta@gmail.com'
							label='Email'
							error={errors.email?.message}
						/>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length must be at least 6 characters'
								}
							})}
							placeholder='123456'
							label='Password'
							error={errors.password?.message}
						/>
						<Button type='submit' variant='light'>
							Let's go
						</Button>

						<div>
							<button
								type='button'
								className='inline-block opacity-30 mt-3 text-sm'
								onClick={() => setType(type === 'login' ? 'register' : 'login')}
							>
								{type === 'login' ? 'Register' : 'Login'}
							</button>
						</div>
					</>
				)}
			</form>
		</section>
	)
}

export default Auth
