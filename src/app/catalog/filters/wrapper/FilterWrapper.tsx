import { FC, PropsWithChildren } from 'react'

interface IFilterWrapper {
	title: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	title,
	children
}) => {
	return (
		<div className='max-w-[300px] w-full h-full'>
			<div className='mb-6'>{title}</div>
			<div className='mb-3 font-semibold'>{children}</div>
		</div>
	)
}

export default FilterWrapper
