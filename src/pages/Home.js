import React from 'react';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import Header from '../layout/Header';
import separateur from '../assets/separateur.png';
import description from '../data/description-bungalow.json';
import { NavLink } from 'react-router-dom';
import user from '../assets/icon-user.svg';
import plan from '../assets/icon-plan.svg';

const Home = () => {
	return (
		<>
			<Header />
			<main className='home'>
				<Banner image='/photos-bungalows/guadeloupe1.jpg' title='paysage' />
				<article className='home__description'>
					<Card photo='/photos-bungalows/exterieur1.jpg' />
					<span className='home__description__text'>
						<p>
							Coco et Cajou Bungalows sont situés dans la campagne de Sainte
							Anne. Les amoureux de la nature seront charmés par ce lieu
							paisible, situé toutefois proche des commodités et à 10 minutes
							des plages.
						</p>
					</span>
					<Card photo='/photos-bungalows/exterieur2.jpg' />
				</article>
				<article className='home__hebergement'>
					<img src={separateur} alt='separateur' />
					<h2 className='home__hebergement__title'>Nos Bungalows</h2>
					<section className='bungalow'>
						{description.map((bungalow) => {
							let id = bungalow.id;
							return (
								<section key={id}>
									<NavLink to={id}>
										<Card photo={bungalow.cover} title={bungalow.title} />
									</NavLink>
									<section className='bungalow__card'>
										<img src={user} alt='user' />
										<p className='bungalow__card__text'>
											{bungalow.couchage} personnes
										</p>
										<img src={plan} alt='surface' />
										<p className='bungalow__card__text'>
											{bungalow.surface} m2
										</p>
									</section>
								</section>
							);
						})}
					</section>
				</article>
			</main>
		</>
	);
};

export default Home;
