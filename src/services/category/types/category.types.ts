import { ICategory } from '@/types/category.interface'

export type CategoryType = {
	id: number
	slug: string
	name: string
	childrens: ICategory[]
}
