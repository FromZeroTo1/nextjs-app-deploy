export const setStoreLocal = (name: string, data: any) => {
	localStorage.setItem(name, JSON.stringify(data))
}

export const getStoreLocal = (name: string) => {
	if(typeof localStorage !== 'undefined'){
		const ls = localStorage.getItem(name)
		return ls ? JSON.parse(ls) : null
	}
	return null
}