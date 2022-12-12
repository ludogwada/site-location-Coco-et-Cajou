import React from 'react';
import { NavLink } from 'react-router-dom';
import pages from '../../data/pages.json';

const Navbar = () => {
	let activeStyle = {
		backgroundColor: '#45858C',
		borderRadius: '20px',
	};
	return (
		<>
			<nav className='navbar'>
				{pages.map((page, index) => {
					let id = index;
					return (
						<section key={id} className='navbar__link'>
							<NavLink
								to={page.link}
								className='link'
								style={({ isActive }) => (isActive ? activeStyle : undefined)}>
								{page.page}
							</NavLink>
						</section>
					);
				})}
			</nav>
		</>
	);
};

export default Navbar;
