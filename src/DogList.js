import React from 'react';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { v4 as uuid } from 'uuid';
import dogFinder from './images/dog-finder.jpg';

function DogList(props) {
	const { dogs } = props.dogs;

	return (
		<div>
			<Nav dogs={dogs} />
			<h1>Welcome to Dog Finder!</h1>
			<img src={dogFinder} />
		</div>
	);
}

export default DogList;
