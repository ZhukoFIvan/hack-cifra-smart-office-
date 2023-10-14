import Layout from '../../layout/Layout'
import Header from '../../layout/header/Header'
import icon from '/public/home.svg'

const Event = () => {
	return (
		<Layout>
			<Header page={'/'} heading='События' icon={icon} />
		</Layout>
	)
}

export default Event
