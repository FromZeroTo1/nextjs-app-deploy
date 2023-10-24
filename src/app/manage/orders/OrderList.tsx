'use client'

import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import AdminTable from '@/ui/admin-table/AdminTable'
import AdminHeader from '@/ui/admin-table/admin-header/AdminHeader'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './OrderList.module.scss'
import { useOrders } from '@/hooks/admin/useOrders'

const OrderList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } =
		useOrders()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<AdminSidebar />
				<div className={styles.fill}>
					<Heading>Заказы</Heading>
					<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
					<AdminTable
						isLoading={isLoading}
						removeHandler={deleteAsync}
						headerItems={['Название', 'Итого', 'Статус', 'Дата создания']}
						tableItems={data || []}
					/>
				</div>
			</div>
		</div>
	)
}

export default OrderList
