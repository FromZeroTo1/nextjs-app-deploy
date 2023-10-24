'use client'

import { usePopularCategories } from '@/hooks/queries/usePopularCategories'
import Loader from '@/ui/loader/Loader'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HomeCategories.module.scss'

const HomeCategories: FC = () => {
	const { isLoading, data } = usePopularCategories(5)

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.wrapper}>
			{data?.map(cat => (
				<div className={styles.item} key={cat.id}>
					<div className={styles.preview}>
						<Link href={cat.slug} className={styles.link}>
							<Image
								quality={100}
								priority
								width={0}
								height={0}
								fill
								sizes='100vw'
								style={{ width: '100%', height: '100%' }}
								src={cat.mostPopularProduct.images[0]}
								alt={`Prisma ${cat.name}`}
							/>
						</Link>
					</div>
					<p className={styles.name}>{cat.name}</p>
				</div>
			))}
		</div>
	)
}

export default HomeCategories
