interface IArrayItem {
	name: string
}

export const getCategoriesList = (array: IArrayItem[]) =>
	array.map(i => i.name).join(', ')
