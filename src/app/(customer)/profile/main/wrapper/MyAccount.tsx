'use client'

import { useProfile } from '@/hooks/useProfile'
import { IFullUser } from '@/types/user.interface'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import MyAccountData from '../data/MyAccountData'
import MyAccountNotifications from '../notifications/MyAccountNotifications'
import MyAccountOrdersMain from '../orders/MyAccountOrdersMain'
import MyAccountPromocodes from '../promocodes/MyAccountPromocodes'
import styles from './MyAccount.module.scss'

const MyAccount: FC = () => {
	const { profile } = useProfile()

	return (
		<div className={styles.container}>
			<Heading>Личный кабинет</Heading>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<MyAccountData profile={profile as IFullUser} />
				</div>
				<div className={styles.row}>
					<MyAccountPromocodes profile={profile as IFullUser} />
				</div>
				<div className={styles.row}>
					<MyAccountOrdersMain profile={profile as IFullUser} />
				</div>
				<div className={styles.row}>
					<MyAccountNotifications profile={profile as IFullUser} />
				</div>
			</div>
		</div>
	)
}

export default MyAccount
