import Catalog from '@/app/catalog/Catalog'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Category: FC<{ products: IProduct[] }> = ({ products }) => {
	return <Catalog products={products || []} length={products.length} />
}

export default Category
