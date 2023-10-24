import { UserService } from '@/services/user/user.service'
import { IFullUser } from '@/types/user.interface'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './MyAccountCredentials.module.scss'
import { IUserDataUpdate } from './interface/update-user-data.interface'

const MyAccountCredentials: FC<{ profile: IFullUser }> = ({ profile }) => {
	const [disabledState, setDisabledState] = useState({
		name: true,
		phone: true,
		email: true,
		bornAt: true
	})
	const [inputValue, setInputValue] = useState<IUserDataUpdate>({
		name: profile?.name || '',
		phone: profile?.phone || '',
		email: profile?.email || '',
		bornAt: profile?.bornAt || ''
	})

	const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputValue(prevInputValue => ({
			...prevInputValue,
			[name]: value
		}))
		setDisabledState(prev => ({
			...prev,
			[name]: false
		}))
	}

	useEffect(() => {
		setInputValue({
			name: profile?.name || '',
			phone: profile?.phone || '',
			email: profile?.email || '',
			bornAt: profile?.bornAt || ''
		})
	}, [profile])

	const queryClient = useQueryClient()

	const { mutate: updateProfile } = useMutation(
		['update profile'],
		async (newData: any) => {
			await UserService.updateProfile(newData)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	const handleSaveButtonClick = (field: keyof IUserDataUpdate) => {
		const newData = {
			...profile,
			[field]: inputValue[field]
		}
		updateProfile(newData)
		setDisabledState(prev => ({
			...prev,
			[field]: true
		}))
	}

	return (
		<>
			<SubHeading className={styles.subtitle}>Мои данные</SubHeading>
			<div className={styles.fill}>
				<div className={styles.row}>
					<div className={styles.col}>
						<label className={styles.label}>Ник:</label>
						<input
							type='text'
							value={inputValue.name}
							onChange={handleInputValueChange}
							name='name'
							className={styles.input}
						/>
					</div>
					<button
						className={styles.button}
						disabled={disabledState.name}
						onClick={() => handleSaveButtonClick('name')}
					>
						Сохранить
					</button>
				</div>
				<div className={styles.row}>
					<div className={styles.col}>
						<label className={styles.label}>Номер телефона:</label>
						<input
							type='text'
							placeholder={profile?.phone || 'Мой новый номер телефона'}
							value={inputValue.phone}
							onChange={handleInputValueChange}
							name='phone'
							className={styles.input}
						/>
					</div>
					<button
						className={styles.button}
						disabled={disabledState.phone}
						onClick={() => handleSaveButtonClick('phone')}
					>
						Сохранить
					</button>
				</div>
				<div className={styles.row}>
					<div className={styles.col}>
						<label className={styles.label}>e-mail:</label>
						<input
							type='text'
							placeholder={profile?.email}
							value={inputValue.email}
							onChange={handleInputValueChange}
							name='email'
							className={styles.input}
						/>
					</div>
					<button
						className={styles.button}
						disabled={disabledState.email}
						onClick={() => handleSaveButtonClick('email')}
					>
						Сохранить
					</button>
				</div>
				<div className={styles.row}>
					<div className={styles.col}>
						<label className={styles.label}>Дата рождения:</label>
						<input
							type='text'
							placeholder={profile?.bornAt || 'Мой новая дата рождения'}
							value={inputValue.bornAt}
							onChange={handleInputValueChange}
							name='bornAt'
							className={styles.input}
						/>
					</div>
					<button
						className={styles.button}
						disabled={disabledState.bornAt}
						onClick={() => handleSaveButtonClick('bornAt')}
					>
						Сохранить
					</button>
				</div>
			</div>
		</>
	)
}

export default MyAccountCredentials
