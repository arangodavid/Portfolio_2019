import React from 'react';
import NavBar from './nav-bar';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.categories = ["Home", "About", "Technology"];
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
			<NavBar 
			categories={this.categories} 
			handleClickDesk={this.handleClickDesk} 
			handleClickMob={this.handleClickMob}
			/>
		)
	}
}
export default Nav;