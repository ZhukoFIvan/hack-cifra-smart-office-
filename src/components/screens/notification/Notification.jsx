import { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import NotifItem from './NotifItem'
import styles from './Notification.module.scss'
import { data } from './notif.data'
import icon from '/public/home.svg'
import info from '/public/info.svg'

const Notification = () => {
	const [notif, setNotif] = useState(data)
	const removeNotif = id => setNotif([...notif].filter(n => n._id !== id))
	return (
		<Layout>
			<Header heading='Уведомления' icon={icon} page={'/'} />
			<div className={styles.notification}>
				{data.map(item => {
					return (
						<NotifItem key={item._id} item={item} removeNotif={removeNotif}icon={item.icon} />
					)
				})}
			</div>
		</Layout>
	)
}

export default Notification
