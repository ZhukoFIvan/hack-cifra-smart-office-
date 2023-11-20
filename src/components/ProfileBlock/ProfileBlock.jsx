import styles from './ProfileBlock.module.scss'
const ProfileBlock = ({data}) => {
 return <section className={styles.wrapper}>
	<div className={styles.img}>
		<img src="/public/avatar.png" alt="profile" />
	</div>
	<div className={styles.info_block}>
		<div className={styles.name}>{data.data?.title}</div>
		<div className={styles.info}>
			<div className={styles.post}>Администратор</div>
			<div className={styles.id}>ID:1748711294</div>
		</div>
		
	</div>


 </section>
}

export default ProfileBlock