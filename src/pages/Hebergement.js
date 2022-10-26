import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../components/collapse/Collapse';
import Slider from '../components/slider/slider';
import DescriptionBungalows from '../data/description-bungalow.json';
import Price from '../data/tarifs.json';

import Header from '../layout/Header';

const Hebergement = () => {
	const { hebergementId } = useParams();
	const [hebergementData] = useState(DescriptionBungalows);
	const [pricing] = useState(Price);

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
				<section className='hebergement__details'>
					<section className='hebergement__equipement'>
						<Collapse
							title='Equipements'
							description={hebergement.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						/>
					</section>
					<section>
						<section className='hebergement__tarifs'>
							<Collapse
								title='Tarifs'
								text='Minimun 5 nuits'
								frais='Frais de ménage : 40€'
								taxe='Taxe de séjour: 5%'
								description={pricing.map((price, index) => (
									<li className='hebergement__tarifs__detail' key={index}>
										{price.period} : {price.rate}€ / nuit
									</li>
								))}
							/>
						</section>
					</section>
				</section>
			</article>
		</main>
	);
};

export default Hebergement;
