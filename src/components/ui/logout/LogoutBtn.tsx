import { useActions } from '@/hooks/useActions'
import { FC } from 'react'

const LogoutBtn: FC = () => {
	const { logout } = useActions()

	return <button onClick={() => logout()}>Logout</button>
}

export default LogoutBtn
