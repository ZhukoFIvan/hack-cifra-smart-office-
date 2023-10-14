import BtnsBlock from '../../BtnsBlock/BtnsBlock'
import ProfileBlock from '../../ProfileBlock/ProfileBlock'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Home.module.scss'
import notification from '/public/notification.svg'

const Home = () => {
	return (
		<>
			<Layout>
				<Header heading='MISIS' icon={notification} page={'/notification'}/>
				<ProfileBlock />
				<section className={styles.btns}>
					<BtnsBlock />
				</section>
			</Layout>
		</>
	)
}

export default Home
