import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerBar = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<button className='navbar__burger' onClick={handleShow}>
				<span className='burgerBar'></span>
			</button>

			{show ? (
				<nav className='navbar'>
					<NavLink to='/home' className='link' onClick={handleShow}>
						Accueil
					</NavLink>
					<NavLink to='/coco' className='link' onClick={handleShow}>
						Bungalow Coco
					</NavLink>
					<NavLink to='/cajou' className='link' onClick={handleShow}>
						Bungalow Cajou
					</NavLink>
					<NavLink to='/availablity' className='link' onClick={handleShow}>
						Disponibilités
					</NavLink>
					<NavLink to='/gallery' className='link' onClick={handleShow}>
						Galerie
					</NavLink>
					<NavLink to='/contact' className='link' onClick={handleShow}>
						Contact
					</NavLink>
					<NavLink to='/maps' className='link' onClick={handleShow}>
						Localisation
					</NavLink>
					<NavLink to='/review' className='link' onClick={handleShow}>
						Avis
					</NavLink>
				</nav>
			) : null}
		</>
	);
};

export default BurgerBar;
