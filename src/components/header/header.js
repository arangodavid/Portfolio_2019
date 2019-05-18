import React from 'react';
import HeaderImg from './header-img';
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<HeaderImg />
			</header>
		);
	}
}

export default Header;