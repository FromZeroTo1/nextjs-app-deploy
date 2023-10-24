'use client'

import { useProfile } from '@/hooks/useProfile'
import { IFullUser } from '@/types/user.interface'
import { FC } from 'react'
import MyAccountOrdersHistory from '../history/MyAccountOrdersHistory'
import MyAccountActiveOrders from '../active/MyAccountActiveOrders'
import styles from './MyAccountOrders.module.scss'

const MyAccountOrders: FC = () => {
	const { profile } = useProfile()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<MyAccountActiveOrders profile={profile as IFullUser} />
				<div className={styles.row}>
					<MyAccountOrdersHistory profile={profile as IFullUser} />
				</div>
			</div>
		</div>
	)
}

export default MyAccountOrders
