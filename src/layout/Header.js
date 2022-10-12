import React from 'react';
import Logo from '../assets/LogoPict.jpg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src={Logo} alt='logo' className='header__logo__img' />
			</div>
		</header>
	);
};
export default Header;
