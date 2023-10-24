import { FC } from 'react'
import styles from './MyAccountData.module.scss'
import SubHeading from '@/ui/sub-heading/SubHeading'
import Link from 'next/link'
import { IFullUser } from '@/types/user.interface'

const MyAccountData: FC<{profile: IFullUser}> = ({profile}) => {
	return (
			<>
			<SubHeading className={styles.subtitle}>Мои данные</SubHeading>
			<div className={styles.fill}>
				{profile?.name ? (
					<span className={styles.value}>{profile.name}</span>
				) : (
					<p className={styles.notfound}>Имя Фамилия</p>
				)}
				<Link href='/profile/details' className={styles.btn}>
					Смотреть данные
				</Link>
			</div>
			</>
	)
}

export default MyAccountData
