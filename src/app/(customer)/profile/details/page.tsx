import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyAccountDetails from './wrapper/MyAccountDetails'

export const metadata: Metadata = {
	title: 'Мои Данные',
	...NO_INDEX_PAGE
}

export default function ProfileDetailsPage() {
	return <MyAccountDetails />
}
