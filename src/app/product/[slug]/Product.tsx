'use client'

import { useUpdateCountOpened } from '@/hooks/useUpdateCountOpened'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import ProductSlider from '@/ui/sliders/ProductSlider'
import Subscribe from '@/ui/subscribe/Subscribe'
import { useQuery } from '@tanstack/react-query'
import styles from './Product.module.scss'
import ProductGallery from './gallery/ProductGallery'
import ProductInformation from './information/ProductInformation'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	additionalProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	additionalProducts,
	slug = ''
}: IProductPage) {
	const { data: product } = useQuery(
		['get product', initialProduct.id],
		() => ProductService.getBySlug(slug),
		{
			initialData: initialProduct,
			enabled: !!slug
		}
	)

	useUpdateCountOpened(product.slug)
	console.log()

	return (
		<div className={styles.wrapper}>
			<div className={styles.fill}>
				<ProductGallery images={product.images} title={product.name} />
				<ProductInformation product={product} />
			</div>
			<div className={styles.complect}>
				<ProductSlider
					className={styles.slider}
					products={additionalProducts}
					heading='Добавить комплект:'
					variant='large'
				/>
			</div>
			<div className={styles.subscribe}>
				<Subscribe formClassName={styles.form} />
			</div>
			<div className={styles.tag}>{/* <Tags /> */}</div>
			<div className={styles.similar}>
				<ProductSlider
					className={styles.slider}
					products={similarProducts}
					heading='Похожие товары:'
					variant='large'
				/>
			</div>
		</div>
	)
}
