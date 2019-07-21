import React from 'react';
import './nav-bar.css';

class Nav extends React.Component {
	render() {
		return (
			<nav className="nav_cont">
				<ul className="nav_cont__inner">
					<li className="nav_item">Home</li>
					<li className="nav_item">About</li>
					<li className="nav_item">Interests</li>
				</ul>
			</nav>
		)
	}
}

export default Nav;