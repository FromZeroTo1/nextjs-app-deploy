import { IProductDimensions } from '@/types/product.interface'
import { FC } from 'react'

interface IProductInformationDimensions {
	dimensions: IProductDimensions[]
}

const ProductDimensions: FC<IProductInformationDimensions> = ({
	dimensions
}) => {
	return (
		<>
			{dimensions.length > 0 && (
				<div>
					<h3 className='font-medium mb-2.5'>Размеры:</h3>
					<ul className='flex flex-wrap'>
						{dimensions.map((dim, index) => (
							<li
								className={`inline-block text-lg font-medium ${index > 0 ? 'ml-4' : ''}`}
								key={index + 1}
							>
								{dim.dimension}
							</li>
						))}
					</ul>
					<span className='text-xs tracking-[0.25px]'>Таблица размеров</span>
				</div>
			)}
		</>
	)
}

export default ProductDimensions
