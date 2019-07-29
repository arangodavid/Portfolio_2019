import React from 'react';

const NavBar = props => {
	return (
		<nav className="nav_cont">
			<section className="nav_mobile_toggle">
				<section onClick={props.handleClickMob} className="hamburger_cont">
					<section className="hamburger_dash dash_one"></section>
					<section className="hamburger_dash dash_two"></section>
					<section className="hamburger_dash dash_three"></section>
				</section>
			</section>
			<ul onClick={props.handleClickDesk} className="nav_cont__inner">
				<li className="nav_item home">Home</li>
				<li className="nav_item about">About</li>
				<li className="nav_item technology">Technology</li>
			</ul>
		</nav>
	);
}

export default NavBar;