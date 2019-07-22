import React from 'react';
import './header.css';
import Nav from '../nav/nav-bar';
import ActiveText from '../active-text/active-text';

class Header extends React.Component {
	render() {
		return (
			<header className="header_cont">
				<Nav />
				<ActiveText phrases="programmer">
					Welcome I am a
				</ActiveText>
			</header>
		);
	}
}

export default Header;