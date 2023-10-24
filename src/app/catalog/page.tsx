import { ProductService } from '@/services/product/product.service'
import { ProductDataFilters, TypeParamsFilters } from '@/services/product/types/product.types'
import type { Metadata } from 'next'
import Catalog from './Catalog'

export const metadata: Metadata = {
	title: 'Магазин',
	description: ''
}

export const revalidate = 60

async function getProducts(searchParams: ProductDataFilters) {
	const data = await ProductService.getAll(searchParams)
	return data
}

export default async function CatalogPage({searchParams}: TypeParamsFilters) {
	const data = await getProducts(searchParams)

	return <Catalog products={data.products} length={data.length} />
}
