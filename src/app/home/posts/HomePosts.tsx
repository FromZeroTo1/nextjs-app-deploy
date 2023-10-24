'use client'

import { usePopularPosts } from '@/hooks/queries/usePopularPosts'
import PostItem from '@/ui/post/PostItem'
import { FC } from 'react'
import styles from './HomePosts.module.scss'

const HomePosts: FC = () => {
	const { data } = usePopularPosts(4)

	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				{data?.map(post => (
					<div className={styles.item}>
						<PostItem key={post.id} post={post} />
					</div>
				))}
			</div>
		</div>
	)
}

export default HomePosts
