import React from 'react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	scroll(elementToView) {
		elementToView.scrollIntoView({behavior: "smooth"});
	}

	handleClick(e) {
		let tabClicked = e.target.innerHTML.toLowerCase(),
			elementToView;
		switch(tabClicked) {
			case 'home':
				elementToView = document.querySelector(".header_cont");
				this.scroll(elementToView);
			break;
			case 'about':
				elementToView = document.querySelector(".about_cont");
				this.scroll(elementToView);
			break;
			case 'technology':
				elementToView = document.querySelector(".technology_blocks");
				this.scroll(elementToView);
			break;
		}
	} 

	render() {
		return (
			<nav className="nav_cont">
				<section className="nav_mobile_toggle">
					<section onClick={this.props.handleClickMob} className="hamburger_cont">
						<section className="hamburger_dash dash_one"></section>
						<section className="hamburger_dash dash_two"></section>
						<section className="hamburger_dash dash_three"></section>
					</section>
				</section>
				<ul onClick={this.props.handleClickDesk} className="nav_cont__inner">
						{
							this.props.categories.map((category, i) => { 
								return <li key={`${category} + _${i}`} onClick={this.handleClick} className={`nav_item ${category.toLowerCase()}`}>{category}</li>
							})
						}
				</ul>
			</nav>
		);
	}
}

export default NavBar;