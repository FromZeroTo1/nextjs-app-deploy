import { FC } from 'react'
import styles from './SearchField.module.scss'
import { ISearchField } from './interface/searchField.interface'

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<input
				placeholder='Поиск...'
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
