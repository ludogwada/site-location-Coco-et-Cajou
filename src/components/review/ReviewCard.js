import React from 'react';

const ReviewCard = (props) => {
	return (
		<section className='reviewCard'>
			<h2 className='reviewCard__name'>{props.name}</h2>
			<h3 className='reviewCard__detail'>{props.date}</h3>
			<h3 className='reviewCard__detail'>
				{props.site} {props.note}
			</h3>
			<span>
				<p className='reviewCard__text'>{props.review}</p>
			</span>
		</section>
	);
};

export default ReviewCard;
