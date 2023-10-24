import { OrderService } from '@/services/order/order.service'
import { useQuery } from '@tanstack/react-query'

export const useActiveOrders = () => {
	const { data, isLoading } = useQuery(
		['get active orders'],
		() => OrderService.getActive(),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}