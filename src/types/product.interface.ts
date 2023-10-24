import { ICategory } from './category.interface'

export interface IPopularProduct {
	id: number
	name: string
	views: number
	images: string[]
}

export interface IProductColors {
	name: string
	hex: string
	images: string[]
	left: number
}

export interface IProductDimensions {
	dimension: string
	images: string[]
	left: number
}

export interface IProductCharacteristics {
	material: string
	season: string
	color: string
	style: string
	sleeve: string
	country: string
}

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	salePrice: number
	price: number
	views: number
	boughtTimes: number
	sku: string
	quantity: number
	images: string[]
	colors: IProductColors[]
	dimensions: IProductDimensions[]
	characteristics: IProductCharacteristics
	tags: string[]
	category: ICategory
	createdAt: string
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
