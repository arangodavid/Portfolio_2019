import React from 'react';
import './hobbies.css';
import Hobby from './hobby';

class Hobbies extends React.Component {
	render() {
		return (
			<section className="hobbies">
				<h1>HOBBIES</h1>
				<section className="hobby">
					<Hobby />
					<Hobby />
					<Hobby />
				</section>
			</section>
		)
	}
}

export default Hobbies;