import Breadcrumb from '@/ui/breadcrumb/Breadcrumb'
import { FC } from 'react'
import MyAccountAddAddressForm from '../form/MyAccountAddAddressForm'
import styles from './MyAccountAddAddress.module.scss'

const MyAccountAddAddress: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Breadcrumb
					className={styles.breadcrumb}
					items={[
						{
							label: 'Главная',
							path: '/'
						},
						{
							label: 'Личный кабинет',
							path: '/profile/main'
						},
						{
							label: 'Мои данные',
							path: '/profile/details'
						},
						{
							label: 'Добавление адреса',
							path: '/profile/add-address'
						}
					]}
				/>
				<div className={styles.row}>
					<MyAccountAddAddressForm />
				</div>
			</div>
		</div>
	)
}

export default MyAccountAddAddress
