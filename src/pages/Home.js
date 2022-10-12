import React, { useState } from 'react';
import Slider from '../components/slider/slider';
import Header from '../layout/Header';
import Bungalows from '../data/bungalows.json';

const Home = () => {
	const [bungalows] = useState(Bungalows);
	let cover = bungalows.map((bungalow) => bungalow.cover);
	let title = bungalows.map((bungalow) => bungalow.title);

	return (
		<>
			<Header page='home' />
			<main>
				<section>
					<Slider pictures={cover} title={title} />
				</section>
			</main>
		</>
	);
};

export default Home;
