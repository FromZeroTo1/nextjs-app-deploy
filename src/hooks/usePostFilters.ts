import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { PostDataFilters } from '@/services/post/types/post.types'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const usePostFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)

	useEffect(() => {
		searchParams?.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof PostDataFilters,
				value
			})
		})
	}, [])

	const updateQueryParams = (key: keyof PostDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams?.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		history.pushState({}, '', pathname + `?${newParams.toString()}`)
		updateQueryParam({ key, value })
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated
	}
}
