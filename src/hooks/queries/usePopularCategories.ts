import { CategoryService } from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'

export const usePopularCategories = (limit: string | number) => {
	const { data, isLoading } = useQuery(
		['get popular categories'],
		() => CategoryService.getPopular(limit),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
