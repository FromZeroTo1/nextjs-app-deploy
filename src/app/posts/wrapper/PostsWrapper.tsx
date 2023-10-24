'use client'

import { usePostCategories } from '@/hooks/queries/usePostCategories'
import { usePosts } from '@/hooks/queries/usePosts'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import PostsFilters from '../filters/PostsFilters'
import PostsList from '../list/PostsList'
import styles from './PostsWrapper.module.scss'

const PostsWrapper: FC = () => {
	const { data } = usePostCategories()
	const { posts } = usePosts()
	console.log(data)
	console.log(posts)
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Heading>Статьи</Heading>
				<PostsFilters categories={data || []} />
				<PostsList posts={posts || []} />
			</div>
		</div>
	)
}

export default PostsWrapper
