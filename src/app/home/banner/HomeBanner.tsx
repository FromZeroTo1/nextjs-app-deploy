import Image from 'next/image'
import { FC } from 'react'
import styles from './HomeBanner.module.scss'

const HomeBanner: FC = () => {
	return (
		<div className={styles.banner}>
			<Image
				className={styles.image}
				quality={100}
				priority
				draggable={false}
				sizes={'100vw'}
				style={{width: '100%', height: '100%'}}
				width={0}
				height={0}
				src='/images/home/banner.png'
				alt='Prisma'
			/>
		</div>
	)
}

export default HomeBanner
