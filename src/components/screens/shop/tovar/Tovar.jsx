import { useParams } from 'react-router'
import Layout from '../../../layout/Layout.jsx'
import { shop } from '../shop.data.js'
import Header from '../../../layout/header/Header.jsx'
import arrow from '/public/arrow-back.svg'

const Tovar = () => {
	const { id } = useParams()
	if (shop.id === id) {
		return (
			<Layout>
				<Header page={'/shop'} heading={shop[`${id}`].name} icon={arrow}/>
				<div>
					<img src={shop[`${id}`].imgUrl} alt='' />
					<div>{shop[`${id}`].name}</div>
					<div>{shop[`${id}`].price}</div>
				</div>
			</Layout>
		)
	}else{
		console.log("Please select")
	}
}

export default Tovar
