import type { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import styles from './Checkbox.module.scss'

interface ICheckbox {
	isChecked: boolean
	onClick: () => void
	className?: string
	style?: any
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
	isChecked,
	onClick,
	className,
	style,
	children
}) => {
	return (
		<button className={cn(styles.checkbox, className)} onClick={onClick}>
			<span
				className={cn({
					[styles.active]: isChecked
				})}
				style={style}
			/>
			<span>{children}</span>
		</button>
	)
}

export default Checkbox
