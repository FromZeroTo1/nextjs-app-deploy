'use client'

import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { IFaqItem } from '../interface/faq.interface'
import styles from './IFaqItem.module.scss'

const IFaqItem: FC<IFaqItem> = ({ name, description }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.item}>
			<button
				className={cn(styles.name, {
					[styles.active]: isShow
				})}
				onClick={() => setIsShow(!isShow)}
			>
				{name}
				<Image
					priority
					src={'images/arrow-bottom.svg'}
					width={12}
					height={8}
					alt={name}
				/>
			</button>
			<div
				className={cn(styles.description, {
					[styles.active]: isShow
				})}
			>
				{description}
			</div>
		</div>
	)
}

export default IFaqItem
