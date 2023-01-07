import React from 'react';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import Header from '../layout/Header';
import separateur from '../assets/separateur.png';
import description from '../data/description-bungalow.json';
import { Link } from 'react-router-dom';
import user from '../assets/icon-user.svg';
import plan from '../assets/icon-plan.svg';
import HeaderLeft from '../layout/HeaderLeft';
import Footer from '../layout/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<HeaderLeft />
			<main id='home'>
				<article className='home'>
					<Banner image='/photos-bungalows/guadeloupe1.webp' title='paysage' />
					<section className='home__description'>
						<Card
							photo='/photos-bungalows/exterieur1.webp'
							alt='photo exterieur'
						/>
						<span className='home__description__text'>
							<p>
								Coco et Cajou Bungalows sont situés dans la campagne de Sainte
								Anne. Les amoureux de la nature seront charmés par ce lieu
								paisible, situé toutefois proche des commodités et à 10 minutes
								des plages.
							</p>
						</span>
						<Card
							photo='/photos-bungalows/exterieur2.webp'
							alt='photo exterieur'
						/>
					</section>
					<section className='home__hebergement'>
						<img src={separateur} alt='separateur' />
						<h2 className='home__hebergement__title'>Nos Bungalows</h2>
						<section className='bungalow'>
							{description.map((bungalow) => {
								let id = bungalow.id;
								return (
									<section key={id}>
										<h2 className='bungalow__title'>{bungalow.title}</h2>
										<Link to={`/${id}`}>
											<Card photo={bungalow.cover} alt={bungalow.title} />
										</Link>
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
					</section>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Home;
