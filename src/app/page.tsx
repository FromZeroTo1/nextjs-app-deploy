import { Metadata } from 'next'
import Home from './home/Home'

export const metadata: Metadata = {
	description: 'Prisma Description'
}

export default function HomePage() {
	return <Home />
}
