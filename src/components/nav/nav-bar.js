import React from 'react';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickMob = this.handleClickMob.bind(this);
		this.handleClickDesk = this.handleClickDesk.bind(this);
	}
	handleClickMob() {
		let mobBttn = document.querySelector(".hamburger_cont"),
			navItems = document.querySelectorAll(".nav_item");
		mobBttn.className === "hamburger_cont" ? mobBttn.className += " isActive" : mobBttn.className = "hamburger_cont";
		for(let navItem of navItems) {
 			navItem.className === `nav_item ${navItem.innerHTML.toLowerCase()}` ? navItem.className += " isVisibleMob" : navItem.className = `nav_item ${navItem.innerHTML.toLowerCase()}`;
		}
	}

	checkClick(target) {
		let deskBttn =document.querySelector(".nav_cont__inner");
		if(target.tagName.toLowerCase() === 'ul') {
			deskBttn.className === "nav_cont__inner" ? deskBttn.className += " isVisibleDesk" : deskBttn.className = "nav_cont__inner";
		};
	}

	handleClickDesk(e) {
		let winSize = window.matchMedia('(min-width: 800px)');
		if(winSize.matches) {
			this.checkClick(e.target);
		}
	}
	render() {
		return (
			<nav className="nav_cont">
				<section className="nav_mobile_toggle">
					<section onClick={this.handleClickMob} className="hamburger_cont">
						<section className="hamburger_dash dash_one"></section>
						<section className="hamburger_dash dash_two"></section>
						<section className="hamburger_dash dash_three"></section>
					</section>
				</section>
				<ul onClick={this.handleClickDesk} className="nav_cont__inner">
					<li className="nav_item home">Home</li>
					<li className="nav_item about">About</li>
					<li className="nav_item technology">Technology</li>
				</ul>
			</nav>
		)
	}
}
export default Nav;