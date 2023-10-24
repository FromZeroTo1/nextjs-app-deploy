import { CardService } from '@/services/card/card.service'
import { IFullUser } from '@/types/user.interface'
import SubHeading from '@/ui/sub-heading/SubHeading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'
import styles from './MyAccountCards.module.scss'
import { formatCardNumber } from '@/utils/format-card'

const MyAccountCards: FC<{ profile: IFullUser }> = ({ profile }) => {
	const queryClient = useQueryClient()

	const { mutate: deleteCards } = useMutation(
		['delete card'],
		async (id: number) => {
			await CardService.delete(id)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	const handleDeleteCard = (cardId: number) => {
		deleteCards(cardId)
	}

	return (
		<>
			<SubHeading className={styles.subtitle}>Карты</SubHeading>
			<div className={styles.fill}>
				{profile?.cards.map(card => (
					<div className={styles.row} key={card.id}>
						<div className={styles.card}>
							<span className={styles.info}>
								{formatCardNumber(card.cardNumber)}
								{card.bankName && (
									` - ${card.bankName}`
								)}
							</span>
						</div>
						<button
							className={styles.button}
							onClick={() => handleDeleteCard(card.id)}
						>
							Удалить
						</button>
					</div>
				))}
				<Link className={styles.add} href='/profile/add-card'>Добавить карту</Link>
			</div>
		</>
	)
}

export default MyAccountCards
