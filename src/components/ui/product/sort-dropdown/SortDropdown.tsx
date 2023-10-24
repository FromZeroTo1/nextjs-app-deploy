import { useFilters } from '@/hooks/useFilters'
import { EnumProductSort } from '@/services/product/types/product.types'
import Select from '@/ui/select/Select'
import { FC } from 'react'
import { SORT_SELECT_DATA } from './sort-select.data'

const SortDropdown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<div className='text-right z-1'>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
			/>
		</div>
	)
}

export default SortDropdown
