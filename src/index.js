import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Error from './pages/Error';
import Hebergement from './pages/Hebergement';
import Home from './pages/Home';
import Cover from './pages/Cover';
import Gallery from './pages/Gallery';
import Maps from './pages/Maps';
import HeaderLeft from './layout/HeaderLeft';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<HeaderLeft />
			<Routes>
				<Route path='/' element={<Cover />} />
				<Route path='/home' element={<Home />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/maps' element={<Maps />} />
				<Route path=':hebergementId' element={<Hebergement />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
