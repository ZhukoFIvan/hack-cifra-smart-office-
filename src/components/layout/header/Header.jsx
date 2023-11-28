import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import coin from '/public/white_coin.svg'
import Skeleton from './Skeleton'
const Header = ({ heading = '', icon, page, balance, balance_icon, isLoading }) => {
	return (
		<section className={styles.wrapper}>
			<h1>{heading}</h1>
			{isLoading ? <Skeleton /> :
			<div className={styles.balance}>
				<img src={coin} alt="" />
				<div>777</div>
			</div>}
			<Link to={page} className={styles.icon}>
				<img src={icon} alt='icon' />
			</Link>
		</section>
	)
}

export default Header
