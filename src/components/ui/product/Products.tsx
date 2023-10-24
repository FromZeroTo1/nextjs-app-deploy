import { IProduct } from '@/types/product.interface'
import Loader from '@/ui/loader/Loader'
import ProductItem from '@/ui/product/product-item/ProductItem'
import { FC } from 'react'
import styles from './Products.module.scss'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
}

const Products: FC<ICatalog> = ({ products, isLoading }) => {
	if (isLoading) return <Loader />

	return (
		<div className={styles.section}>
			{products.length && (
				<>
					<div className={styles.products}>
						{products.map(product => (
							<div key={product.id} className={styles.product}>
								<ProductItem product={product} />
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Products
