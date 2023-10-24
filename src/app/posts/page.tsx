import type { Metadata } from 'next'
import PostsWrapper from './wrapper/PostsWrapper'

export const metadata: Metadata = {
	title: 'Статьи',
	description: ''
}

export default function PostsPage() {
	return <PostsWrapper />
}
