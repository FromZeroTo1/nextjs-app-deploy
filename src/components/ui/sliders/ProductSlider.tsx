'use client'

import Loader from '@/ui/loader/Loader'
import ProductItem from '@/ui/product/product-item/ProductItem'
import SubHeading from '@/ui/sub-heading/SubHeading'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/scss'
import { IProductSlider } from './interface/slider.interface'

const ProductSlider: FC<IProductSlider> = ({
	products,
	isLoading,
	heading,
	variant,
	className
}) => {
	if (isLoading) return <Loader />
	const [swiper, setSwiper] = useState(useSwiper())
	const [beginning, setBeginning] = useState(true)
	const [end, setEnd] = useState(false)

	const next = () => {
		swiper.slideNext()
	}

	const previous = () => {
		swiper.slidePrev()
	}

	return (
		<>
			{heading ? <SubHeading className='mb-[40px]'>{heading}</SubHeading> : ''}
			<div className={`w-full ${className ? className : ''}`}>
				{products.length && (
					<>
						<Swiper
							spaceBetween={40}
							slidesPerView='auto'
							onSlideChange={({ isBeginning, isEnd }) => {
								setBeginning(isBeginning)
								setEnd(isEnd)
							}}
							onSwiper={swiper => setSwiper(swiper)}
						>
							{products.map(product => (
								<SwiperSlide
									key={product.id}
									className={cn('w-full', {
										'max-w-[400px]': variant === 'large',
										'max-w-[312px]': variant === 'small'
									})}
								>
									<ProductItem key={product.id} product={product} />
								</SwiperSlide>
							))}
						</Swiper>
						<div>
							<button onClick={previous}>
								{beginning ? (
									<Image
										priority
										src='/images/arrow-left.svg'
										width={37}
										height={15}
										alt='Prisma Left Arrow'
									/>
								) : (
									<Image
										priority
										src='/images/arrow-left-black.svg'
										width={37}
										height={15}
										alt='Prisma Left Arrow'
									/>
								)}
							</button>
							<button onClick={next}>
								{end ? (
									<Image
										priority
										src='/images/arrow-right.svg'
										width={37}
										height={15}
										alt='Prisma Right Arrow'
									/>
								) : (
									<Image
										priority
										src='/images/arrow-right-black.svg'
										width={37}
										height={15}
										alt='Prisma Right Arrow'
									/>
								)}
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default ProductSlider
