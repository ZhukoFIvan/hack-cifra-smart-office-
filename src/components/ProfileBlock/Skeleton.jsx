import ContentLoader from 'react-content-loader'
import styles from './ProfileBlock.module.scss'

const Skeleton = () => {
	return (
		<div className={styles.wrapper}>
			<ContentLoader
				speed={2}
				width={325}
				height={150}
				viewBox='0 0 325 150'
				backgroundColor='#3b4141'
				foregroundColor='#ecebeb'
			>
				<circle cx='65' cy='64' r='64' />
				<rect x='154' y='-1' rx='8' ry='8' width='152' height='59' />
				<rect x='197' y='19' rx='0' ry='0' width='0' height='1' />
				<rect x='153' y='82' rx='4' ry='4' width='139' height='17' />
				<rect x='153' y='107' rx='3' ry='3' width='134' height='16' />
			</ContentLoader>
		</div>
	)
}

export default Skeleton
