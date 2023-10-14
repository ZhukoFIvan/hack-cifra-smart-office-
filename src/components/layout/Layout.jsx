import Header from './header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	
	return (
		<section className={styles.wrapper}>
			{/* <Header/> */}
			{children}
		</section>
	)
}

export default Layout
