'use client'

import { useUsers } from '@/hooks/admin/useUsers'
import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import AdminTable from '@/ui/admin-table/AdminTable'
import AdminHeader from '@/ui/admin-table/admin-header/AdminHeader'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './UserList.module.scss'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<AdminSidebar />
				<div className={styles.fill}>
					<Heading>Пользователи</Heading>
					<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
					<AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['E-mail', 'Логин', 'Телефон', 'Дата регистрации']} tableItems={data || []} />
				</div>
			</div>
		</div>
	)
}

export default UserList
