import { IProduct } from '@/types/product.interface'
import ProductItem from '@/ui/product/product-item/ProductItem'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { FC } from 'react'
import styles from './ProductSimilar.module.scss'

const ProductSimilar: FC<{products: IProduct[]}> = ({products}) => {
	return (
		<>
		{products.length && (
			<div className={styles.wrapper}>
				<SubHeading>
					Добавить комплект:
				</SubHeading>
				<div className={styles.products}>
					{products.map(product => 
						<div className={styles.product}>
							<ProductItem key={product.id} product={product} />
						</div>
					)}
				</div>
			</div>
		)}
		</>
	)
}

export default ProductSimilar