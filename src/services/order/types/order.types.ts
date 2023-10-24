enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}

export type OrderType = {
	status?: EnumOrderStatus 
	items: {
		price: number
		salePrice: number
		quantity: number
		productId: number
	}[]
}