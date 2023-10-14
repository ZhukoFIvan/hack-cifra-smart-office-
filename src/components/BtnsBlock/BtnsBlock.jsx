import { Link } from 'react-router-dom'
import styles from './BtnsBlock.module.scss'
import icon1 from '/public/chart.svg'
import icon2 from '/public/monitor.svg'
import icon3 from '/public/users.svg'
const BtnsBlock = ({ title, icon }) => {
	return (
		<>
			<Link to='statistic' className={styles.wrapper}>
				<h2>Статистика</h2>
				<img src={icon1} alt='' />
			</Link>
			<Link to='take_place' className={styles.wrapper}>
				<h2>Создать бронь</h2>
				<img src={icon2} alt='' />
			</Link>
			<Link to='create_event' className={styles.wrapper}>
				<h2>Создать событие</h2>
				<img src={icon3} alt='' />
			</Link>
			<div className={styles.wrapper}></div>
			<div className={styles.wrapper}></div>
			<div className={styles.wrapper}></div>
		</>
	)
}

export default BtnsBlock
