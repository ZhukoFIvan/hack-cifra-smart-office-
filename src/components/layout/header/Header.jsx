import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
const Header = ({ heading = '', icon, page }) => {
	return (
		<section className={styles.wrapper}>
			<h1>{heading}</h1>
			<Link to={page}> 
				
				<img src={icon} alt='icon' />
			</Link>
		</section>
	)
}

export default Header
