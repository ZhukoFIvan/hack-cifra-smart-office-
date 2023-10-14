import cn from 'clsx'
import { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import SelectPlace from '../../selectPlace/SelectPlace'
import styles from './TakePlace.module.scss'
import home from '/public/home.svg'
import { Areas } from '/src/data.js'
const TakePlace = () => {
	const [isActive, setIsActive] = useState(false)
	const [isShow, setIsShow] = useState(false)
	const [place, setPlace] = useState(null)
	const [show, setShow] = useState(null)

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
							/>
							<div
								className={cn(styles.places, {
									[styles.active]: isShow && show == id
								})}
							>
								{[...Array(area.maxCount)].map(i => {
									return (
										<button
											key={i}
											onClick={() => onClickPlace(i)}
											className={cn(styles.box, {
												[styles.active]: isActive && place == i
											})}
										></button>
									)
								})}
							</div>
						</div>
					)
				})}
			</Layout>
		</>
	)
}

export default TakePlace
