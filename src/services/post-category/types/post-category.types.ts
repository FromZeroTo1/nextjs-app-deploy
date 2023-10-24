import { ICategory } from '@/types/category.interface'

export type PostCategoryType = {
	id: number
	slug: string
	name: string
	childrens: ICategory[]
}
