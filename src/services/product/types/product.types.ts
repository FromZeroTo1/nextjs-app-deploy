import { ICategory } from '@/types/category.interface'

export type ProductColorsType = {
	color: string
	images: string[]
	left: number
}

export type ProductDimensionsType = {
	dimension: string
	images: string[]
	left: number
}

export type ProductCharacteristicsType = {
	material: string
	season: string
	color: string
	style: string
	sleeve: string
	country: string
}

export type ProductType = {
	name: string
	description?: string
	salePrice?: number
	price: number
	sku?: string
	quantity: number
	colors?: ProductColorsType[]
	dimensions?: ProductDimensionsType[]
	characteristics?: ProductCharacteristicsType
	tags?: string[]
	images: string[]
	category: ICategory
}

export type ProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	minPrice?: string
	maxPrice?: string
	material?: string
	season?: string
	dimension?: string
	color?: string
	category?: string
}

export enum EnumProductSort {
	POPULAR = 'По популярности',
	NEWEST = 'По новинке',
	LOW_PRICE = 'Дешевле',
	HIGH_PRICE = 'Дороже',
	BY_DISCOUNT = 'По размеру скидки'
}

export type TypeParamsFilters = {
	searchParams: ProductDataFilters
}
