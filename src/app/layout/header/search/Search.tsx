import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { push } = useRouter()

	return (
		<div className='border-b-2 border-solid border-primary/20 flex justify-between items-center pb-1.5 gap-10'>
			<input
				className='outline-none max-w-[185px] leading-5'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Поиск'
			/>
			<button onClick={() => push(`/catalog?searchTerm=${searchTerm}`)}>
				<Image
					priority
					width={37}
					height={15}
					src='/images/arrow-right.svg'
					alt='Prisma'
				/>
			</button>
		</div>
	)
}

export default Search
