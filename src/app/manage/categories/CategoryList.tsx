'use client'

import { useCategories } from '@/hooks/admin/useCategories'
import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import AdminTable from '@/ui/admin-table/AdminTable'
import AdminHeader from '@/ui/admin-table/admin-header/AdminHeader'
import Breadcrumb from '@/ui/breadcrumb/Breadcrumb'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './CategoryList.module.scss'

const CategoryList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } =
		useCategories()

	return (
		<div className={styles.container}>
			<Breadcrumb
				items={[
					{
						label: 'Админ панель',
						path: '/manage'
					},
					{
						label: 'Категории',
						path: '/manage/categories'
					}
				]}
			/>
			<div className={styles.wrapper}>
				<AdminSidebar />
				<div className={styles.fill}>
					<Heading>Категории</Heading>
					<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
					<AdminTable
						isLoading={isLoading}
						removeHandler={deleteAsync}
						headerItems={['Название', 'Дочерние категории', 'Дата создания']}
						tableItems={data || []}
					/>
				</div>
			</div>
		</div>
	)
}

export default CategoryList
