import { IPost } from '@/types/post.interface'
import { IProduct } from '@/types/product.interface'

export interface IProductSlider {
	products: IProduct[]
	isLoading?: boolean
	heading?: string
	variant: string
	className?: string
}

export interface IPostSlider {
	posts: IPost[]
	isLoading?: boolean
	className?: string
}
