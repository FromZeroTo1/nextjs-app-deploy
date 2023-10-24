import { UserService } from '@/services/user/user.service'
import { IFullUser } from '@/types/user.interface'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import styles from './MyAccountNotifications.module.scss'
import { NotificationType } from '@/services/user/types/user.types'

const MyAccountNotifications: FC<{ profile: IFullUser }> = ({ profile }) => {
	const queryClient = useQueryClient()

	const { mutate: toggleNotification } = useMutation(
		['toggle notification'],
		async (newData: NotificationType) => {
			await UserService.toggleNotification(newData)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	const handleEmailToggle = () => {
		toggleNotification({
			emailNotification: !profile.emailNotification
		})
	}

	const handleSMSToggle = () => {
		toggleNotification({
			smsNotification: !profile.smsNotification
		})
	}

	return (
		<>
			<SubHeading className={styles.subtitle}>Уведомления</SubHeading>
			<div className={styles.fill}>
				<form className={styles.form}>
					<button
						className={styles.row}
						type='button'
						onClick={handleEmailToggle}
					>
						<input
							className={styles.input}
							type='checkbox'
							checked={profile?.emailNotification || false}
							disabled={!profile?.email}
							onChange={() => {}}
						/>
						<span className={styles.label}>e-mail</span>
					</button>
					<button
						className={styles.row}
						type='button'
						onClick={handleSMSToggle}
					>
						<input
							className={styles.input}
							type='checkbox'
							checked={profile?.smsNotification || false}
							disabled={!profile?.phone}
							onChange={() => {}}
						/>
						<span className={styles.label}>SMS на телефон</span>
					</button>
					{!profile?.phone || !profile.email ? (
						<p className={styles.error}>
							Чтобы подписаться на SMS- или e-mail-рассылку, вам нужно указать
							соответствующие данные. Вы можете сделать это здесь.
						</p>
					) : (
						''
					)}
				</form>
			</div>
		</>
	)
}

export default MyAccountNotifications
