import { useActiveOrders } from '@/hooks/queries/useActiveOrders'
import { IFullUser } from '@/types/user.interface'
import Loader from '@/ui/loader/Loader'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { FC } from 'react'
import styles from './MyAccountActiveOrders.module.scss'
import OrderItem from '@/ui/order-item/OrderItem'

const MyAccountActiveOrders: FC<{ profile: IFullUser }> = ({ profile }) => {
	const { isLoading, data } = useActiveOrders()

	return data?.length ? (
		isLoading ? (
			<Loader />
		) : (
			<div className={styles.row}>
				<SubHeading className={styles.subtitle}>Активные заказы</SubHeading>
				<div className={styles.fill}>
					<div className={styles.orders}>
						{data.map(order =>
							order.items.map(item => (
								<OrderItem order={item} status={order.status} />
							))
						)}
					</div>
				</div>
			</div>
		)
	) : (
		''
	)
}

export default MyAccountActiveOrders
