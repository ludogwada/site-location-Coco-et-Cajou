import React from 'react';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const Contact = () => {
	const mailto = () => {
		window.location = 'mailto:cocoetcajoubungalows@gmail.com';
	};

	return (
		<>
			<Header />
			<HeaderLeft />
			<main>
				<article className='contact'>
					<h1 className='contact__title'>Contactez nous :</h1>
					<section className='contact __form'>
						<Button text='cocoetcajoubungalows@gmail.com' action={mailto} />
						{/* <Form /> */}
					</section>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Contact;
