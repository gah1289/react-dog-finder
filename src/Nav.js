import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Nav.css';

function Nav({ dogs }) {
	return (
		<nav className="NavBar">
			{dogs.map((dog) => (
				<div className="nav-link">
					<Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
				</div>
			))}
		</nav>
	);
}

export default Nav;
