import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Label from '../label/Label';

const Form = () => {
	const form = document.getElementById('form');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [errorForm, setErrorForm] = useState(true);

	const fieldsValided = () => {
		if (lastName.length < 2) {
			setErrorName(true);
			setErrorForm(true);
		} else {
			setErrorForm(false);
			setErrorName(false);
		}

		if (message.length < 2) {
			setErrorForm(true);
			setErrorMessage(true);
		} else {
			setErrorForm(false);
			setErrorMessage(false);
		}
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			setErrorForm(true);
			setErrorEmail(true);
		} else {
			setErrorForm(false);
			setErrorEmail(false);
		}
	};
	const sendEmail = () => {
		let params = {
			name: lastName,
			email: email,
			phone: phone,
			message: message,
		};
		emailjs
			.send('service_0trcweq', 'template_acc4h8r', params, 'UkL1-EhagRtRPBvHL')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const sendMessage = () => {
		if (errorForm === false) {
			console.log(lastName, email, phone, message);
			sendEmail();
			setLastName('');
			setEmail('');
			setPhone('');
			form.reset();
		}
	};

	const Validation = (e) => {
		e.preventDefault();
		fieldsValided();
		console.log(errorForm);
		sendMessage();
	};

	return (
		<form id='form' onSubmit={Validation}>
			<Label
				input
				htmlFor='name'
				title='Nom'
				type='text'
				name={lastName}
				set={setLastName}
				error={errorName}
				class='input'
			/>
			<Label
				input
				htmlFor='email'
				title='Email'
				type='email'
				name={email}
				set={setEmail}
				error={errorEmail}
				class='input'
			/>

			<Label
				input
				htmlFor='phone'
				title='Téléphone'
				type='tel'
				name={phone}
				set={setPhone}
				class='input'
			/>
			<Label
				htmlFor='message'
				title='Message'
				type='text'
				name={message}
				set={setMessage}
				error={errorMessage}
				class='textarea'
			/>
			<input type='submit' value='Send' className='button' />
		</form>
	);
};
export default Form;
