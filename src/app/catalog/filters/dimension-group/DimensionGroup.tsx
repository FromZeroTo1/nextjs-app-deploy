import { useDimensions } from '@/hooks/queries/useDimensions'
import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/Checkbox'
import Loader from '@/ui/loader/Loader'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

import styles from '../Filters.module.scss'

const DimensionGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { dimensions, isLoading } = useDimensions()

	return (
		<FilterWrapper title='Размеры'>
			{isLoading ? (
				<Loader />
			) : dimensions.length ? (
				<div className={styles.list}>
					{dimensions.map(dimension => {
						const isChecked = queryParams.dimension === dimension

						return (
							<Checkbox
								isChecked={isChecked}
								onClick={() =>
									updateQueryParams('dimension', isChecked ? '' : dimension)
								}
								key={dimension}
								className='mb-2 text-sm'
							>
								{dimension}
							</Checkbox>
						)
					})}
				</div>
			) : (
				'Нет Размеров'
			)}
		</FilterWrapper>
	)
}

export default DimensionGroup
