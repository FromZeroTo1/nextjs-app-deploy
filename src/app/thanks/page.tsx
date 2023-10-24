import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Heading from '@/ui/heading/Heading'

export const metadata: Metadata = {
	title: 'Спасибо',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return <Heading>Спасибо</Heading>
}
