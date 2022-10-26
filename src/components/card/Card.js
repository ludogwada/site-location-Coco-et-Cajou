import React from 'react';

const Card = (props) => {
	return (
		<article className='card'>
			<img src={props.photo} alt={props.title} className='card__img' />
			<h2>{props.title}</h2>
		</article>
	);
};

export default Card;
