import { AiOutlineClose } from 'react-icons/ai'
import styles from './Notification.module.scss'
const NotifItem = ({ item, removeNotif, icon }) => {
	return (
		<div className={styles.notif}>
			<img src={icon} alt='' />
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
