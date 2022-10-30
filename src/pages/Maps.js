import React from 'react';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const Home = () => {
	return (
		<main>
			<Header />
			<HeaderLeft />
			<article className='maps'>
				<section>
					<iframe
						title='maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.0143107971146!2d-61.333788679237394!3d16.27030354619394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c134b5d4d2e697d%3A0xf26dfee2cf4b63f9!2sCoco%20et%20Cajou%20Bungalows!5e0!3m2!1sfr!2sfr!4v1665602038556!5m2!1sfr!2sfr'
						width='600'
						height='450'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</section>
			</article>
		</main>
	);
};

export default Home;
