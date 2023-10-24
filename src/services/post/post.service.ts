import { instance } from '@/api/api.interceptor'
import { IPost, TypePaginationPosts } from '@/types/post.interface'
import { PostDataFilters, PostType } from './types/post.types'

const POSTS = 'posts'

export const PostService = {
	async getAll(queryData = {} as PostDataFilters) {
		const { data } = await instance<TypePaginationPosts>({
			url: POSTS,
			method: 'GET',
			params: queryData
		})

		return data
	},

	async getPopular(limit?: string | number) {
		return instance<IPost[]>({
			url: `${POSTS}/popular`,
			method: 'GET',
			params: { limit }
		})
	},

	async getBySlug(slug: string) {
		const response = await instance<IPost>({
			url: `${POSTS}/by-slug/${slug}`,
			method: 'GET'
		})

		return response.data
	},

	async getById(id: string | number) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IPost>({
			url: POSTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: PostType) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'DELETE'
		})
	},

	async updateCountOpened(slug: string) {
		return instance<IPost>({
			url: `${POSTS}/update-count-opened`,
			method: 'PUT',
			data: {
				slug
			}
		})
	}
}
