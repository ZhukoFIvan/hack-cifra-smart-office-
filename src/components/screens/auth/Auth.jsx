import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import styles from './Auth.module.scss'

const Auth = () => {
	const {} = useForm()
	return (
		<Layout>
			<div className={styles.auth_wrapper}>
				<h1>Sign IN</h1>

			</div>
		</Layout>
	)
}

export default Auth
