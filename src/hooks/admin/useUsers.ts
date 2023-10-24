import { getAdminUrl } from '@/config/url.config'
import { UserService } from '@/services/user/user.service'
import { ITableItem } from '@/ui/admin-table/interface/admin-table.interface'
import { formatDate } from '@/utils/format-date'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import { useDebounce } from '../useDebounces'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedValue = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedValue],
		() => UserService.getAll(debouncedValue),
		{
			select: data =>
				data.map(
					(user): ITableItem => ({
						id: user.id,
						editUrl: getAdminUrl(`/user/edit/${user.id}`),
						items: [
							user.email,
							user.name,
							user.phone,
							formatDate(user.createdAt)
						]
					})
				)
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete user'],
		(userId: string) => UserService.delete(userId),
		{
			onSuccess: () => {
				toastr.success('Delete user', 'Успешно удалена')
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
