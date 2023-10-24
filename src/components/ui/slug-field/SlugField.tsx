import { FC } from 'react'
import Field from '../field/Field'
import styles from './SlugField.module.scss'
import { ISlugField } from './interface/SlugField.interface'

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className={styles.wrapper}>
			<Field
				{...register('slug', {
					required: 'Slug обязательно!'
				})}
				label='Slug'
				error={error?.message}
			/>
			<button type='button' className={styles.badge} onClick={generate}>
				Генерировать
			</button>
		</div>
	)
}

export default SlugField
