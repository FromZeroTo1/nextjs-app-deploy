import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useMaterials = () => {
	const { data: products, isLoading } = useQuery(
		['get products'],
		() => ProductService.getAll(),
		{
			select: ({ products }) => products
		}
	)

  let materials = products
  ? products.map(product => product.characteristics.material)
  : [];

  materials = materials.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return { materials, isLoading };
}
