import React from 'react';
import './header.css';
import Nav from '../nav/nav-bar';

class Header extends React.Component {
	render() {
		return (
			<header className="header_cont">
				<Nav />
			</header>
		);
	}
}

export default Header;