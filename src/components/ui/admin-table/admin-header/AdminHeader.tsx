import { FC } from 'react'
import SearchField from '../../search-field/SearchField'
import { IAdminHeader } from './interface/adminHeader.interface'
import styles from './AdminHeader.module.scss'
import AdminCreateButton from './admin-create-button/AdminCreateButton'

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
