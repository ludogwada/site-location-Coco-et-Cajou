import React from 'react';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const Contact = () => {
	return (
		<>
			<Header />
			<HeaderLeft />
			<main>
				<article className='contact'>
					<section className='contact__form'>
						<h1 className='contact__title'>Contactez nous :</h1>
						<Form />
					</section>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Contact;
