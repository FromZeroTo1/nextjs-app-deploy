import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return (
		<h1
			className={`font-extrabold text-8xl ${className && className}`}>
			{children}
		</h1>
	)
}

export default Heading
