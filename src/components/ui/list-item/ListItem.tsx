'use client'

import { categoryConvertToMenuItems } from '@/utils/convert-to-menu-item'
import cn from 'clsx'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './ListItem.module.scss'
import { IListItem } from './interface/ListItem'

const ListItem: FC<IListItem> = ({ item, queryParams, updateQueryParams }) => {
	const [isOpened, setIsOpened] = useState(false)
	const isChecked = queryParams.category === item.slug
	const pathname = usePathname()
	const router = useRouter()

	const handleClick = () => {
		if (isOpened) {
			setIsOpened(false)
		} else {
			setIsOpened(true)
		}

		if (pathname !== '/catalog') {
			router.push(`catalog/?category=${item.slug}`)
		}

		updateQueryParams('category', isChecked ? '' : item.slug)
	}

	const handleOpen = () => {
		if (isOpened) {
			setIsOpened(false)
		} else {
			setIsOpened(true)
		}
	}

	return (
		<li className={styles.parent}>
			<div className={styles.top}>
				<button
					className={cn(styles.item, {
						[styles.active]: isChecked
					})}
					onClick={handleClick}
				>
					{item.label}
				</button>
				{item.childrens.length > 0 && (
					<button
						onClick={handleOpen}
						className={cn(styles.open, {
							[styles.active]: isOpened
						})}
					>
						<Image
							priority
							src='/images/arrow-bottom-black.svg'
							width={14}
							height={12}
							alt='Prisma Arrow Bottom'
						/>
					</button>
				)}
			</div>
			{item.childrens.length ? isOpened && (
				<ul
					className={cn(styles.list, {
						[styles.active]: isOpened
					})}
				>
					{categoryConvertToMenuItems(item.childrens).map(subCategory => {
						const subCategoryIsChecked =
							queryParams.category === subCategory.slug
						return (
							<li key={subCategory.href}>
								<button
									className={cn(styles.item, {
										[styles.active]: subCategoryIsChecked
									})}
									onClick={() => {
										if (queryParams.category !== subCategory.slug) {
											updateQueryParams(
												'category',
												subCategoryIsChecked ? '' : subCategory.slug
											)
										}
									}}
								>
									{subCategory.label}
								</button>
							</li>
						)
					})}
				</ul>
			) : ''}
		</li>
	)
}

export default ListItem
