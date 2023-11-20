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
			.get('https://64ef9dfa219b3e2873c4b4cf.mockapi.io/items')
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
