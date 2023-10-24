import { IPostCategory } from '@/types/post.interface'
import { FC } from 'react'
import styles from './PostsFilters.module.scss'
import PostFilter from './item/PostFilter'

const PostsFilters: FC<{ categories: IPostCategory[] }> = ({ categories }) => {
	return (
		<ul className={styles.list}>
			{categories.map(category => (
				<PostFilter category={category} />
			))}
		</ul>
	)
}

export default PostsFilters
