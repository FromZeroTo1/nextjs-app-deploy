import Image from 'next/image'
import { FC } from 'react'
import styles from './ProductAdvantages.module.scss'

const ProductAdvantages: FC = () => {
	return (
		<ul>
			<li className={styles.item}>
				<Image
					priority
					width={44}
					height={44}
					src={'/images/product/refund.svg'}
					alt='Prisma Refund'
				/>
				Удобный возврат в течение 30 дней.
			</li>
			<li className={styles.item}>
				<Image
					priority
					width={44}
					height={44}
					src={'/images/product/delivery.svg'}
					alt='Prisma Delivery'
				/>
				Доставка до 10 дней.
			</li>
			<li className={styles.item}>
				<Image
					priority
					width={44}
					height={44}
					src={'/images/product/sale.svg'}
					alt='Prisma Sale'
				/>
				Скидка 500 рублей на первую покупку от 3500 рублей.
			</li>
		</ul>
	)
}

export default ProductAdvantages
