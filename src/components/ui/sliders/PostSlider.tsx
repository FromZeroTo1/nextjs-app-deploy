'use client'

import Loader from '@/ui/loader/Loader'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/scss'
import PostItem from '../post/PostItem'
import styles from './PostSlider.module.scss'
import { IPostSlider } from './interface/slider.interface'

const PostSlider: FC<IPostSlider> = ({ posts, isLoading, className }) => {
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
			<div className={`w-full ${className ? className : ''}`}>
				{posts.length && (
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
							{posts.map(post => (
								<SwiperSlide key={post.id} className={styles.slide}>
									<PostItem key={post.id} post={post} />
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

export default PostSlider
