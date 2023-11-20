import { BsChevronDown } from 'react-icons/bs'
import styles from './SelectPlace.module.scss'
const SelectPlace = ({ name, count, setShow, show, maxCount, id, setIsShow, isShow, isActive, setIsActive }) => {
	const onClickArea = id => {
		setShow(id)
		setIsShow(!isShow)
		{isActive && setIsActive(!isActive)}
		
		
	}

	return (
		<button onClick={() => onClickArea(id)} className={styles.wrapper}>
			<div className={styles.name}>{name}</div>
			<div>
				<span style={count == maxCount ? { color: 'red' } : { color: 'blue' }}>
					{count}
				</span>{' '}
				из {maxCount}
			</div>
			<BsChevronDown
				style={{
					transition: 'all 0.5s ease',
					transform: `rotate(${show == id & isShow ? 0 : '-0.5turn'})`
				}}
			/>
		</button>
		
	)
}

export default SelectPlace
