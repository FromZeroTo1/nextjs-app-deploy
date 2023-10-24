import { IFullUser } from '@/types/user.interface'
import { FC } from 'react'
import styles from './MyAccountPromocodes.module.scss'
import SubHeading from '@/ui/sub-heading/SubHeading'
import Image from 'next/image'

const MyAccountPromocodes: FC<{ profile: IFullUser }> = ({ profile }) => {
	return (
		<>
			<SubHeading className={styles.subtitle}>Промокоды</SubHeading>
			<div className={styles.fill}>
				{profile?.promocodes.length > 0 ? (
					<div className={styles.promocodes}>
						{profile.promocodes.map(promocode => (
							<div className={styles.promocode} key={promocode.id}>
								<p className={styles.description}>{promocode.description}</p>
								<div className={styles.fill}>
									<span className={styles.code}>{promocode.code}</span>
									<button className={styles.btn}>
										<Image
											priority
											src='images/copy.svg'
											width={16}
											height={19}
											alt='Prisma Copy'
										/>
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className={styles.notfound}>У вас нет активных промокодов.</p>
				)}
			</div>
		</>
	)
}

export default MyAccountPromocodes
