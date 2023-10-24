import { FC } from 'react'
import styles from './AdminCreateButton.module.scss'

const AdminCreateButton: FC<{onClick?: () => void}> = ({onClick}) => {
	return <button onClick={onClick}>
		Create New
	</button>
}

export default AdminCreateButton