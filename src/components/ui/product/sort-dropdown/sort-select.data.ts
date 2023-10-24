import { EnumProductSort } from '@/services/product/types/product.types'
import { ISelectItem } from '@/ui/select/select.interface'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.POPULAR,
		label: 'По популярности'
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'По новинке'
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'Дешевле'
	},
	{
		key: EnumProductSort.HIGH_PRICE,
		label: 'Дороже'
	},
	{
		key: EnumProductSort.BY_DISCOUNT,
		label: 'По размеру скидки'
	},
]