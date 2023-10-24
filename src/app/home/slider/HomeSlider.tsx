'use client'

import { useNewProducts } from '@/hooks/queries/useNewProducts'
import Heading from '@/ui/heading/Heading'
import ProductSlider from '@/ui/sliders/ProductSlider'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HomeSlider.module.scss'

const HomeSlider: FC = () => {
	const { products, isLoading } = useNewProducts()

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<Heading className={styles.heading}>Новое</Heading>
				<Link className={styles.link} href='/catalog'>
					Другие новинки
				</Link>
			</div>
			<ProductSlider
				className={styles.slider}
				products={products || []}
				isLoading={isLoading}
				variant='large'
			/>
		</div>
	)
}

export default HomeSlider
