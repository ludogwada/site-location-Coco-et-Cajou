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
import Contact from './pages/Contact';
import Dispo from './pages/Dispo';
import Review from './pages/Review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Cover />} />
				<Route path='/home' element={<Home />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/maps' element={<Maps />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/availablity' element={<Dispo />} />
				<Route path='/:hebergementId' element={<Hebergement />} />
				<Route path='/review' element={<Review />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
