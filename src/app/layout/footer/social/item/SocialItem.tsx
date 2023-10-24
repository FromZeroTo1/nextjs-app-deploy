import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ISocialItem } from '../interface/social.interface'

const SocialItem: FC<{ item: ISocialItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<Image
					priority
					src={item.icon.src}
					width={item.icon.width}
					height={item.icon.height}
					alt={item.icon.alt}
				/>
			</Link>
		</li>
	)
}

export default SocialItem
