import React from 'react';
import  Card from './Card';

const CardList = ({dev}) => {
	return (
			<div>
				{dev.map((user,i) => {
			return (
			<Card 
			key={i} 
			id={dev[i].id} 
			name={dev[i].name} 
			email={dev[i].email}
			/>
		);
		})
		}
		</div>
	);
}
export default CardList;