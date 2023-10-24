import { IMenuCategoryItem } from '@/app/layout/header/interface/menu.interface'
import { ProductDataFilters } from '@/services/product/types/product.types'

export interface IListItem {
	item: IMenuCategoryItem
	queryParams: ProductDataFilters
	updateQueryParams: (key: keyof ProductDataFilters, value: string) => void
}
