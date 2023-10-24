import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from './CartItem.module.scss'
import CartActions from './cart-actions/CartActions'
import Link from 'next/link'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Link href='#' className={styles.preview}>
				<Image
					priority
					src={item.product.images[0]}
					width={150}
					height={150}
					alt={item.product.name}
				/>
			</Link>
			<div className={styles.fill}>
				<div className={styles.info}>
					<div className={styles.heading}>
						<h3>{item.product.name}</h3>
						{item.salePrice ? (
							<div>
								<span className={styles.salePrice}>{item.price}</span>
								<span className={styles.price}>{item.salePrice} р.</span>
							</div>
						) : (
							<div className={styles.price}>{item.price} р.</div>
						)}
					</div>
					<div className={styles.center}>
						<span>{item.color}Цвет: бежевый</span>
						<span>{item.dimension}Размер: L</span>
					</div>
				</div>
				<div className={styles.actions}>
					<CartActions item={item} />
				</div>
			</div>
		</div>
	)
}

export default CartItem
