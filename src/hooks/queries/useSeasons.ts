import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useSeasons = () => {
	const { data: products, isLoading } = useQuery(
		['get products'],
		() => ProductService.getAll(),
		{
			select: ({ products }) => products
		}
	)

  let seasons = products
  ? products.map(product => product.characteristics.season)
  : [];

  seasons = seasons.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return { seasons, isLoading };
}
