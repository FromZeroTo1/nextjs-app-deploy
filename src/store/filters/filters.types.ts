import { ProductDataFilters } from '@/services/product/types/product.types'

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: ProductDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof ProductDataFilters
	value: string
}