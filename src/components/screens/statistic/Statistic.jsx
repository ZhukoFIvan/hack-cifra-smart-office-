import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { animated, useSpring } from 'react-spring'
import Header from '../..//layout/header/Header'
import Layout from '../../layout/Layout'
import styles from './Statistic.module.scss'
import { months, values } from './chart.data'
import icon from '/public/home.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AnimatedNumber = ({ value }) => {
	const props = useSpring({
		from: { number: 0 },
		to: { number: value },
		config: { duration: 1000 }
	})
	


	return (
		<animated.span>
			{props.number.interpolate(number => number.toFixed(0))}
		</animated.span>
	)
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			}
		},
		y: {
			display: false,
			grid: {
				display: false,
				drawBorder: false
			},

			ticks: {
				display: false
			}
		}
	},
	borderRadius: 10,
	borderSkipped: false
}
const Statistic = () => {
	const [data, setData] = useState([])
	useEffect(() => {
	
			
	}, [])
	return (
		<Layout>
			<Header heading='Статистика' icon={icon} page={'/'}/>

			<div className={styles.chart}>
				<Bar
					options={options}
					data={{
						labels: months.map(item => item.name),
						datasets: [
							{
								label: 'hours',
								data: values.map(item => item.value),
								backgroundColor: 'RGB(32, 105, 224)'
							}
						]
					}}
				/>
			</div>
			<section className={styles.stat}>
				<div className={styles.block}>
					<AnimatedNumber value={12} />
					<div>Часов за этот день</div>
				</div>
				<div className={styles.block}>
					<AnimatedNumber value={17} />
					<div>Событий</div>
				</div>
				<div className={styles.block}>
					<AnimatedNumber value={43} />
					<div>Выпитого кофе</div>
				</div>
				<div className={styles.block}>
					<AnimatedNumber value={120} />
					<div>Дней в компании</div>
				</div>
			</section>
		</Layout>
	)
}

export default Statistic
