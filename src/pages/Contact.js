import React from 'react';
import Form from '../components/form/Form';
import Header from '../layout/Header';

const Contact = () => {
	return (
		<>
			<Header />
			<main className='contact'>
				<h1 className='contact__title'>Contactez nous</h1>
				<section className='contact __form'>
					<Form />
				</section>
			</main>
		</>
	);
};

export default Contact;
