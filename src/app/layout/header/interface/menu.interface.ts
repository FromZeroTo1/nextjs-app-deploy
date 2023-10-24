import { ICategory } from '@/types/category.interface'

export interface IMenuCategoryItem {
	label: string
	href: string
	slug: string
	childrens: ICategory[]
}

export interface IMenuItem {
	label: string
	href: string
}