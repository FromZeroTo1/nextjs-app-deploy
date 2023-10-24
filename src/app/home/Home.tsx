import Subscribe from '@/ui/subscribe/Subscribe'
import UniqueLook from '@/ui/unique-look/UniqueLook'
import { FC } from 'react'
import styles from './Home.module.scss'
import HomeBanner from './banner/HomeBanner'
import HomeCategories from './categories/HomeCategories'
import HomePosts from './posts/HomePosts'
import HomeSlider from './slider/HomeSlider'
import HomeTrends from './trends/HomeTrends'

const Home: FC = () => {
	return (
		<>
			<HomeBanner />
			<HomeSlider />
			<HomeCategories />
			<HomeTrends />
			<UniqueLook
				title='Выбери свой уникальный образ!'
				subTitle='Наши стилисты собрали их за вас.'
				btn='В каталог образов'
				btnVariant='light'
			/>
			<Subscribe
				wrapperClassName={styles.subscribe}
				formClassName={styles.form}
			/>
			<HomePosts />
		</>
	)
}

export default Home
