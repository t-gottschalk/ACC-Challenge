import React from 'react';
import './Card.css';

const Card = (props) => {
	return (
		<div onClick={() => props.handleChange(props.id)}>
				<img 
					className="card-container" 
					src={props.image} 
					alt={props.name} 
					key={props.id}
				/>
		</div>
	);
}

export default Card;
