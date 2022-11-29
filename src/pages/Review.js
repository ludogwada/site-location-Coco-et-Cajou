import React from 'react';
import ReviewCard from '../components/review/ReviewCard';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';
import reviewList from '../data/review.json';

const Review = () => {
	return (
		<>
			<Header />
			<HeaderLeft />
			<main className='review'>
				<h1 className='review__title'>Avis de nos voyageurs</h1>
				{reviewList.map((review) => {
					let id = review.name;
					return (
						<section key={id} className='review__list'>
							<ReviewCard
								name={review.name}
								date={review.date}
								site={review.site}
								note={review.note}
								review={review.review}
							/>
						</section>
					);
				})}
			</main>
			<Footer />
		</>
	);
};

export default Review;
