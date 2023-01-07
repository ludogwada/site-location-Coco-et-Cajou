import React from 'react';

const ShopCard = (props) => {
	return (
		<article className='shopCard'>
			<img src={props.photo} alt={props.name} className='shopCard__img' />
			<h2 className='shopCard__title'>{props.name}</h2>
			<h3 className='shopCard__price'>{props.price}</h3>
			<p className='shopCard__text'>{props.description}</p>
		</article>
	);
};

export default ShopCard;
