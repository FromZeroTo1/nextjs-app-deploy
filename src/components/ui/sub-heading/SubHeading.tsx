import { FC, PropsWithChildren } from 'react'

interface ISubHeading {
	className?: string
}

const SubHeading: FC<PropsWithChildren<ISubHeading>> = ({ children, className }) => {
	return (
		<h2
			className={`font-medium opacity-90 text-3xl italic ${className ? className : ''}`}>
			{children}
		</h2>
	)
}

export default SubHeading
