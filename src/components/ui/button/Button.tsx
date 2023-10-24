import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'light' | 'green'
}

const Button: FC<PropsWithChildren<IButton>> = ({children, className, variant, ...rest}) => {
	return <button {...rest} className={cn('font-medium rounded-full py-6 px-9', {
		'border-2 border-solid border-primary' : variant === 'light',
		'text-primary-green' : variant === 'green'
	}, className)}>{children}</button>
}

export default Button
