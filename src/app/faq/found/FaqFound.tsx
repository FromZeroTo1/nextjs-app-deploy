import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './FaqFound.module.scss'

const FaqFound: FC = () => {
	return (
		<div className={styles.found}>
			<Heading className={styles.heading}>Не нашли ответ?</Heading>
			<p className={styles.text}>
				Если вы не нашли ответ на свой вопрос, напишите, пожалуйста, нам на
				почту. Постараемся ответить вам как можно быстрее.
			</p>
			<Button className={styles.button} variant='light'>
				prisma@gmail.com
			</Button>
		</div>
	)
}

export default FaqFound
