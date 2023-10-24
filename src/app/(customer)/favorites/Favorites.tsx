'use client'

import { useProfile } from '@/hooks/useProfile'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/sub-heading/SubHeading'
import styles from './Favorites.module.scss'
import Products from '@/ui/product/Products'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
	const { profile } = useProfile()
	return (
		<div className={styles.wrapper}>
			<Heading className={styles.title}>Избранное</Heading>
			<div className={styles.products}>
				<SubHeading className={styles.subtitle}>
					Избранные товары
				</SubHeading>
				{profile?.favorites ? (
					<Products products={profile?.favorites || []} />
				) : (
					<p className={styles.not}>У вас нет избранных товаров.</p>
				)}
			</div>
			<div className={styles.products}>
				<SubHeading className={styles.subtitle}>
					Избранные образы
				</SubHeading>
				{false ? (
					<Products products={profile?.favorites || []} />
				) : (
					<p className={styles.not}>У вас нет избранных образов.</p>
				)}
			</div>
		</div>
	)
}
