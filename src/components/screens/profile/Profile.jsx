import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Profile.module.scss'
import './slider.css'
import icon from '/public/avatar.png'
import home from '/public/home.svg'

const Profile = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 1500,
		swipe: true,
		slidesToShow: 5,
		slidesToScroll: 3
	}
	const notify = text =>
		toast.info('🔥Ачивка', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: 0,
			theme: 'dark'
		})
	return (
		<Layout>
			<Header heading='ЛК' icon={home} page={'/'} />
			<section className={styles.wrapper}>
				<div className={styles.main}>
					<div className={styles.img}>
						{' '}
						<img src={icon} alt='icon' />
					</div>

					<div className={styles.info}>
						<div>Иван Жуков</div>
						<div>Team Lead</div>
					</div>
				</div>
				<div className={styles.achievements_block}>
					<h4>🔥Achievements</h4>
					<ToastContainer
						position='top-center'
						autoClose={2000}
						limit={1}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
					/>
					{/* <div className={styles.achievements}> */}
					<Slider {...settings}>
						<div className={styles.a} onClick={notify}>
							⭐
						</div>
						<div className={styles.a} onClick={notify}>
							📝
						</div>
						<div className={styles.a} onClick={notify}>
							☕︎
						</div>
						<div className={styles.a} onClick={notify}>
							🥇
						</div>
						<div className={styles.a} onClick={notify}>
							🥈
						</div>
						<div className={styles.a} onClick={notify}>
							🥉
						</div>
						<div className={styles.a} onClick={notify}>
							🏆
						</div>
						<div className={styles.a} onClick={notify}>
							😎
						</div>
					</Slider>
				</div>

				<div className={styles.btns}>
					<Link to={'/statistic'} className={styles.link}>
						Полная статистика
					</Link>
					<div className={styles.settings}>
						<div></div>
						<div>Настройки профиля</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Profile
