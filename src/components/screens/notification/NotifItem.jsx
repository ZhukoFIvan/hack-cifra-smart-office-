import { AiOutlineClose } from 'react-icons/ai'
import styles from './Notification.module.scss'
import info from '/public/info.svg'
const NotifItem = ({ item, removeNotif }) => {
	return (
		<div className={styles.notif}>
			<img src={info} alt='' />
			<div>{item.title}</div>
			<button
				onClick={() => {
					removeNotif(item._id)
				}}
			>
				<AiOutlineClose color='gray' />
			</button>
		</div>
	)
}

export default NotifItem
