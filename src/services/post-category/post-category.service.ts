import { instance } from '@/api/api.interceptor'
import { ICategoryEditInput } from '@/app/manage/category/edit/[id]/interface/categoryEdit.interface'
import { ICategory } from '@/types/category.interface'
import { IPostCategory } from '@/types/post.interface'

const POST_CATEGORIES = 'post-categories'

export const PostCategoryService = {
	async getAll(searchTerm?: string) {
		return instance<IPostCategory[]>({
			url: POST_CATEGORIES,
			method: 'GET',
			params: { searchTerm }
		})
	},

	async getById(id: string | number) {
		return instance<IPostCategory>({
			url: `${POST_CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: POST_CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ICategoryEditInput) {
		return instance<ICategory>({
			url: `${POST_CATEGORIES}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${POST_CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
