import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ProductDataFilters } from '@/services/product/types/product.types'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)

	useEffect(() => {
		searchParams?.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof ProductDataFilters,
				value
			})
		})
	}, [])

	const updateQueryParams = (key: keyof ProductDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams?.toString());
	
		if (value) {
			newParams.set(key, String(value));
		} else {
			newParams.delete(key);
		}
	
		history.pushState({}, '', pathname + `?${newParams.toString()}`);
		updateQueryParam({ key, value });
	};
	

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated
	}
}
