import type { Metadata } from 'next'
import FaqWrapper from './wrapper/FaqWrapper'

export const metadata: Metadata = {
	title: 'FAQ',
	description: ''
}

export default function FaqPage() {
	return <FaqWrapper />
}
