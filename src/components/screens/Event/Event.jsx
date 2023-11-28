import cn from 'clsx'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import styles from './Event.module.scss'
import photo from '/public/2023-10-11 00.19.56.jpg'
import icon from '/public/home.svg'
import coin from '/public/white_coin.svg'

const Event = () => {
	const [isShow, setIsShow] = useState(false)
	return (
		<Layout>
			<Header page={'/'} heading='События' icon={icon} />
			<div className={styles.create}>
				<FaPlus color='gray'/>
			</div>

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
					<img src={photo} alt='' />
					<div className={styles.name}>Иван Жуков</div>
				</div>
				<div className={styles.participant}>
					<img src={photo} alt='' />
					<div className={styles.name}>Дарья Ващенко</div>
				</div>
				<div className={styles.participant}>
					<img src={photo} alt='' />
					<div className={styles.name}>Шманев Егор</div>
				</div>
				<h3 className={styles.task_title}>Задача</h3>
				<div className={styles.task}>
					Собраться в команду и вместе разработать конкурентное решение для
					“умного офиса” в рамках акселератора “Цифра”
				</div>
				<h3 className={styles.reward_title}>Награда</h3>
				<div className={styles.reward}>
					<img src={coin} alt='coin' />
					<div>99999</div>
				</div>
				<div className={styles.line}></div>
				<button>Завершить задачу</button>
			</div>
		</Layout>
	)
}

export default Event
