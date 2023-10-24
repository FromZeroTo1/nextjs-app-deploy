import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Heading from '../heading/Heading'
import styles from './Subscribe.module.scss'
import { ISubscribe } from './interface/subscribe.interface'

const Subscribe: FC<ISubscribe> = ({
	formClassName,
	wrapperClassName,
	heading = true
}) => {
	return (
		<div className={cn(styles.wrapper, wrapperClassName && wrapperClassName)}>
			{heading && <Heading className={styles.heading}>Новости и акции</Heading>}
			<form className={cn(styles.form, formClassName && formClassName)}>
				<div className={styles.field}>
					<input type='email' placeholder='e-mail' />
					<button>
						<Image
							priority
							src='/images/arrow-right-green.svg'
							width={37}
							height={15}
							alt='Prisma Right Arrow'
						/>
					</button>
				</div>
				<div className={styles.row}>
					<input className={styles.checkbox} type='checkbox' />
					<p className={styles.text}>
						Нажимая кнопку <span>“Подписаться”</span>, вы соглашаетесь с нашей{' '}
						<Link href='/'>Политикой конфиденциальности.</Link>
					</p>
				</div>
			</form>
		</div>
	)
}

export default Subscribe
