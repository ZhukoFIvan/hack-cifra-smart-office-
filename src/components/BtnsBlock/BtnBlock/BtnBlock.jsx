import styles from './BtnBlock.module.scss'
const BtnBlock = ({ title, icon }) => {
	return (
		<section className={styles.wrapper}>
			<h2>{title}</h2>
			<img src={icon} alt='' />
		</section>
	)
}
export default BtnBlock