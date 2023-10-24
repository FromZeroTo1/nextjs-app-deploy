import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './FooterInfo.module.scss'

const FooterInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Link href='/'>
				<Image
					priority
					width={198}
					height={70}
					src='/images/logo.svg'
					alt='Prisma'
				/>
			</Link>
			<p className={styles.text}>
				Интернет-магазин одежды, обуви и аксессуаров.
			</p>
		</div>
	)
}

export default FooterInfo
