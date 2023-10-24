import { ICategory } from '@/types/category.interface'
import {
	IMenuCategoryItem,
	IMenuItem
} from '../app/layout/header/interface/menu.interface'

export const categoryConvertToMenuItems = (
	categories: ICategory[]
): IMenuCategoryItem[] =>
	categories.map(category => ({
		label: category.name,
		href: `category/${category.slug}`,
		slug: category.slug,
		childrens: category.childrens
	}))

export const convertToMenuItems = (items: IMenuItem[]) =>
	items.map(item => ({
		label: item.label,
		href: `${item.href}`
	}))


