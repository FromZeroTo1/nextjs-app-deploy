'use client'

import { IProductCharacteristics } from '@/types/product.interface'
import { FC, useState } from 'react'
import styles from './ProductCharacteristics.module.scss'
import Image from 'next/image'

const ProductCharacteristics: FC<{
	characteristics: IProductCharacteristics
}> = ({ characteristics }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			{characteristics && (
				<>
					<div className={styles.top}>
						<h3 className={styles.title}>Характеристики</h3>
						<button
							className={styles.button}
							onClick={() => setIsShow(!isShow)}
						>
							{isShow ? (
								<Image
									priority
									src='/images/arrow-bottom.svg'
									width={12}
									height={8}
									alt='Prisma Description'
								/>
							) : (
								<Image
									priority
									src='/images/arrow-top.svg'
									width={12}
									height={8}
									alt='Prisma Description'
								/>
							)}
						</button>
					</div>
					{isShow && (
						<ul className={styles.list}>
							<li className={styles.item}>
								<span className={styles.name}>Ткань:</span>
								<span className={styles.value}>{characteristics.material}</span>
							</li>
							<li className={styles.item}>
								<span className={styles.name}>Сезон:</span>
								<span className={styles.value}>{characteristics.season}</span>
							</li>
							<li className={styles.item}>
								<span className={styles.name}>Цвет:</span>
								<span className={styles.value}>{characteristics.color}</span>
							</li>
							<li className={styles.item}>
								<span className={styles.name}>Стиль:</span>
								<span className={styles.value}>{characteristics.style}</span>
							</li>
							<li className={styles.item}>
								<span className={styles.name}>Рукав:</span>
								<span className={styles.value}>{characteristics.sleeve}</span>
							</li>
							<li className={styles.item}>
								<span className={styles.name}>Страна:</span>
								<span className={styles.value}>{characteristics.country}</span>
							</li>
						</ul>
					)}
				</>
			)}
		</>
	)
}

export default ProductCharacteristics
