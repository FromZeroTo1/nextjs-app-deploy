import { IFullUser } from '@/types/user.interface'
import SubHeading from '@/ui/sub-heading/SubHeading'
import Link from 'next/link'
import { FC } from 'react'
import styles from './MyAccountOrdersMain.module.scss'
import OrderItem from '@/ui/order-item/OrderItem'

const MyAccountOrdersMain: FC<{ profile: IFullUser }> = ({ profile }) => {
	return (
		<>
			<SubHeading className={styles.subtitle}>Заказы</SubHeading>
			<div className={styles.fill}>
				{profile?.orders ? (
					<div className={styles.orders}>
						{profile?.orders
							.slice(0, 2)
							.map(order =>
								order.items
									.slice(0, 2)
									.map(item => <OrderItem order={item} status={order.status} />)
							)}
					</div>
				) : (
					<p className={styles.notfound}>У вас нет активных заказов.</p>
				)}
				<Link href='' className={styles.btn}>
					Смотреть историю заказов
				</Link>
			</div>
		</>
	)
}

export default MyAccountOrdersMain
