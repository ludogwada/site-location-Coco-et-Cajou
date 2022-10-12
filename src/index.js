import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Error from './pages/Error';
import Hebergement from './pages/Hebergement';
import Home from './pages/Home';
import Cover from './pages/Cover';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Cover />} />
				<Route path='/home' element={<Home />} />
				<Route path=':hebergementId' element={<Hebergement />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
