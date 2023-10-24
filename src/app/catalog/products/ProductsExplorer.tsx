'use client'

import Filters from '@/app/catalog/filters/Filters'
import { useFilters } from '@/hooks/useFilters'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'
import Heading from '@/ui/heading/Heading'
import Products from '@/ui/product/Products'
import Pagination from '@/ui/product/pagination/Pagination'
import SortDropdown from '@/ui/product/sort-dropdown/SortDropdown'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC, useState } from 'react'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductsExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()
	const [isShow, setIsShow] = useState(false)

	const { data, isFetching } = useQuery(
		['products explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated
		}
	)

	return (
		<>
			<div>
				<Heading className='mb-[50px]'>Все Товары</Heading>
				<div className='flex justify-end items-center mb-5'>
					<SortDropdown />
					<button
						className='ml-[150px]'
						onClick={() => setIsShow(!isShow)}
					>
						<Image
							priority
							width={26}
							height={26}
							src='/images/filters-btn.svg'
							alt='Prisma Filters'
						/>
					</button>
				</div>
				<Products products={data.products} isLoading={isFetching} />
				<Pagination
					changePage={page => updateQueryParams('page', page.toString())}
					currentPage={queryParams.page}
					numberPages={data.length / +queryParams.perPage}
				/>
			</div>
			<aside
				className={`bg-primary/20 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-3 ${
					isShow ? 'block' : 'hidden'
				}`}
			>
				<div className='bg-white px-5 py-10 max-w-[450px] w-full h-full float-right'>
					<div className='flex justify-between items-center mb-[60px]'>
						<h3 className='text-3xl font-medium italic mr-3'>Фильтрация</h3>
						<button onClick={() => setIsShow(!isShow)}>
							<Image
								priority
								width={26}
								height={26}
								src='/images/close.svg'
								alt='Prisma Filters'
							/>
						</button>
					</div>
					<Filters />
				</div>
			</aside>
		</>
	)
}

export default ProductsExplorer
