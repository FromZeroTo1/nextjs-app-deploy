import Button from '@/ui/button/Button'
import { FC } from 'react'

interface IUniqueLook {
	title: string
	subTitle: string
	btn: string
	btnVariant: 'light' | 'green'
}

const UniqueLook: FC<IUniqueLook> = ({title, subTitle, btn, btnVariant}) => {
	return (
		<section className='min-h-[760px] flex items-center justify-center bg-[url("/images/unique-look/unique-look.png")] bg-no-repeat bg-cover bg-center mt-[200px]'>
			<div className='max-w-[850px] w-full text-center'>
				<h2 className='font-extrabold text-8xl leading-[1.1] mb-2.5 text-white'>{title}</h2>
				<p className='font-medium text-white'>{subTitle}</p>
				<Button variant={btnVariant} className='mt-[50px]'>{btn}</Button>
			</div>
		</section>
	)
}

export default UniqueLook
