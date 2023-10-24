import { FC } from 'react'

interface ProductInformationPrice {
	price: number
	salePrice?: number
}

const ProductPrice: FC<ProductInformationPrice> = ({price, salePrice}) => {
	return (
		<>
			{salePrice ? (
				<div>
					<span className='line-through text-opacity-30 text-primary'>
						{price} р.
					</span>
					<span className='text-opacity-70 text-primary ml-2.5 inline-block'>
						{salePrice} р.
					</span>
					<span className='text-secondary-green font-medium ml-5 inline-block'>
						{Math.round(100 - (salePrice * 100) / price)}%
					</span>
				</div>
			) : (
				<div className='text-opacity-70'>{price} р.</div>
			)}
		</>
	)
}

export default ProductPrice
