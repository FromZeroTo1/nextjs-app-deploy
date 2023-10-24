import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Dashboard from './dashboard/Dashboard'

export const metadata: Metadata = {
	title: 'Панель приборов',
	...NO_INDEX_PAGE
}

export default function AdminDashboardPage() {
	return <Dashboard />
}
