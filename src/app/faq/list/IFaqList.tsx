import SubHeading from '@/ui/sub-heading/SubHeading'
import { FC } from 'react'
import { IFaq } from '../interface/faq.interface'
import IFaqItem from '../item/IFaqItem'
import styles from './IFaqList.module.scss'

const IFaqList: FC<{ faq: IFaq }> = ({ faq: { items, title } }) => {
	return (
		<div className={styles.items}>
			<SubHeading className={styles.subtitle}>{title}</SubHeading>
			<div className={styles.fill}>
				{items.map(item => (
					<IFaqItem
						name={item.name}
						description={item.description}
						key={item.name}
					/>
				))}
			</div>
		</div>
	)
}

export default IFaqList
