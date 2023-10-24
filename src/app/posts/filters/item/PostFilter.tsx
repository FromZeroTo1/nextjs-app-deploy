import { usePostFilters } from '@/hooks/usePostFilters'
import { IPostCategory } from '@/types/post.interface'
import { FC } from 'react'
import styles from './PostFilter.module.scss'

const PostFilter: FC<{ category: IPostCategory }> = ({ category }) => {
	const { queryParams, updateQueryParams } = usePostFilters()
	const isChecked = queryParams.category === category.slug

	return (
		<li className={styles.item}>
			<button
				className={styles.button}
				onClick={() =>
					updateQueryParams('category', isChecked ? '' : category.slug)
				}
			>
				{category.name}
			</button>
		</li>
	)
}

export default PostFilter
