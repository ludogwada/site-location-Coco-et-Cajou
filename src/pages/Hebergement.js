import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../components/collapse/Collapse';
import Slider from '../components/slider/slider';
import DescriptionBungalows from '../data/description-bungalow.json';
import Header from '../layout/Header';

const Hebergement = () => {
	const { hebergementId } = useParams();
	const [hebergementData] = useState(DescriptionBungalows);

	let hebergement = hebergementData.find(
		(hebergement) => hebergement.id === hebergementId
	);
	if (!hebergement) {
		return <Navigate to='*' />;
	}

	return (
		<main>
			<Header />
			<article className='hebergement'>
				<h1>{hebergement.title}</h1>
				<section className='hebergement__description'>
					<Slider pictures={hebergement.pictures} title={hebergement.title} />
					<h2 className='hebergement__description__text'>
						{hebergement.description}
					</h2>
				</section>
				<section className='hebergement__equipement'>
					<Collapse
						title='Equipement'
						description={hebergement.equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					/>
				</section>
			</article>
		</main>
	);
};

export default Hebergement;
