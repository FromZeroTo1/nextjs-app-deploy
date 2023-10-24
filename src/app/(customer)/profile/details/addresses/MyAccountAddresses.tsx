import { IFullUser } from '@/types/user.interface'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'
import styles from './MyAccountAddresses.module.scss'
import { AddressService } from '@/services/address/address.service'

const MyAccountAddresses: FC<{ profile: IFullUser }> = ({ profile }) => {
	const queryClient = useQueryClient()

	const { mutate: deleteAddresses } = useMutation(
		['delete address'],
		async (id: number) => {
			await AddressService.delete(id)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	const handleDeleteAddress = (addressId: number) => {
		deleteAddresses(addressId)
	}

	return (
		<>
			<SubHeading className={styles.subtitle}>Адреса</SubHeading>
			<div className={styles.fill}>
				{profile?.addresses.map(address => (
					<div className={styles.wrapper} key={address.id}>
						<div className={styles.row}>
							<div className={styles.address}>
								{`г. ${address.city}, ул. ${address.street}, д. ${
									address.house
								}, ${
									address.houseBody && 'корпус ' + address.houseBody + ','
								} кв. ${address.apartment}`}
							</div>
							<div className={styles.btns}>
								<Link className={styles.edit} href='/profile/edit-address'>
									Редактировать
								</Link>
								<button
									className={styles.button}
									onClick={() => handleDeleteAddress(address.id)}
								>
									Удалить
								</button>
							</div>
						</div>
						<div className={styles.comment}>
							{address.information
								? address.information
								: 'Комментарий к адресу, например, позвоните мне по приезде.'}
						</div>
					</div>
				))}
				<Link className={styles.add} href='/profile/add-address'>
					Добавить адрес доставки
				</Link>
			</div>
		</>
	)
}

export default MyAccountAddresses
