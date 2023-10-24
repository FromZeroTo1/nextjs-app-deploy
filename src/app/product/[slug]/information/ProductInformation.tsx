import { IProduct } from '@/types/product.interface'
import FavoriteButton from '@/ui/product/favorite-btn/FavoriteButton'
import styles from './ProductInformation.module.scss'
import ProductCharacteristics from '../characteristics/ProductCharacteristics'
import ProductColors from '../colors/ProductColors'
import ProductDescription from '../description/ProductDescription'
import ProductDimensions from '../dimensions/ProductDimensions'
import ProductForm from '../form/ProductForm'
import ProductPrice from '../price/ProductPrice'
import ProductAdvantages from '../advantages/ProductAdvantages'
import ProductDelivery from '../delivery/ProductDelivery'

interface IProductInformation {
	product: IProduct
}

export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className={styles.info}>
			<div className={styles.fill}>
				<div className={styles.top}>
					<div className={styles.box}>
						<div>
							<span className={styles.bought}>
								Этот товар купили {product.boughtTimes} раз.
							</span>
							<h1 className={styles.name}>{product.name}</h1>
							<span className={styles.sku}>Артикул: {product.sku}</span>
						</div>
						<FavoriteButton
							productId={product.id}
							defaultImage='black-heart.svg'
						/>
					</div>
					<ProductPrice price={product.price} salePrice={product.salePrice} />
				</div>
				<div className={styles.details}>
					<ProductColors colors={product.colors} />
					<ProductDimensions dimensions={product.dimensions} />
				</div>
				<ProductForm product={product} />
				<ProductAdvantages />
			</div>
			<div className={styles.content}>
				<div className={`${styles.description} ${styles.contentItem}`}>
					<ProductDescription description={product.description} />
				</div>
				<div className={`${styles.characteristics} ${styles.contentItem}`}>
					<ProductCharacteristics characteristics={product.characteristics} />
				</div>
				<div className={`${styles.delivery} ${styles.contentItem}`}>
					<ProductDelivery delivery={product.description} />
				</div>
			</div>
		</div>
	)
}
