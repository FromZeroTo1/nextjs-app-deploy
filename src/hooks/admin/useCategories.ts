import { getAdminUrl } from '@/config/url.config'
import { CategoryService } from '@/services/category/category.service'
import { ITableItem } from '@/ui/admin-table/interface/admin-table.interface'
import { getAllChildCategories } from '@/utils/category/getChildCategories'
import { formatDate } from '@/utils/format-date'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../useDebounces'
import { toastr } from 'react-redux-toastr'

export const useCategories = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['category list', debouncedValue],
		() => CategoryService.getAll(debouncedValue),
		{
			select: ({ data }) =>
				data.map(
					(cat): ITableItem => ({
						id: String(cat.id),
						editUrl: getAdminUrl(`/category/edit/${cat.id}`),
						items: [
							cat.name,
							getAllChildCategories(cat)
								.map(childCat => childCat.name)
								.join(', '),
							formatDate(cat.createdAt)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete category'],
		(catId: string) => CategoryService.delete(catId),
		{
			onSuccess: () => {
				toastr.success('Delete category', 'Успешно удалена')
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
