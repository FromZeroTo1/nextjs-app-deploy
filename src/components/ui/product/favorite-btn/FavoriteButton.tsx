import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'

interface IFavoriteBtn {
	productId: number
	defaultImage?: string
	existImage?: string
	text?: string
	className?: string
}

const FavoriteButton: FC<IFavoriteBtn> = ({
	productId,
	defaultImage = 'heart.svg',
	existImage = 'heart-fill.svg',
	text,
	className
}) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<button onClick={() => mutate()} className={className ? className : ''}>
			{isExists ? (
				<Image
					priority
					src={'/images/product/' + existImage}
					width={22}
					height={20}
					alt='Remove From Favorites'
				/>
			) : (
				<Image
					priority
					src={'/images/product/' + defaultImage}
					width={22}
					height={20}
					alt='Add To Favorites'
				/>
			)}
			{text ? <span>{text}</span> : ''}
		</button>
	)
}

export default FavoriteButton
