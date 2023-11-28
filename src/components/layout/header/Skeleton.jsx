import ContentLoader from 'react-content-loader'

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={60}
			height={30}
			
			viewBox='0 0 60 30'
			backgroundColor='#3b4141'
			foregroundColor='#ecebeb'
		>
			<rect x='3' y='6' rx='4' ry='4' width='47' height='18' />
		</ContentLoader>
	)
}

export default Skeleton
