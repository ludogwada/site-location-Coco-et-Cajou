import arrow from '../../assets/Vector.svg';
import arrowUp from '../../assets/VectorUp.svg';
import { useState } from 'react';

function Collapse(props) {
	const { title, description, text, frais, taxe } = props;
	const [expanded, setExpanded] = useState(false);

	return (
		<article className='collapse'>
			<header
				className='collapse__title'
				onClick={() => setExpanded(!expanded)}>
				<h2 className='collapse__title__text'>{title}</h2>
				<span onClick={() => setExpanded(!expanded)}>
					{expanded ? (
						<img
							src={arrow}
							alt='arrow down'
							className='collapse__title__arrowDown'
						/>
					) : (
						<img
							src={arrowUp}
							alt='arrow up'
							className='collapse__title__arrowUp'
						/>
					)}
				</span>
			</header>
			<section className={expanded ? 'expanded' : 'hidden'}>
				<div className='collapse__description'>
					<h3>{text}</h3>
					<p>{description}</p>
					<h4>{frais}</h4>
					<h5>{taxe}</h5>
				</div>
			</section>
		</article>
	);
}

export default Collapse;
