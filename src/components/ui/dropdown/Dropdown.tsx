import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './Dropdown.module.scss'
import { IDropdown } from './interface/dropdown.interface'

const Dropdown: FC<IDropdown> = ({ data, parent }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<>
			<li className={styles.top}>
				<button className={parent.className} onClick={parent.onClick}>
					{parent.label}
				</button>
				<button
					className={cn(styles.button, {
						[styles.active]: isOpened
					})}
					onClick={() => setIsOpened(!isOpened)}
				>
					<Image
						priority
						src='/images/arrow-bottom-black.svg'
						width={14}
						height={12}
						alt='Prisma Arrow Bottom'
					/>
				</button>
			</li>
			<ul
				className={cn(styles.list, {
					[styles.active]: isOpened
				})}
			>
				{data.map(item => (
					<li key={item.key}>
						<button className={item.className} onClick={item.onClick}>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Dropdown
