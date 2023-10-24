import { getAdminUrl } from '@/config/url.config'
import { OrderService } from '@/services/order/order.service'
import { ITableItem } from '@/ui/admin-table/interface/admin-table.interface'
import { formatDate } from '@/utils/format-date'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../useDebounces'
import { toastr } from 'react-redux-toastr'

export const useOrders = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['order list', debouncedValue],
		() => OrderService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(order): ITableItem => ({
						id: String(order.id),
						editUrl: getAdminUrl(`/order/edit/${order.id}`),
						items: [
							order.user.name,
							String(order.total),
							order.status,
							formatDate(order.createdAt)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete order'],
		(orderId: string) => OrderService.delete(orderId),
		{
			onSuccess: () => {
				toastr.success('Delete order', 'Успешно удалена')
				queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
