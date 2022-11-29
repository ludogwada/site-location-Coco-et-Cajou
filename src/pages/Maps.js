import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const itineraire =
	'https://www.google.fr/maps/dir/A%C3%A9roport+de+Pointe-%C3%A0-Pitre+Le+Raizet,+Morne+Mamiel,+Les+Abymes,+Guadeloupe/16.2699341,-61.3349073/@16.2694256,-61.3349603,19.28z/data=!4m9!4m8!1m5!1m1!1s0x8c13463cbf9354a1:0x3359364c058c89b4!2m2!1d-61.527249!2d16.2676129!1m0!3e0';

const Home = () => {
	return (
		<>
			<Header />
			<HeaderLeft />
			<main>
				<article className='maps'>
					<iframe
						className='maps__map'
						title='maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.0143107971146!2d-61.333788679237394!3d16.27030354619394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c134b5d4d2e697d%3A0xf26dfee2cf4b63f9!2sCoco%20et%20Cajou%20Bungalows!5e0!3m2!1sfr!2sfr!4v1665602038556!5m2!1sfr!2sfr'
						width='700'
						height='550'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>

					<a href={itineraire} className='maps__link'>
						<h2> =&gt; Itinéraire depuis l'aéroport</h2>
					</a>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Home;
