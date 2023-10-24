import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import CategoryList from './CategoryList'

export const metadata: Metadata = {
	title: 'Категории',
	...NO_INDEX_PAGE
}

export default function AdminCategoriesPage() {
	return <CategoryList />
}
