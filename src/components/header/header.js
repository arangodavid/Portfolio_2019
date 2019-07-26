import React from 'react';
import Nav from '../nav/nav-bar';
import ActiveText from '../active-text/active-text';

const Header = () => {
	return (
		<header className="header_cont">
			<Nav />
			<ActiveText phrases={["Programmer", "Thinker", "Problem Solver"]}>
				<p>Welcome, my name is</p>
				<h1>David Arango</h1>
			</ActiveText>
		</header>
	);
}

export default Header;