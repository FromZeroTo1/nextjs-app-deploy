import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const HeaderFavorite: FC = () => {
	const { profile } = useProfile()

	return (
		<>
			{profile && (
				<Link href='/favorites'>
					<Image
						priority
						width={26}
						height={26}
						src='/images/favorites.svg'
						alt='Prisma Favorites'
					/>
				</Link>
			)}
		</>
	)
}

export default HeaderFavorite
