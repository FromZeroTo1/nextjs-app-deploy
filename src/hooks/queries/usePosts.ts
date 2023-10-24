import { PostService } from '@/services/post/post.service'
import { useQuery } from '@tanstack/react-query'

export const usePosts = () => {
	const { data: posts, isLoading } = useQuery(
		['get posts'],
		() => PostService.getAll({ sort: 'По новинке', perPage: 12 }),
		{
			select: ({ posts }) => posts
		}
	)

	return { posts, isLoading }
}
