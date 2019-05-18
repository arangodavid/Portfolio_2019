import React from 'react';
import Flashy from '../flashy/flashy';
import Header from '../header/header';
import './root.css';

class Root extends React.Component {
	render() {
		return (
			<section className="root">
				<Flashy />
				<Header />
			</section>
		)
	}
}

export default Root;