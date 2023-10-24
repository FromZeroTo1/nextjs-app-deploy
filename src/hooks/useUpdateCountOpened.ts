import { ProductService } from '@/services/product/product.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation(['update count opened'], () =>
		ProductService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync
	}, [])
}
