export interface ISocialItemImage {
	src: string
	width: number
	height: number
	alt: string
}

export interface ISocialItem {
	link: string
	icon: ISocialItemImage
}

export interface ISocial {
	items: ISocialItem[]
}
