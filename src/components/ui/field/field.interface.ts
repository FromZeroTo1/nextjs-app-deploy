import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	placeholder?: string
	error: string | undefined
}
