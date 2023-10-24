import { IField } from '@/ui/field/field.interface'
import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

export interface IReactSelectOption {
	value: string
	label: string
}
export interface IReactSelect extends IField {
	options: Options<IReactSelectOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
