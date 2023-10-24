'use client'

import { CardService } from '@/services/card/card.service'
import { CardType } from '@/services/card/types/card.types'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FC, useState } from 'react'
import InputMask from 'react-input-mask'
import styles from './MyAccountAddCardForm.module.scss'
import { ICreateCard } from './interface/create-card.interface'
import { useRouter } from 'next/navigation'

const MyAccountAddCardForm: FC = () => {
	const { replace } = useRouter()

	const [inputValue, setInputValue] = useState<ICreateCard>({
		holder: '',
		number: '',
		expiration: '',
		cvv: ''
	})

	const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputValue(prevInputValue => ({
			...prevInputValue,
			[name]: value
		}))
	}

	const queryClient = useQueryClient()

	const { mutate: createCard } = useMutation(
		['add card'],
		async (dto: CardType) => {
			await CardService.create(dto)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
				replace('/profile/details')
			}
		}
	)

	const handleAddCard = () => {
		const dto: CardType = {
			bankName: undefined,
			holderName: inputValue.holder,
			cardNumber: inputValue.number,
			expirationDate: inputValue.expiration,
			cvv: inputValue.cvv,
			isDefault: false
		}
		createCard(dto)
	}

	return (
		<>
			<SubHeading>Добавление карты</SubHeading>
			<div className={styles.fill}>
				<div className={styles.form}>
					<InputMask
						maskChar={null}
						mask=''
						placeholder='Данные владельца *'
						name='holder'
						className={styles.full}
						value={inputValue.holder}
						onChange={handleInputValueChange}
					/>
					<InputMask
						mask='9999 9999 9999 9999'
						placeholder='Номер карты *'
						name='number'
						className={styles.full}
						value={inputValue.number}
						onChange={handleInputValueChange}
					/>
					<InputMask
						mask='99/99'
						placeholder='мм/гг *'
						name='expiration'
						className={styles.half}
						value={inputValue.expiration}
						onChange={handleInputValueChange}
					/>
					<InputMask
						mask='999'
						placeholder='cvv *'
						name='cvv'
						className={styles.half}
						value={inputValue.cvv}
						onChange={handleInputValueChange}
					/>
					<button onClick={handleAddCard}>Добавить карту</button>
				</div>
			</div>
		</>
	)
}

export default MyAccountAddCardForm
