import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import Button from '@/ui/button/Button'
import { FC, useState } from 'react'

const ProductForm: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()

	const { items } = useCart()
	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	const [quantity, setQuantity] = useState(1)

	return (
		<div className='mb-[30px]'>
			<div className='mb-[50px]'>
				<div className='flex'>
					<button
						className='text-2xl opacity-40 text-primary flex items-center justify-center'
						onClick={() => setQuantity(quantity - 1)}
						disabled={quantity === 1}
					>
						-
					</button>

					<input
						disabled
						readOnly
						value={quantity}
						className='w-10 text-center flex items-center justify-center'
					/>

					<button
						onClick={() => setQuantity(quantity + 1)}
						className='text-2xl opacity-40 text-primary flex items-center justify-center'
					>
						+
					</button>
				</div>
				<p className='text-xs opacity-40 text-primary tracking-[0.25px]'>
					Последний экземпляр
				</p>
			</div>
			<div className='flex items-center justify-between'>
				<button
					onClick={() =>
						currentElement
							? removeFromCart({ id: currentElement.id })
							: addToCart({
									product,
									quantity: quantity,
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
					{currentElement ? 'Удалить из корзины' : 'Добавить в корзину'}
				</button>
				<Button variant='light'>Купить в 1 клик</Button>
			</div>
		</div>
	)
}

export default ProductForm
