import styles from './ProfileBlock.module.scss'
const ProfileBlock = ({data}) => {
 return <section className={styles.wrapper}>
	<div className={styles.img}>
		<img src="/public/2023-10-11 00.19.56.jpg" alt="profile" />
	</div>
	<div className={styles.info_block}>
		<div className={styles.name}>{data.data?.name}</div>
		<div className={styles.info}>
			<div className={styles.post}>Администратор</div>
			<div className={styles.id}>ID:1748711294</div>
		</div>
		
	</div>


 </section>
}

export default ProfileBlock