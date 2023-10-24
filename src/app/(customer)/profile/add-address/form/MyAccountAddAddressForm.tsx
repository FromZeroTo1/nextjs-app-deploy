'use client'

import { AddressService } from '@/services/address/address.service'
import { AddressType } from '@/services/address/types/address.types'
import Input from '@/ui/input/Input'
import ReactSelectComponent from '@/ui/react-select/ReactSelect'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from './MyAccountAddAddressForm.module.scss'
import { ICreateAddress } from './interface/create-address.interface'

const MyAccountAddAddressForm: FC = () => {
	const { replace } = useRouter()
	const [inputValue, setInputValue] = useState<ICreateAddress>({
		city: '',
		street: '',
		house: '',
		houseBody: '',
		apartment: '',
		information: ''
	})
	const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputValue(prevInputValue => ({
			...prevInputValue,
			[name]: value
		}))
	}

	const queryClient = useQueryClient()

	const { mutate: createAddress } = useMutation(
		['add card'],
		async (dto: AddressType) => {
			await AddressService.create(dto)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
				replace('/profile/details')
			}
		}
	)

	const handleAddAddress = () => {
		const dto: AddressType = {
			city: inputValue.city,
			street: inputValue.street,
			house: inputValue.house,
			houseBody: inputValue.houseBody,
			apartment: inputValue.apartment,
			information: inputValue.information
		}
		createAddress(dto)
	}

	const { control } = useForm<ICreateAddress>({
		mode: 'onChange'
	})

	return (
		<>
			<SubHeading>Добавление адреса</SubHeading>
			<div className={styles.fill}>
				<p className={styles.text}>
					Доставка заказа курьером возможна в пределах Москвы, Московской
					области и Санкт-Петербурга.
				</p>
				<div className={styles.form}>
					<div className={styles.half}>
						<Controller
							name='city'
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelectComponent
									field={field}
									options={[
										{ label: 'Москва', value: 'Москва' },
										{ label: 'Санкт-Петербург', value: 'Санкт-Петербург' }
									]}
									isMulti={false}
									placeholder='Город'
									label='Город *'
									error={error?.message}
								/>
							)}
							rules={{
								required: 'Выберите город'
							}}
						/>
					</div>

					<Input
						placeholder='Улица *'
						className={styles.half}
						value={inputValue.street}
						name='street'
						onChange={handleInputValueChange}
					/>
					<Input
						placeholder='Дом *'
						className={styles.half}
						value={inputValue.house}
						name='house'
						onChange={handleInputValueChange}
					/>
					<Input
						placeholder='Корпус'
						className={styles.half}
						value={inputValue.houseBody}
						name='houseBody'
						onChange={handleInputValueChange}
					/>
					<Input
						placeholder='Квартира *'
						className={styles.half}
						value={inputValue.apartment}
						name='apartment'
						onChange={handleInputValueChange}
					/>
					<Input
						placeholder='Дополнительная информация *'
						className={styles.full}
						value={inputValue.information}
						name='information'
						onChange={handleInputValueChange}
					/>
				</div>
				<button className={styles.button} onClick={handleAddAddress}>
					Добавить адрес
				</button>
			</div>
		</>
	)
}

export default MyAccountAddAddressForm
