import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LogoPict.jpg';
import BurgerBar from '../components/burgerBar/BurgerBar';

const Header = () => {
	return (
		<header className='header'>
			<section className='header__logo'>
				<NavLink to='/'>
					<img src={Logo} alt='logo' className='header__logo__img' />
				</NavLink>
			</section>
			<section className='header__menu'>
				<BurgerBar />
			</section>
		</header>
	);
};
export default Header;
