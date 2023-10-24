import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyAccountOrders from './wrapper/MyAccountOrders'

export const metadata: Metadata = {
	title: 'Мои Заказы',
	...NO_INDEX_PAGE
}

export default async function ProfileOrdersPage() {
	return <MyAccountOrders />
}
