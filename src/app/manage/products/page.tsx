import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ProductList from './ProductList'

export const metadata: Metadata = {
	title: 'Продукты',
	...NO_INDEX_PAGE
}

export default function AdminProductsPage() {
	return <ProductList />
}
