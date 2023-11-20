import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.scss'
import Event from './components/screens/Event/Event'
import NotFound from './components/screens/NotFound/NotFound'
import Statistic from './components/screens/Statistic/Statistic'
import TakePlace from './components/screens/TakePlace/TakePlace'
import Auth from './components/screens/auth/Auth'
import Home from './components/screens/home/Home'
import Notification from './components/screens/notification/Notification'
import Shop from './components/screens/shop/Shop'
import Tovar from './components/screens/shop/tovar/Tovar'

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
