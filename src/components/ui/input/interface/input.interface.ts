import { ChangeEvent } from 'react'

export interface IInput {
	label?: string
	placeholder: string
	className?: string
	value?: string | number
	name?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
