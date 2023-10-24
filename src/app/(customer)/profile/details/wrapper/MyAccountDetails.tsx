'use client'

import { FC } from 'react'
import MyAccountCredentials from '../credentials/MyAccountCredentials'
import { useProfile } from '@/hooks/useProfile'
import { IFullUser } from '@/types/user.interface'
import styles from './MyAccountDetails.module.scss'
import MyAccountCards from '../cards/MyAccountCards'
import MyAccountAddresses from '../addresses/MyAccountAddresses'

const MyAccountDetails: FC = () => {
	const { profile } = useProfile()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<MyAccountCredentials profile={profile as IFullUser} />
				</div>
				<div className={styles.row}>
					<MyAccountCards profile={profile as IFullUser} />
				</div>
				<div className={styles.row}>
					<MyAccountAddresses profile={profile as IFullUser} />
				</div>
			</div>
		</div>
	)
}

export default MyAccountDetails
