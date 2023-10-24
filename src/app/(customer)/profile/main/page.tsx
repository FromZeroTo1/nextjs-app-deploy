import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyAccount from './wrapper/MyAccount'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function ProfileMainPage() {
	return <MyAccount />
}
