import React from 'react';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';
import Footer from '../layout/Footer';
import ShopCard from '../components/shopCard/ShopCard';
import boutique from '../data/boutique.json';

const Shop = () => {
	return (
		<>
			<Header />
			<HeaderLeft />
			<main>
				<article className='shop'>
					<h1>La boutique</h1>
					<section className='shop__cards'>
						{boutique.map((object, index) => {
							let id = index;
							return (
								<section key={id}>
									<ShopCard
										photo={object.photo}
										name={object.name}
										description={object.description}
										price={object.price}
									/>
								</section>
							);
						})}
					</section>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Shop;
