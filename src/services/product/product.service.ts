import { instance } from '@/api/api.interceptor'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'
import { ProductDataFilters, ProductType } from './types/product.types'

const PRODUCTS = 'products'

export const ProductService = {
	async getAll(queryData = {} as ProductDataFilters) {
		const { data } = await instance<TypePaginationProducts>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})

		return data
	},

	async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		const response = await instance<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})

		return response.data
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ProductType) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	},

	async updateCountOpened(slug: string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/update-count-opened`,
			method: 'PUT',
			data: {
				slug
			}
		})
	}
}
