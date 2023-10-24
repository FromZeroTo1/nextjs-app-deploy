import Button from '@/ui/button/Button'
import Image from 'next/image'
import { FC } from 'react'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.fill}>
				<Image
					quality={100}
					priority
					src='/images/not-found/not-found.png'
					width={500}
					height={230}
					alt='Prisma Not Found'
					className={styles.image}
				/>
				<p className={styles.text}>
					Кажется, со ссылкой проблема — страница не найдена. ... но вы можете
					оценить нашу коллекцию кроссовок :)
				</p>
				<Button variant='light'>На главную</Button>
				<span className={styles.problem}>Написать нам о проблеме</span>
			</div>
		</div>
	)
}

export default NotFound
