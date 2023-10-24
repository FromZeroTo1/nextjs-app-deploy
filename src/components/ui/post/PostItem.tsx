import { IPost } from '@/types/post.interface'
import { formatDate } from '@/utils/format-date'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './PostItem.module.scss'

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.preview}>
				<Link href=''>
					<Image
						quality={100}
						priority
						width={0}
						height={0}
						fill
						sizes='100vw'
						style={{ width: '100%', height: '100%' }}
						src={post.poster}
						alt={post.name}
					/>
				</Link>
			</div>
			<div className={styles.info}>
				<span className={styles.date}>{formatDate(post.createdAt)}</span>
				<h3 className={styles.title}>{post.name}</h3>
			</div>
		</div>
	)
}

export default PostItem
