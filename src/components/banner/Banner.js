import React from 'react';

const Banner = (props) => {
	return (
		<article className='banner'>
			<img src={props.image} alt={props.title} className='banner__img' />
		</article>
	);
};

export default Banner;
