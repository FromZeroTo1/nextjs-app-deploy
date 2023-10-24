import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from '../cart-btn/AddToCartButton'
import FavoriteButton from '../favorite-btn/FavoriteButton'
import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.preview}>
				{product.salePrice && (
					<div className={styles.sale}>
						{Math.round(100 - (product.salePrice * 100) / product.price)}%
					</div>
				)}
				<div className={styles.favorite}>
					<FavoriteButton productId={product.id} />
				</div>
				<div className={styles.cart}>
					<AddToCartButton product={product} />
				</div>
				<Link className={styles.image} href={`/product/${product.slug}`}>
					<Image
						quality={100}
						draggable={false}
						priority
						width={400}
						height={500}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<div className={styles.info}>
				{(product.dimensions.length > 0 || product.colors.length > 0) && (
					<div className={styles.fill}>
						{product.dimensions.length > 0 && (
							<ul className={styles.list}>
								{product.dimensions.map((dim, index) => (
									<li className={styles.dimension} key={index + 1}>
										{dim.dimension}
										{index < product.dimensions.length - 1 && ','}
									</li>
								))}
							</ul>
						)}
						{product.colors.length > 0 && (
							<ul className={styles.list}>
								{product.colors.map((color, index) => (
									<li
										className={styles.color}
										key={index + 1}
										style={{ backgroundColor: color.hex }}
									></li>
								))}
							</ul>
						)}
					</div>
				)}
				<div className={styles.bottom}>
					<Link href={`/product/${product.slug}`}>
						<h3 className={styles.name}>{product.name}</h3>
					</Link>
					{product.salePrice ? (
						<div>
							<span className={styles.salePrice}>{product.price} р.</span>
							<span className={styles.price}>{product.salePrice} р.</span>
						</div>
					) : (
						<div className={styles.price}>{product.price} р.</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductItem
