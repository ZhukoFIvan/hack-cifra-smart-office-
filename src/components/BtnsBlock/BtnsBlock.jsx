import { Link } from 'react-router-dom'
import styles from './BtnsBlock.module.scss'
import icon1 from '/public/chart.svg'
import icon2 from '/public/monitor.svg'
import icon4 from '/public/shop.svg'
import icon3 from '/public/users.svg'
const BtnsBlock = ({ title, icon }) => {
	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<>
			<Link to='statistic' className={styles.wrapper}>
				<h2>Статистика</h2>
				<img src={icon1} alt='stat' />
			</Link>
			<Link to='take-place' className={styles.wrapper}>
				<h2>Создать бронь</h2>
				<img src={icon2} alt='take_place' />
			</Link>
			<Link to='create-event' className={styles.wrapper}>
				<h2>События</h2>
				<img src={icon3} alt='event' />
			</Link>
			<Link to='shop' className={styles.wrapper}>
				<h2>Магазин</h2>
				<img src={icon4} alt='shop' />
			</Link>
			{/* <button className={styles.wrapper} onClick={changeTheme}>Светлая тема</button>
			<button className={styles.wrapper}>Темная тема</button> */}
		</>
	)
}

export default BtnsBlock
