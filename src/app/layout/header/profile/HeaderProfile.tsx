'use client'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, setIsShow, ref } = useOutside(false)

	if (!profile?.avatarPath) return null

	return (
		<div className='w-[25px] h-[25px] relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					priority
					width={26}
					height={26}
					src={profile?.avatarPath}
					alt='Prisma Profile'
					className='rounded-full animate-opacity'
				/>
			</button>
			{isShow && (
				<div className='absolute right-2 z-2'
				style={{
					top: 'calc(100% + 1rem)'
				}}>
					<Link href='/profile/main' className='bg-gray shadow py-2 px-4 block w-full rounded-md text-sm whitespace-nowrap'>Личный кабинет</Link>
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
