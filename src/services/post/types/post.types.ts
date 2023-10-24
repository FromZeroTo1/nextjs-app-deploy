export type PostType = {
	name: string
	author: string
	poster: string
	categoryId: number
}

export type PostDataFilters = {
	sort?: EnumPostSort | string
	page?: string | number
	perPage: string | number
	searchTerm?: string
	category?: string
}

export enum EnumPostSort {
	POPULAR = 'По популярности',
	NEWEST = 'По новинке'
}

export type TypePostParamsFilters = {
	searchParams: PostDataFilters
}
