import React from 'react';
import './loading-nav.css';

const LoadingNav = () => {
	return (
		<section className="loading_nav">
			<section className="loading_text_cont">
				<span className="loading_text">Loading</span>
				<span className="loading_dot"></span>
				<span className="loading_dot"></span>
				<span className="loading_dot"></span>
			</section>
		</section>
	);
}

export default LoadingNav;