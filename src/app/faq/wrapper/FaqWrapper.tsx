import { FC } from 'react'
import { delivery, refund } from '../data/faq.data'
import FaqFound from '../found/FaqFound'
import IFaqList from '../list/IFaqList'
import styles from './FaqWrapper.module.scss'

const FaqWrapper: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<IFaqList faq={delivery} />
				</div>
				<div className={styles.row}>
					<IFaqList faq={refund} />
				</div>
			</div>
			<FaqFound />
		</div>
	)
}

export default FaqWrapper
