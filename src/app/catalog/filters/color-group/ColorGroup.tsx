import { useColors } from '@/hooks/queries/useColors'
import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/Checkbox'
import Loader from '@/ui/loader/Loader'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

import styles from '../Filters.module.scss'

const ColorGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { colors, isLoading } = useColors()

	return (
		<FilterWrapper title='Цвета'>
			{isLoading ? (
				<Loader />
			) : colors.length ? (
				<div className={styles.color}>
					{colors.map(color => {
						const isChecked = queryParams.color === color

						return (
							<Checkbox
								isChecked={isChecked}
								onClick={() =>
									updateQueryParams('color', isChecked ? '' : color)
								}
								key={color}
								className={`mb-2 text-sm`}
								style={{ backgroundColor: color, border: 'none' }}
							>
							</Checkbox>
						)
					})}
				</div>
			) : (
				'Нет Цветов'
			)}
		</FilterWrapper>
	)
}

export default ColorGroup
