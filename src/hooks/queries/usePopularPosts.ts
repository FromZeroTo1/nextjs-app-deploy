import { PostService } from '@/services/post/post.service'
import { useQuery } from '@tanstack/react-query'

export const usePopularPosts = (limit: string | number) => {
	const { data, isLoading } = useQuery(
		['get popular posts'],
		() => PostService.getPopular(limit),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
