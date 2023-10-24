import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import styles from './ReactSelect.module.scss'
import {
	IReactSelect,
	IReactSelectOption
} from './interface/react-select.interface'

const animatedComponents = makeAnimated()

const ReactSelectComponent: FC<IReactSelect> = ({
	placeholder,
	error,
	isMulti,
	options,
	field,
	isLoading,
	label
}) => {
	const onChange = (newValue: OnChangeValue<IReactSelectOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IReactSelectOption[]).map(item => item.value)
				: (newValue as IReactSelectOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(option => field.value.indexOf(option.value) >= 0)
				: options.find(option => option.value === field.value)
		} else {
			return isMulti ? [] : null
		}
	}

	return (
		<div className={styles.selectContainer}>
			{label && <span>{label}</span>}
			<ReactSelect
				classNamePrefix='custom-select'
				options={options}
				value={getValue()}
				isMulti={isMulti}
				onChange={onChange}
				isLoading={isLoading}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default ReactSelectComponent
