import React from 'react';
import icoFacebook from '../assets/icon-facebook.ico';
import icoAirbnb from '../assets/icon-airbnb.ico';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<section className='footer__title'></section>
			<p className='footer__title__text'>
				Location de bungalows de vacances à Sainte Anne en Guadeloupe
			</p>
			<section className='footer__social'>
				<a className='footer__link' href='https://www.facebook.com/CocoetCajou'>
					<img
						src={icoFacebook}
						alt='facebook'
						className='footer__link__img'></img>
				</a>
				<a
					className='footer__link'
					href='https://airbnb.com/h/cocoetcajoubungalows-cajou'>
					<img
						src={icoAirbnb}
						alt='airbnb cajou'
						className='footer__link__img'></img>
					Cajou
				</a>
				<a
					className='footer__link'
					href='https://airbnb.com/h/cocoetcajoubungalows-coco'>
					<img
						src={icoAirbnb}
						alt='airbnb coco'
						className='footer__link__img'></img>
					Coco
				</a>
			</section>
			<section className='footer__copyright'>
				<p>© 2022 Ludogwada</p>
			</section>
			<section>
				<Link to='../mentions.html'>Mentions légales</Link>
			</section>
		</footer>
	);
};

export default Footer;
