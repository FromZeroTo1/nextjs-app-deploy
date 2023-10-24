import { IProductColors } from '@/types/product.interface'
import { FC } from 'react'

interface IProductInformationColors {
	colors: IProductColors[]
}

const ProductColors: FC<IProductInformationColors> = ({ colors }) => {
	return (
		<>
			{colors.length > 0 && (
				<div>
					<h3 className='font-medium mb-2.5'>Цвета:</h3>
					<ul className='flex flex-wrap'>
						{colors.map((color, index) => (
							<li
								className={`inline-block w-4 h-4 ${index > 0 ? 'ml-3' : ''}`}
								key={index + 1}
								style={{ backgroundColor: color.hex }}
							></li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default ProductColors
