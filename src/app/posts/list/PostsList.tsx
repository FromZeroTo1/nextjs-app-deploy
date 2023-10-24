import { IPost } from '@/types/post.interface'
import PostItem from '@/ui/post/PostItem'
import { FC } from 'react'
import styles from './PostsList.module.scss'

const PostsList: FC<{ posts: IPost[] }> = ({ posts }) => {
	return (
		<div className={styles.list}>
			{posts.map(post => (
				<PostItem post={post} />
			))}
		</div>
	)
}

export default PostsList
