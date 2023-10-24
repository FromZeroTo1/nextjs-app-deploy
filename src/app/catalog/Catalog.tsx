'use client'

import { TypePaginationProducts } from '@/types/product.interface'
import Slider from '@/ui/sliders/ProductSlider'
import UniqueLook from '@/ui/unique-look/UniqueLook'
import { FC } from 'react'
import styles from './Catalog.module.scss'
import CatalogBanner from './banner/CatalogBanner'
import CatalogInfo from './info/CatalogInfo'
import ProductsExplorer from './products/ProductsExplorer'
import CatalogSidebar from './sidebar/CatalogSidebar'

const Catalog: FC<TypePaginationProducts> = ({ products, length }) => {
	const data = {
		products,
		length
	}

	return (
		<>
			<div className='px-[100px]'>
				<CatalogBanner />
			</div>
			<div className='flex justify-between'>
				<div className='pl-[100px]'>
					<CatalogSidebar />
				</div>
				<div className='max-w-[1470px] w-full'>
					<div className='pr-[100px]'>
						<ProductsExplorer initialProducts={data} />
						<CatalogInfo />
						<div className='mt-[140px] max-w-[850px] w-full'>
							{/* <Tags /> */}
						</div>
					</div>
					<div className='mt-[140px] max-w-[1470px] w-full ml-auto'>
						<Slider
							products={products}
							heading='Вам может быть интересно:'
							variant='small'
						/>
					</div>
				</div>
			</div>

			<div className={styles.unique}>
				<UniqueLook
					title='Выбери свой уникальный образ!'
					subTitle='Наши стилисты собрали их за вас.'
					btn='В каталог образов'
					btnVariant='light'
				/>
			</div>
		</>
	)
}

export default Catalog
