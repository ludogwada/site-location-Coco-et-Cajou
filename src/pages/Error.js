import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const Error = () => {
	return (
		<main>
			<HeaderLeft />
			<Header />
			<article>
				<section className='error'>
					<span className='error__text'>404</span>
					<span className='error__text__oups'>
						<h2>Oups! La page que vous demandez n'existe pas.</h2>
					</span>
				</section>
				<section className='redirection'>
					<Link to='/'>
						<h4 className='redirection__h4'>Retourner sur la page d'accueil</h4>
					</Link>
				</section>
			</article>
		</main>
	);
};

export default Error;
