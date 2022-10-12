import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<NavLink to='/' className='link'>
					Accueil
				</NavLink>

				<NavLink to='coco' className='link'>
					Bungalow Coco
				</NavLink>
				<NavLink to='cajou' className='link'>
					Bungalow Cajou
				</NavLink>
				<NavLink to='gallery' className='link'>
					Galerie
				</NavLink>
				<NavLink to='reservation' className='link'>
					Réservation
				</NavLink>
				<NavLink to='contact' className='link'>
					Contact
				</NavLink>
				<NavLink to='maps' className='link'>
					Localisation
				</NavLink>
			</nav>
		</>
	);
};

export default Navbar;
