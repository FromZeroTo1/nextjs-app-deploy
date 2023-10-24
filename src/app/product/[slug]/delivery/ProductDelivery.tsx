'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './ProductDelivery.module.scss'

const ProductDelivery: FC<{ delivery: string }> = ({ delivery }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			{delivery && (
				<>
					<div className={styles.top}>
						<h3 className={styles.title}>Доставка и возврат</h3>
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
					{isShow && <div className={styles.content}>{delivery}</div>}
				</>
			)}
		</>
	)
}

export default ProductDelivery
