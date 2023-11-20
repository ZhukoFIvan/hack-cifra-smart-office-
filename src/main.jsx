import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.scss'
import Event from './components/screens/Event/Event'
import NotFound from '../src/components/screens/notFound/NotFound'
import Statistic from '../src/components/screens/statistic/Statistic'
import TakePlace from '../src/components/screens/takePlace/TakePlace'
import Auth from '../src/components/screens/auth/Auth'
import Home from '../src/components/screens/home/Home'
import Notification from '../public/notifications/Notification'
import Shop from '../src/components/screens/shop/Shop'
import Tovar from '../src/components/screens/tovar/Tovar'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='statistic' element={<Statistic />} />
				<Route path='take-place' element={<TakePlace />} />
				<Route path='shop' element={<Shop />} />
				<Route path='shop/tovar/:id' element={<Tovar />} />
				<Route path='create-event' element={<Event />} />
				<Route path='notification' element={<Notification />} />
				<Route path='auth' element={<Auth />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
