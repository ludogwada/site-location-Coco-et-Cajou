import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Button = (props) => {
	const navigate = useNavigate();
	const redirection = () => {
		navigate('/home');
	};
	return (
		<>
			<button className='button' type='button' onClick={redirection}>
				Entrance
			</button>
		</>
	);
};

export default Button;
