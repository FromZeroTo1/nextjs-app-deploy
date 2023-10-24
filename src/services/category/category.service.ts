import { instance } from '@/api/api.interceptor'
import { ICategoryEditInput } from '@/app/manage/category/edit/[id]/interface/categoryEdit.interface'
import { ICategory, IPopularCategory } from '@/types/category.interface'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll(searchTerm?: string, limit?: string | number) {
		return instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET',
			params: { searchTerm, limit }
		})
	},

	async getPopular(limit?: string | number) {
		return instance<IPopularCategory[]>({
			url: `${CATEGORIES}/popular`,
			method: 'GET',
			params: { limit }
		})
	},

	async getById(id: string | number) {
		return instance<ICategoryEditInput>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async getChildrensByParentId(id: string | number) {
		return instance<ICategory[]>({
			url: `${CATEGORIES}/by-parent/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ICategoryEditInput) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
