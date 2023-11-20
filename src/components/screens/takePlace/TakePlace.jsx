import cn from 'clsx'
import { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import SelectPlace from '../../selectPlace/SelectPlace'
import styles from './TakePlace.module.scss'
import home from '/public/home.svg'
import { Areas, Reserved } from '/src/data.js'

const TakePlace = () => {
	const [isShow, setIsShow] = useState(false)
	const [place, setPlace] = useState(0)
	const [show, setShow] = useState(null)
	const [isActive, setIsActive] = useState(false)

	const onClickPlace = id => {
		setPlace(id)
		setIsActive(!isActive)
	}
	return (
		<>
			<Layout>
				<Header heading='Бронь' icon={home} page={'/'} />

				{Areas.map((area, id) => {
					return (
						<div key={area.id}>
							<SelectPlace
								id={id}
								show={show}
								setShow={setShow}
								isShow={isShow}
								setIsShow={setIsShow}
								name={area.name}
								count={area.currentCount}
								maxCount={area.maxCount}
								setIsActive={setIsActive}
								isActive={isActive}
							/>
							<div
								className={cn(styles.places, {
									[styles.active]: isShow
								})}
							>
								{Reserved.map(item => {
									return (
										<button
											onClick={() => onClickPlace(item.id)}
											key={item.id}
											className={cn(styles.box, {
												[styles.active]: item.isReserved,
												[styles.active2]: item.id === place && isActive
											})}
										></button>
									)
								})}
							</div>
							<section
								className={cn(styles.info, {
									[styles.show]: isActive
								})}
							>
								<div>Время брони</div>
								<div className={styles.time}>
									<button>00:00</button>
									<div className={styles.line}></div>
									<button>12:00</button>
								</div>
								<button>Забронировать</button>
							</section>
						</div>
					)
				})}
			</Layout>

		</>
	)
}

export default TakePlace
