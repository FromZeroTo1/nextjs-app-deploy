import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const AdminPanelBtn: FC = () => {
	return (
		<Link href='/manage' className=''>
			<MdOutlineAdminPanelSettings size={26} />
		</Link>
	)
}

export default AdminPanelBtn
