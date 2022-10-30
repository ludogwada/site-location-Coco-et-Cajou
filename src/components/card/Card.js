import React from 'react';

const Card = (props) => {
	return (
		<article className='card'>
			<img src={props.photo} alt={props.alt} className='card__img' />
		</article>
	);
};

export default Card;
