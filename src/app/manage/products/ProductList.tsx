'use client'

import { useProducts } from '@/hooks/admin/useProducts'
import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import AdminTable from '@/ui/admin-table/AdminTable'
import AdminHeader from '@/ui/admin-table/admin-header/AdminHeader'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './ProductList.module.scss'

const ProductList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } =
		useProducts()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<AdminSidebar />
				<div className={styles.fill}>
					<Heading>Продукты</Heading>
					<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
					<AdminTable
						isLoading={isLoading}
						removeHandler={deleteAsync}
						headerItems={[
							'Название',
							'Категория',
							'Скидочная цена',
							'Цена',
							'Количество покупок'
						]}
						tableItems={data || []}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductList
