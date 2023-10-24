export interface IDropdownItem<K = string>{
	label: string
	className?: string
	key: K
	onClick: () => void
}

export interface IDropdownParent{
	label: string
	className?: string
	onClick: () => void
}

export interface IDropdown<K = string>{
	parent:IDropdownParent
	data: IDropdownItem<K>[]
}