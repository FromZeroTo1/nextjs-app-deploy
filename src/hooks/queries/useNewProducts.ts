import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useNewProducts = () => {
	const { data: products, isLoading } = useQuery(
		['get new products'],
		() => ProductService.getAll({ sort: 'По новинке', perPage: 15 }),
		{
			select: ({ products }) => products
		}
	)

	return { products, isLoading }
}
