import React from 'react';
import Button from '../components/button/Button';
import Video from '../components/video/Video';
import Header from '../layout/Header';

const Cover = () => {
	return (
		<>
			<main className='cover'>
				<section className='video'>
					<Video />
				</section>
				<Button link='home' />
			</main>
		</>
	);
};

export default Cover;
