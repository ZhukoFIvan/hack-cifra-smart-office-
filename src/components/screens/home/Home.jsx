import axios from 'axios'
import { useEffect, useState } from 'react'
import BtnsBlock from '../../BtnsBlock/BtnsBlock'
import ProfileBlock from '../../ProfileBlock/ProfileBlock'
import Skeleton from '../../ProfileBlock/Skeleton'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Home.module.scss'
import notification from '/public/notification.svg'

const Home = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		
		setTimeout(() => setIsLoading(false), 1000)
	}, [])

	return (
		<>
			<Layout >
				<Header
					heading='Главная'
					icon={notification}
					page={'/notification'}
					balance={data.data?.balance}
					isLoading={isLoading}
				/>
				{isLoading ? <Skeleton /> : <ProfileBlock data={data} />}


				<section className={styles.btns}>
					<BtnsBlock />
				</section>
			</Layout>
		</>
	)
}

export default Home
