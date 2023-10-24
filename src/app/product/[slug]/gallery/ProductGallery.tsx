import Image from 'next/image'
import { title } from 'process'

interface IProductGallery {
	title: string
	images: string[]
}

export function ProductGallery({ images }: IProductGallery) {
	return (
		<div className='flex flex-col gap-5 max-w-[840px] w-full'>
			{images.map((image, index) => {
				return (
					<div key={index} className='w-full'>
						<Image
							width='0'
							height='0'
							sizes='100vw'
							className='w-full h-full'
							draggable={false}
							priority
							src={image}
							alt={title}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ProductGallery
