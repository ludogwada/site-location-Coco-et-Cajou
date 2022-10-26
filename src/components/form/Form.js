import React, { useState } from 'react';
import Button from '../button/Button';
import Label from '../label/Label';

const Form = () => {
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [errorForm, setErrorForm] = useState(true);
	const form = document.getElementById('form');

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
	const sendMessage = () => {
		if (errorForm === false) {
			console.log(lastName, email, phone, message);
			setLastName('');
			setEmail('');
			setPhone('');
			form.reset();
		}
	};

	const Validation = () => {
		fieldsValided();
		console.log(errorForm);
		sendMessage();
	};

	return (
		<>
			<form id='form'>
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
			</form>
			<Button text='Envoyer' action={Validation} />
		</>
	);
};

export default Form;
