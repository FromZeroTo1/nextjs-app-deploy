import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<unknown>> = ({children}) => {
	return <div className='max-w-[1750px] w-full mx-auto px-[15px]'>{children}</div>
}

export default Container