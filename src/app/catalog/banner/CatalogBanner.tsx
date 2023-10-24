import { FC } from 'react'
import styles from './CatalogBanner.module.scss'

const CatalogBanner: FC = () => {
	return (
		<section className='min-h-[500px] flex items-center justify-center bg-[url("/images/catalog/banner.png")] bg-no-repeat bg-cover bg-center mb-[50px] mt-[30px]'>
			<div className='relative flex justify-center items-center'>
				<div
					className={`text-[140px] uppercase font-furore text-transparent absolute z-0 ${styles.text}`}
				>
					Sale 20%
				</div>
				<p className='text-8xl font-extrabold text-white relative z-1'>
					Скидка 20% на кроссовки
				</p>
			</div>
		</section>
	)
}

export default CatalogBanner
