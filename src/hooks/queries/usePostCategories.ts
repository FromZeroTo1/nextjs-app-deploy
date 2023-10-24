import { PostCategoryService } from '@/services/post-category/post-category.service'
import { useQuery } from '@tanstack/react-query'

export const usePostCategories = (searchTerm?: string) => {
	const { data, isLoading } = useQuery(
		['get post categories'],
		() => PostCategoryService.getAll(searchTerm),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
