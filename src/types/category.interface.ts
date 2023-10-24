import { IPopularProduct } from './product.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
	childrens: ICategory[]
	createdAt: string
}

export interface IPopularCategory {
	id: number
	name: string
	slug: string
	childrens: ICategory[]
	createdAt: string
	mostPopularProduct: IPopularProduct
}