import { ICategory } from '@/types/category.interface'

export interface ICategoryEditInput extends Omit<ICategory, 'id'> {
	
}