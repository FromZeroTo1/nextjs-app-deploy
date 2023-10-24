import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart.interface'
import { FC } from 'react'
import styles from './CartActions.module.scss'
import Image from 'next/image'
import FavoriteButton from '@/ui/product/favorite-btn/FavoriteButton'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className={styles.wrapper}>
			<div className={styles.actions}>
				<button
					className={styles.btn}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<Image
						priority
						src='/images/minus.svg'
						alt='Prisma Minus'
						width={16}
						height={2}
					/>
				</button>

				<span className={styles.quantity}>{quantity}</span>

				<button
					className={styles.btn}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<Image
						priority
						src='/images/plus.svg'
						alt='PrismaPlus'
						width={16}
						height={16}
					/>
				</button>
			</div>
			<div className={styles.btns}>
				<button
					onClick={() => removeFromCart({ id: item.id })}
					className={styles.btn}
				>
					<Image
						priority
						src='/images/delete.svg'
						alt='Prisma Delete'
						width={18}
						height={20}
					/>
					<span>Удалить</span>
				</button>
				<FavoriteButton
					productId={item.product.id}
					defaultImage='black-heart.svg'
					text='В избранное'
					className={styles.btn}
				/>
			</div>
		</div>
	)
}

export default CartActions
