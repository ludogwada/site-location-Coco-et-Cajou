import React from 'react';

const Button = (props) => {
	return (
		<>
			<button className='button' type='button' onClick={props.action}>
				{props.text}
			</button>
		</>
	);
};

export default Button;
