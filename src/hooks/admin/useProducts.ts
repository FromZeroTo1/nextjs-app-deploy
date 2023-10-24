import { getAdminUrl } from '@/config/url.config'
import { ProductService } from '@/services/product/product.service'
import { ITableItem } from '@/ui/admin-table/interface/admin-table.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../useDebounces'
import { toastr } from 'react-redux-toastr'

export const useProducts = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['product list', debouncedValue],
		() => ProductService.getAll({ searchTerm: debouncedValue, perPage: 10 }),
		{
			select: data =>
				data.products.map(
					(product): ITableItem => ({
						id: String(product.id),
						editUrl: getAdminUrl(`/product/edit/${product.id}`),
						items: [
							product.name,
							product.category ? product.category.name : '',
							String(product.salePrice),
							String(product.price),
							String(product.boughtTimes)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete product'],
		(productId: string) => ProductService.delete(productId),
		{
			onSuccess: () => {
				toastr.success('Delete product', 'Успешно удалена')
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
