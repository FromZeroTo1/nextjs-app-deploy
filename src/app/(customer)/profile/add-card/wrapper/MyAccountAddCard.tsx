import { FC } from 'react'
import styles from './MyAccountAddCard.module.scss'
import MyAccountAddCardForm from '../form/MyAccountAddCardForm'

const MyAccountAddCard: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<MyAccountAddCardForm />
				</div>
			</div>
		</div>
	)
}

export default MyAccountAddCard
