import { FC } from 'react'
import Social from '../social/Social'
import { social } from '../social/data/social.data'
import styles from './FooterBottom.module.scss'

const FooterBottom: FC = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.copy}>
				@2023 Призма. Публичная оферта и условия обработки персональных данных.
			</p>
			<Social social={social} />
		</div>
	)
}

export default FooterBottom
