import { FC, useState } from 'react'
import styles from './Input.module.scss'
import { IInput } from './interface/input.interface'

const Input: FC<IInput> = ({
	placeholder,
	label,
	name = '',
	className = '',
	value,
	onChange
}) => {
	const [inputValue, setInputValue] = useState(value || '')

	return (
		<div className={`${styles.wrapper} ${className && className}`}>
			{label && <label className={styles.label}>{label}</label>}
			<input
				type='text'
				placeholder={placeholder}
				className={styles.input}
				name={name}
				value={inputValue}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
