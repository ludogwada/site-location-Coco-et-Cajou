import React from 'react';

const Label = (props) => {
	return (
		<>
			<label htmlFor={props.htmlFor} className='label'>
				{props.input ? (
					<input
						type={props.type}
						name={props.name}
						onChange={(e) => props.set(e.target.value)}
						required={props.required}
						placeholder={props.title}
						className={props.class}
					/>
				) : (
					<textarea
						type={props.type}
						name={props.name}
						onChange={(e) => props.set(e.target.value)}
						required={props.required}
						placeholder={props.title}
						className={props.class}
						maxLength='200'
					/>
				)}
			</label>
			{props.error ? (
				<span className='errorMessage'> {props.title} incorrecte</span>
			) : null}
		</>
	);
};

export default Label;
