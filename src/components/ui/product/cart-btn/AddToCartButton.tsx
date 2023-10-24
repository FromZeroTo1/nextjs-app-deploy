import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<button
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							product,
							quantity: 1,
							price: product.price,
							salePrice: product.salePrice,
							color: localStorage.getItem('color')
								? localStorage.getItem('color')
								: null,
							dimension: localStorage.getItem('dimension')
								? localStorage.getItem('dimension')
								: null
					  })
			}
		>
			{currentElement ? (
				<Image
					priority
					src='/images/product/basket-fill.svg'
					width={22}
					height={20}
					alt={product.name}
				/>
			) : (
				<Image
					priority
					src='/images/product/basket.svg'
					width={22}
					height={20}
					alt={product.name}
				/>
			)}
		</button>
	)
}

export default AddToCartButton
