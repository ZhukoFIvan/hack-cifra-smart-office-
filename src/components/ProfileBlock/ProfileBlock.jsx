import { Link } from 'react-router-dom'
import styles from './ProfileBlock.module.scss'
import Profile from '../screens/profile/Profile'
import photo from '/public/avatar.png'
const ProfileBlock = ({ data, isLoading }) => {
	return (
		<Link className={styles.wrapper} to={'profile'}>
			<div className={styles.img}>
				<img src={photo} alt='profile' />
			</div>
			<div className={styles.info_block}>
				<div className={styles.name}>Иван Жуков</div>
				<div className={styles.info}>
					<div className={styles.post}>Администратор</div>
					<div className={styles.id}>ID:1937129837</div>
				</div>
			</div>
		</Link>
	)
}

export default ProfileBlock
