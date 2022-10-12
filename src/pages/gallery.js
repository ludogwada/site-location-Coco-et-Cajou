import React, { useState } from 'react';
import Slider from '../components/slider/slider';
import Header from '../layout/Header';
import Bungalows from '../data/bungalows.json';

const Gallery = () => {
	const [bungalows] = useState(Bungalows);
	let photo = bungalows.map((bungalow) => bungalow.photo);
	let title = bungalows.map((bungalow) => bungalow.title);

	return (
		<>
			<Header page='home' />
			<main className='home'>
				<Slider pictures={photo} title={title} gallery />
			</main>
		</>
	);
};

export default Gallery;
