export interface IFaqItem {
	name: string
	description: string
}

export interface IFaq {
	title: string
	items: IFaqItem[]
}
