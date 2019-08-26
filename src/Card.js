import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
	return (
		<div className='bg-black dib br4 pa3 ma2 o-70 grow'>
			<div className='washed-blue'>
			    <img alt="Developer" src={`https://robohash.org/${id}?200x200`}/>
			    
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	); 
}

export default Card;