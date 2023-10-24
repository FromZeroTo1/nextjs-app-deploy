import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import OrderList from './OrderList'

export const metadata: Metadata = {
	title: 'Заказы',
	...NO_INDEX_PAGE
}

export default function AdminOrdersPage() {
	return <OrderList />
}
