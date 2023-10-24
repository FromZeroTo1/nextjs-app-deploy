import { FC } from 'react'
import styles from './OrderItem.module.scss'
import Image from 'next/image'
import { IOrderItem } from '@/types/order-items.interface'
import { EnumOrderStatus } from '@/types/order.interface'
import Link from 'next/link'

const OrderItem: FC<{order: IOrderItem, status: EnumOrderStatus}> = ({order, status}) => {

	return (
		<div className={styles.order}>
			<div className={styles.left}>
				<span className={styles.sku}>{order.product.sku}</span>
				<div className={styles.preview}>
					<Image
						priority
						src={order.product.images[0]}
						width={100}
						height={100}
						alt={order.product.name}
					/>
					<span className={styles.quantity}>{order.quantity} товар</span>
				</div>
			</div>
			<div className={styles.info}>
				<h3 className={styles.status}>{status}</h3>
				<p className={styles.text}>
					Ожидаемая дата доставки в пункт выдачи:
					<span className={styles.estimate}>{order.estimatedDate}</span>
				</p>
			</div>
			<div className={styles.right}>
				<Link href='' className={styles.btn}>
					Подробнее
				</Link>
			</div>
		</div>
	)
}

export default OrderItem
