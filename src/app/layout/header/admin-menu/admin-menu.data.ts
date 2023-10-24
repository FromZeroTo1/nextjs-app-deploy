import { getAdminUrl } from '@/config/url.config'
import { IMenuItem } from '../interface/menu.interface'


export const ADMIN_MENU: IMenuItem[] = [
	{
		label: 'Админ Панель',
		href: getAdminUrl()
	},
	{
		label: 'Пользователи',
		href: getAdminUrl('/users')
	},
	{
		label: 'Категории',
		href: getAdminUrl('/categories')
	},
	{
		label: 'Продукты',
		href: getAdminUrl('/products')
	},
	{
		label: 'Заказы',
		href: getAdminUrl('/orders')
	},
]