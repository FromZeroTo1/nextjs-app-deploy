import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyAccountAddCard from './wrapper/MyAccountAddCard'

export const metadata: Metadata = {
	title: 'Добавление карты',
	...NO_INDEX_PAGE
}

export default function ProfileAddCard() {
	return <MyAccountAddCard />
}
