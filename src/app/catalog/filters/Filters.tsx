import { FC } from 'react'
import ColorGroup from './color-group/ColorGroup'
import DimensionGroup from './dimension-group/DimensionGroup'
import MaterialGroup from './material-group/MaterialGroup'
import PriceGroup from './price-group/PriceGroup'
import SeasonGroup from './season-group/SeasonGroup'

const Filters: FC = () => {
	return (
		<div>
			<DimensionGroup />
			<ColorGroup />
			<MaterialGroup />
			<SeasonGroup />
			<PriceGroup />
		</div>
	)
}

export default Filters
