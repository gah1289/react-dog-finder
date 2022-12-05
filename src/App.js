import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, RedirectFunction } from 'react-router-dom';
import DogList from './DogList';

import whiskey from './images/whiskey.jpg';
import duke from './images/duke.jpg';
import hank from './images/hank.jpg';
import hopper from './images/hopper.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';
import DogDetails from './DogDetails';

function App(props) {
	return (
		<div className="App">
			<Routes>
				<Route path="/dogs" exact="true" element={<DogList dogs={props} />} />
				<Route path="/dogs/:name" exact="true" element={<DogDetails dogs={props} />} />
			</Routes>{' '}
		</div>
	);
}

App.defaultProps = {
	dogs : [
		{
			name  : 'Whiskey',
			age   : 5,
			src   : whiskey,
			facts : [
				'Whiskey loves eating popcorn.',
				'Whiskey is a terrible guard dog.',
				'Whiskey wants to cuddle with you!'
			]
		},
		{
			name  : 'Duke',
			age   : 3,
			src   : duke,
			facts : [
				'Duke believes that ball is life.',
				'Duke likes snow.',
				'Duke enjoys pawing other dogs.'
			]
		},
		{
			name  : 'Perry',
			age   : 4,
			src   : perry,
			facts : [
				'Perry loves all humans.',
				'Perry demolishes all snacks.',
				'Perry hates the rain.'
			]
		},
		{
			name  : 'Tubby',
			age   : 4,
			src   : tubby,
			facts : [
				'Tubby is really stupid.',
				'Tubby does not like walks.',
				'Angelina used to hate Tubby, but claims not to anymore.'
			]
		},
		{
			name  : 'Hopper',
			age   : 5,
			src   : hopper,
			facts : [
				'Hopper loves cheese, Odesza, and the heat vent',
				'Hopper does not like fireworks, lemons, ketchup bottles, or silverware',
				'Hopper just got a new baby brother named Hank. His feelings can be described as lukewarm'
			]
		},
		{
			name  : 'Hank',
			age   : 0.3,
			src   : hank,
			facts : [
				'Hank loves snuggling, helping with his moms homework, and chewing on Hoppers jowls',
				'Hank also goes by Hanky, Honk, and Claymation Hank',
				'Hank hates his crate and the rain'
			]
		}
	]
};

export default App;
