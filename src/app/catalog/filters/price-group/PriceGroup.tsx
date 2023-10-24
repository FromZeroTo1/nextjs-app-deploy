import { useFilters } from '@/hooks/useFilters'
import Range from '@/ui/range/Range'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Цена'>
			<Range
				max={2000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateQueryParams('minPrice', value)}
				onChangeToValue={value => updateQueryParams('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
