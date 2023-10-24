import { FC } from 'react'
import { IAdminTableItem } from './interface/admin-table.interface'
import styles from './AdminTable.module.scss'
import AdminActions from './admin-actions/AdminActions'

const AdminTableItem: FC<IAdminTableItem> = ({removeHandler, tableItem}) => {
	return <div className={styles.item}>
		{tableItem.items.map(value => <div key={value}>{value}</div>)}
		<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
	</div>
}

export default AdminTableItem