import { useState } from 'react';
import VectorLeft from '../../assets/VectorLeft.svg';
import VectorRight from '../../assets/VectorRight.svg';

function Slider(props) {
	const { pictures, title } = props;
	const [activeIndex, setActiveIndex] = useState(0);

	const prevImgIndex = activeIndex ? activeIndex - 1 : pictures.length - 1;
	const nextImgIndex =
		activeIndex === pictures.length - 1 ? 0 : activeIndex + 1;

	function OnePicture() {
		return props.pictures.length === 1 ? 'slider__hiddenArrow' : '';
	}

	return (
		<section className='slider'>
			<div className='slider__container'>
				<img
					onClick={() => setActiveIndex(prevImgIndex)}
					src={VectorLeft}
					alt='left arrow'
					className={`slider__leftArrow ${OnePicture()}`}
				/>
				<img
					src={pictures[activeIndex]}
					alt={title[activeIndex]}
					className='slider__image'
				/>
				<img
					onClick={() => setActiveIndex(nextImgIndex)}
					src={VectorRight}
					alt='right arrow'
					className={`slider__rightArrow ${OnePicture()}`}
				/>
				{/* <span className='slider__nbPhoto'>
					{activeIndex + 1} / {pictures.length}
				</span> */}
			</div>
			{props.gallery ? (
				<span className='slider__title'>
					<h1>{title[activeIndex]}</h1>
				</span>
			) : null}
		</section>
	);
}

export default Slider;
