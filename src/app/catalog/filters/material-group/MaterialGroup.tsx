import { useMaterials } from '@/hooks/queries/useMaterials'
import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/Checkbox'
import Loader from '@/ui/loader/Loader'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

const MaterialGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { materials, isLoading } = useMaterials()
	
	return (
		<FilterWrapper title='Материал'>
			{ isLoading ? (
				<Loader />
			) : materials.length ? (
				materials.map(material => {
					const isChecked = queryParams.material === material

					return (
						<Checkbox 
						isChecked={isChecked}
						onClick={() => updateQueryParams(
							'material',
							isChecked ? '' : material
						)}
						key={material}
						className='mb-2 text-sm'
						>
							{material}
						</Checkbox>
					)
				})
			) : 'Нет Материалов'}
		</FilterWrapper>
	)
}

export default MaterialGroup