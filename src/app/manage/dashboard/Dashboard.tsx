'use client'

import { StatisticsService } from '@/services/statistics/statistics.service'
import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import Loader from '@/ui/loader/Loader'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import styles from './Dashboard.module.scss'
import Breadcrumb from '@/ui/breadcrumb/Breadcrumb'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery(
		['statistics'],
		() => StatisticsService.getMain(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div className={styles.container}>
			<AdminSidebar />
			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<div className={styles.wrapper}>
					{data.map(item => (
						<div key={item.name} className={styles.item}>
							<div>{item.name}</div>
							<div>{item.value}</div>
						</div>
					))}
				</div>
			) : (
				<div>Statistics not loaded</div>
			)}
		</div>
	)
}

export default Dashboard
