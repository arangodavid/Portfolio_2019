import React from 'react';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let navCont = document.querySelector('.hamburger_cont');
		let navItems = document.querySelectorAll('.nav_item');
		navCont.className === "hamburger_cont" ? navCont.className += " isActive" : navCont.className = "hamburger_cont";
		for(let navItem of navItems) {
 			navItem.className === `nav_item ${navItem.innerHTML.toLowerCase()}` ? navItem.className += " isVisible" : navItem.className = `nav_item ${navItem.innerHTML.toLowerCase()}`;
		}
	}
	render() {
		return (
			<nav className="nav_cont">
				<section className="nav_mobile_toggle">
					<section onClick={this.handleClick} className="hamburger_cont">
						<section className="hamburger_dash dash_one"></section>
						<section className="hamburger_dash dash_two"></section>
						<section className="hamburger_dash dash_three"></section>
					</section>
				</section>
				<ul className="nav_cont__inner">
					<li className="nav_item home">Home</li>
					<li className="nav_item about">About</li>
					<li className="nav_item technology">Technology</li>
				</ul>
			</nav>
		)
	}
}
export default Nav;