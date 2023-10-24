import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyAccountAddAddress from './wrapper/MyAccountAddAddress'

export const metadata: Metadata = {
	title: 'Добавление Адреса',
	...NO_INDEX_PAGE
}

export default function ProfileAddAddress() {
	return <MyAccountAddAddress />
}
