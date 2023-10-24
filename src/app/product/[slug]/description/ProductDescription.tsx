'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './ProductDescription.module.scss'

const ProductDescription: FC<{ description: string }> = ({ description }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			{description && (
				<>
					<div className={styles.top}>
						<h3 className={styles.title}>Описание</h3>
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
					{isShow && <div className={styles.content}>{description}</div>}
				</>
			)}
		</>
	)
}

export default ProductDescription
