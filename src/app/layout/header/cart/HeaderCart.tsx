'use client'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { OrderService } from '@/services/order/order.service'
import Button from '@/ui/button/Button'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import cn from 'clsx'

const HeaderCart: FC = () => {
	const [isShow, setIsShow] = useState(false)

	const { push } = useRouter()

	const { items, total } = useCart()

	const { reset } = useActions()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					salePrice: item.salePrice,
					quantity: item.quantity,
					color: item.color,
					dimension: item.dimension,
					productId: item.product.id
				}))
			}),
		{
			onSuccess({ data }) {
				reset()
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className='relative'>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
				className='relative'
			>
				<Image
					priority
					width={26}
					height={26}
					src='/images/cart.svg'
					alt='Prisma Cart'
				/>
				<span className='absolute -top-[2px] -right-[1px] bg-secondary-green w-[14px] h-[17px] flex items-center justify-center text-[12px] font-semibold text-white rounded-[10px]'>
					{items.length}
				</span>
			</button>
			<div className={cn(styles.wrapper, {
				[styles.active]: isShow,
			})}>
				<div className={styles.heading}>
					<SubHeading>Корзина ({items.length})</SubHeading>
					<button className={styles.close} onClick={() => setIsShow(!isShow)}>
						<Image
							priority
							src='/images/close.svg'
							width={26}
							height={26}
							alt='Prisma Close'
						/>
					</button>
				</div>
				<div className={styles.cart}>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Ваша корзина пуста.</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total: </div>
					<div>{total}</div>
				</div>
				<div className='text-center'>
					<Button
						className='btn-link mt-5 mb-2'
						variant='light'
						onClick={() => mutate}
					>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

{/* <li key={item.href}>
											<button
												className={cn(
													'block font-medium my-3 hover:text-secondary-green transition-colors duration-200',
													isChecked
														? 'text-secondary-green cursor-default pointer-events-none'
														: 'text-primary'
												)}
												onClick={() => handleClick(item.slug, isChecked)}
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
																			handleClick(item.slug, isChecked)
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
										</li> */}

export default HeaderCart
