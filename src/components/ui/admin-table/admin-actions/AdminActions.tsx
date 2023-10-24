import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import styles from './AdminActions.module.scss'
import { IAdminActions } from './interface/adminActions.interface'

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MdEdit />
			</button>
			<button onClick={removeHandler}>
				<MdDeleteForever />
			</button>
		</div>
	)
}

export default AdminActions
