import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useColors = () => {
  const { data: products, isLoading } = useQuery(
    ['get products'],
    () => ProductService.getAll(),
    {
      select: ({ products }) => products
    }
  );

  const colors = products
    ? Array.from(
        new Set(
          products.flatMap((product) =>
            product.colors.map((item) => item.hex)
          )
        )
      )
    : [];

  return { colors, isLoading };
};