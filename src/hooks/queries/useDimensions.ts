import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useDimensions = () => {
  const { data: products, isLoading } = useQuery(
    ['get products'],
    () => ProductService.getAll(),
    {
      select: ({ products }) => products
    }
  );

  const dimensions = products
    ? Array.from(
        new Set(
          products.flatMap((product) =>
            product.dimensions.map((item) => item.dimension)
          )
        )
      )
    : [];

  return { dimensions, isLoading };
};