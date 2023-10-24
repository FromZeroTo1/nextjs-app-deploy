import Subscribe from '@/ui/subscribe/Subscribe'
import { FC } from 'react'
import styles from './Footer.module.scss'
import FooterBottom from './bottom/FooterBottom'
import FooterInfo from './info/FooterInfo'
import Menu from './menu/Menu'
import { menu, stores } from './menu/data/menu.data'

const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.wrapper}>
				<FooterInfo />
				<Menu menu={menu} />
				<Menu menu={stores} />
				<Subscribe wrapperClassName={styles.subscribe} heading={false} />
			</div>
			<FooterBottom />
		</footer>
	)
}

export default Footer
