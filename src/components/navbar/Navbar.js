import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<NavLink to='/' className='link'>
					Accueil
				</NavLink>

				<NavLink to='bungalow/coco' className='link'>
					Bungalow Coco
				</NavLink>
				<NavLink to='bungalow/cajou' className='link'>
					Bungalow Cajou
				</NavLink>
				<NavLink to='availablity' className='link'>
					Disponibilités
				</NavLink>
				<NavLink to='gallery' className='link'>
					Galerie
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
