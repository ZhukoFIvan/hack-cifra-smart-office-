import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Shop.module.scss'
import { shop } from './shop.data.js'
import home from '/public/home.svg'
import coin from '/public/blue_coin.svg'
const Shop = () => {
	return (
		<Layout>
			<Header heading='Магазин' page='/' icon={home} />
			<section className={styles.shop}>
				{shop.map(value => {
					return (
						<div key={value.id} className={styles.item} to={`tovar/${value.id}`}>
							<img
								className={styles.photo}
								src={value.imgUrl}
								alt=''
							/>
							<div className={styles.info}>
								<div className={styles.name}>{value.name}</div>
								<div className={styles.price}>
									<img src={coin} alt='coin' />
									<div>{value.price} coins</div>
									
								</div>
							</div>
						</div>
					)
				})}
			</section>
		</Layout>
	)
}

export default Shop
