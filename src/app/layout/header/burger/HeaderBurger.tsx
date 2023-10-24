'use client'

import { useCategories } from '@/hooks/queries/useCategories'
import { useFilters } from '@/hooks/useFilters'
import { useProfile } from '@/hooks/useProfile'
import ListItem from '@/ui/list-item/ListItem'
import Loader from '@/ui/loader/Loader'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { categoryConvertToMenuItems } from '@/utils/convert-to-menu-item'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import Search from '../search/Search'
import styles from './HeaderBurger.module.scss'

const HeaderBurger: FC = () => {
	const { profile } = useProfile()
	const [isShow, setIsShow] = useState(false)
	const { data, isLoading } = useCategories()
	const { queryParams, updateQueryParams } = useFilters()
	const router = useRouter()

	return (
		<div className='relative'>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
				className={styles.open}
			>
				<Image
					priority
					width={26}
					height={26}
					src='/images/burger.svg'
					alt='Prisma Burger'
				/>
				<span>Категории</span>
			</button>
			<div
				className={cn(styles.wrapper, {
					[styles.active]: isShow
				})}
			>
				<div className={styles.heading}>
					<SubHeading>Категории</SubHeading>
					<button className={styles.close} onClick={() => setIsShow(!isShow)}>
						<Image
							priority
							src='/images/close.svg'
							width={26}
							height={26}
							alt='Prisma Close'
						/>
					</button>
				</div>
				<div className={styles.fill}>
					<div className={styles.search}>
						<Search />
					</div>
					<div className={styles.menu}>
						{isLoading ? (
							<Loader />
						) : data ? (
							<ul className={styles.list}>
								{categoryConvertToMenuItems(data).map(item => {
									return (
										<ListItem
											key={item.href}
											item={item}
											queryParams={queryParams}
											updateQueryParams={updateQueryParams}
										/>
									)
								})}
							</ul>
						) : (
							<div>Нет Категории</div>
						)}
					</div>
				</div>
				{profile && (
					<div className={styles.footer}>
						<button
							onClick={() => {
								router.push('/profile/main')
								setIsShow(!isShow)
							}}
						>
							Личный кабинет
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default HeaderBurger
