'use client'

import { useCategories } from '@/hooks/queries/useCategories'
import { useFilters } from '@/hooks/useFilters'
import Loader from '@/ui/loader/Loader'
import { categoryConvertToMenuItems } from '@/utils/convert-to-menu-item'
import cn from 'clsx'
import { FC } from 'react'

const CatalogSidebar: FC = () => {
	const { data, isLoading } = useCategories()
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<aside className='flex flex-col justify-between'>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<ul>
						{categoryConvertToMenuItems(data).map(item => {
							const isChecked = queryParams.category === item.slug

							return (
								<li key={item.href}>
									<button
										className={cn(
											'block font-medium my-3 hover:text-secondary-green transition-colors duration-200',
											isChecked
												? 'text-secondary-green cursor-default pointer-events-none'
												: 'text-primary'
										)}
										onClick={() =>
											updateQueryParams('category', isChecked ? '' : item.slug)
										}
									>
										{item.label}
									</button>
									{item.childrens.length ? (
										<ul className='pl-5 flex flex-col gap-2'>
											{categoryConvertToMenuItems(item.childrens).map(
												subCategory => {
													const isChecked =
														queryParams.category === subCategory.slug

													return (
														<li key={subCategory.href}>
															<button
																className={cn(
																	'block text-sm hover:text-secondary-green transition-colors duration-200',
																	isChecked
																		? 'text-secondary-green cursor-default pointer-events-none'
																		: 'text-primary'
																)}
																onClick={() =>
																	updateQueryParams(
																		'category',
																		isChecked ? '' : subCategory.slug
																	)
																}
															>
																{subCategory.label}
															</button>
														</li>
													)
												}
											)}
										</ul>
									) : (
										''
									)}
								</li>
							)
						})}
					</ul>
				) : (
					<div>Нет Категории</div>
				)}
			</div>
		</aside>
	)
}

export default CatalogSidebar
