'use client'

import { usePosts } from '@/hooks/queries/usePosts'
import Heading from '@/ui/heading/Heading'
import PostSlider from '@/ui/sliders/PostSlider'
import { FC } from 'react'
import styles from './HomeTrends.module.scss'

const HomeTrends: FC = () => {
	const { posts } = usePosts()

	return (
		<div className={styles.wrapper}>
			<Heading className={styles.heading}>Тренды сезона</Heading>
			<PostSlider className={styles.slider} posts={posts || []} />
		</div>
	)
}

export default HomeTrends
