import Link from 'next/link'
import { FC } from 'react'
import { IMenuItem } from '../interface/menu.interface'
import styles from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={item.link}>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
