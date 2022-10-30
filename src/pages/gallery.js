import React, { useState } from 'react';
import Slider from '../components/slider/slider';
import Header from '../layout/Header';
import Bungalows from '../data/photos-bungalows.json';
import HeaderLeft from '../layout/HeaderLeft';

const Gallery = () => {
	const [bungalows] = useState(Bungalows);
	let photo = bungalows.map((bungalow) => bungalow.photo);
	let title = bungalows.map((bungalow) => bungalow.title);

	return (
		<main>
			<HeaderLeft />
			<Header />
			<article className='gallery'>
				<Slider pictures={photo} title={title} gallery />
			</article>
		</main>
	);
};

export default Gallery;
