import { FC } from 'react'
import Loader from '../loader/Loader'
import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { IAdminTable } from './interface/admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<Loader />
			) : tableItems.length ? (
				tableItems.map(tableItem => (
					<AdminTableItem
						key={tableItem.id}
						removeHandler={() => removeHandler(tableItem.id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Ничего не найдено</div>
			)}
		</div>
	)
}

export default AdminTable
