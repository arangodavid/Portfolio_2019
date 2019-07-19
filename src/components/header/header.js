import React from 'react';
import './header.css';
import Video from '../../assets/inkTwo.mp4';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<video className="video_player" autoPlay muted>
					<source src={Video} type="video/mp4"/>
				</video>
			</header>
		);
	}
}

export default Header;