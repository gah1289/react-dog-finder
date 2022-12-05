import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './DogDetails.css';
import { useParams, Link } from 'react-router-dom';

function DogDetails({ dogs }) {
	const { name } = useParams();
	const dog = dogs.dogs.find((dog) => {
		return dog.name === name;
	});
	const { age, src, facts } = dog;
	return (
		<div>
			<div className="DogDetails">
				<div className="img">
					<img src={`${src}`} />
				</div>{' '}
				<div className="details">
					<h2>{name}</h2>
					<p>Age: {age}</p>
					<ul> {facts.map((fact) => <li key={uuid()}>{fact}</li>)}</ul>
				</div>
			</div>
			<Link to={`/dogs`}>Go Back</Link>
		</div>
	);
}

export default DogDetails;
