import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import Video from '../components/video/Video';

const Cover = () => {
	const navigate = useNavigate();
	const redirection = () => {
		navigate('/home');
	};
	return (
		<>
			<main className='cover'>
				<section className='video'>
					<Video />
				</section>
				<Button action={redirection} text='Entrer' />
			</main>
		</>
	);
};

export default Cover;
