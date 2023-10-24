import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/Checkbox'
import Loader from '@/ui/loader/Loader'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'
import { useSeasons } from '@/hooks/queries/useSeasons'

const SeasonGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { seasons, isLoading } = useSeasons()
	
	return (
		<FilterWrapper title='Сезоны'>
			{ isLoading ? (
				<Loader />
			) : seasons.length ? (
				seasons.map(season => {
					const isChecked = queryParams.season === season

					return (
						<Checkbox 
						isChecked={isChecked}
						onClick={() => updateQueryParams(
							'season',
							isChecked ? '' : season
						)}
						key={season}
						className='mb-2 text-sm'
						>
							{season}
						</Checkbox>
					)
				})
			) : 'Нет Сезонов'}
		</FilterWrapper>
	)
}

export default SeasonGroup