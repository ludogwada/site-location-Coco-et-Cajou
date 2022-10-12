import React, { useState } from 'react';
import Header from '../layout/Header';

const Home = () => {
	return (
		<>
			<Header />
			<main className='maps'>
				<section>
					<iframe
						title='map'
						src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d19438.578718737397!2d-61.33133271935991!3d16.268969630196466!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1665586247838!5m2!1sfr!2sfr'
						width='600'
						height='450'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</section>
			</main>
		</>
	);
};

export default Home;
