export interface IPostCategory { 
	id: string
	name: string
	slug: string
	createdAt: string
}

export interface IPost {
	id: string
	name: string
	slug: string
	poster: string
	author: string
	views: number
	createdAt: string
	categoryId: string
}

export type TypePaginationPosts = {
	length: number
	posts: IPost[]
}
