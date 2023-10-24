import { ADMIN_MENU } from '@/app/layout/header/admin-menu/admin-menu.data'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Link from 'next/link'
import cn from 'clsx'
import { FC } from 'react'

const AdminSidebar: FC = () => {
	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside className='flex flex-col justify-between h-screen max-w-[300px]'>
			<div>
				<ul>
					{ADMIN_MENU.map(item => (
						<li key={item.href}>
							<Link
								className={cn(
									'block font-medium my-3 hover:text-secondary-green transition-colors duration-200',
									pathname === item.href
										? 'text-secondary-green'
										: 'text-primary'
								)}
								href={item.href}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default AdminSidebar
