// import Loader from '@/ui/loader/Loader'
// import SubHeading from '@/ui/sub-heading/SubHeading'
// import { useQuery } from '@tanstack/react-query'
// import Link from 'next/link'
// import { FC } from 'react'

// const Tags: FC = () => {
// 	const { data, isLoading } = useQuery(
// 		['get subcategories'],
// 		() => SubCategoryService.getAll(),
// 		{
// 			select: ({ data }) => data
// 		}
// 	)

// 	return (
// 		<>
// 			{isLoading ? (
// 				<Loader />
// 			) : data ? (
// 				<>
// 					<SubHeading>Смотрите также:</SubHeading>
// 					<ul className='flex flex-wrap gap-5'>
// 						{data.map(subCategory => (
// 							<li
// 								key={subCategory.id}
// 								className='border-2 border-primary-green border-solid rounded-[30px]'
// 							>
// 								<Link
// 									className='inline-block font-medium text-base py-[5px] px-3.5 hover:text-secondary-green transition-colors duration-200'
// 									href={`/sub-category/${subCategory.slug}`}
// 								>
// 									{subCategory.name}
// 								</Link>
// 							</li>
// 						))}
// 					</ul>
// 				</>
// 			) : (
// 				''
// 			)}
// 		</>
// 	)
// }

// export default Tags
