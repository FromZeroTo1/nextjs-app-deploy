'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Container from '@/ui/container/Container'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Header.module.scss'
import AdminPanelBtn from './admin-btn/AdminPanelBtn'
import HeaderBurger from './burger/HeaderBurger'
import HeaderCart from './cart/HeaderCart'
import HeaderFavorite from './favorite/HeaderFavorite'
import HeaderProfile from './profile/HeaderProfile'
import Search from './search/Search'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header>
			<div className={styles.marquee}>
				<div className={styles.list}>
					{[1, 2, 3, 4, 5, 6, 1, 2, 3, 4].map((item, index) => (
						<span key={index} className={styles.item}>
							Скидка 30% на первый заказ
						</span>
					))}
				</div>
			</div>

			<Container>
				<div className='flex justify-between items-center py-[15px]'>
					<HeaderBurger />
					<Link href='/'>
						<Image
							priority
							width={198}
							height={70}
							src='/images/logo.svg'
							alt='Prisma'
						/>
					</Link>
					<div className='flex items-center'>
						<Search />
						<div className='flex gap-2.5 ml-10'>
							{user?.isAdmin && !isAdminPanel && <AdminPanelBtn />}
							<HeaderFavorite />
							<HeaderCart />
							<HeaderProfile />
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
