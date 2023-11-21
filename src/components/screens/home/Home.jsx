import axios from 'axios'
import { useEffect, useState } from 'react'
import BtnsBlock from '../../BtnsBlock/BtnsBlock'
import ProfileBlock from '../../ProfileBlock/ProfileBlock'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Home.module.scss'
import notification from '/public/notification.svg'
import { ThemeContext } from '../../../providers/ThemeProvider'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('http://boldyrev.now.fvds.ru:8080/api/user/abobus@lalka.com')
			.then(data => setData(data))

	}, [])

	return (
		<>

			<Layout>
				<Header heading='MISIS' icon={notification} page={'/notification'} />
				<ProfileBlock data={data} />
				<section className={styles.btns}>
					<BtnsBlock />
				</section>
			</Layout>

		</>
	)
}

export default Home
