import cn from 'clsx'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Event.module.scss'
import icon from '/public/home.svg'

const Event = () => {
	const [isShow, setIsShow] = useState(false)
	return (
		<Layout>
			<Header page={'/'} heading='События' icon={icon} />

			<button onClick={() => setIsShow(!isShow)} className={styles.wrapper}>
				<div className={styles.text}>Событие1</div>
				<span style={{ color: 'blue' }}>12:00</span>{' '}
				<BsChevronDown
					style={{
						transition: 'all 0.5s ease',
						transform: `rotate(${isShow ? 0 : '-0.5turn'})`
					}}
				/>
			</button>
			<div
				className={cn(styles.events, {
					[styles.active]: isShow
				})}
			>
				<div>Участники</div>
				<div className={styles.participant}>
					<img src='/public/2023-10-11 00.19.56.jpg' alt='' />
					<div className={styles.name}>Андрей Иванов</div>
				</div>
				<div className={styles.participant}>
					<img src='/public/2023-10-11 00.19.56.jpg' alt='' />
					<div className={styles.name}>Андрей Иванов</div>
				</div>
				<div className={styles.participant}>
					<img src='/public/2023-10-11 00.19.56.jpg' alt='' />
					<div className={styles.name}>Андрей Иванов</div>
				</div>
				<h3 className={styles.task_title}>Задача</h3>
				<div className={styles.task}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					quaerat in nihil. Atque illum enim culpa voluptatum laudantium eius
					accusantium.
				</div>
				<h3 className={styles.reward_title}>Награда</h3>
				<div className={styles.reward}>
					<img src="/public/coin.svg" alt="coin" />
					<div>99999</div>
				</div>
				<button>Завершить задачу</button>
			</div>
		</Layout>
	)
}

export default Event
