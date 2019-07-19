import React from 'react';
import './about.css';
import AboutCard from './about-card';
import Programmer from '../../assets/programmer.jpg';

class About extends React.Component {
	render() {
		return (
			<section className="about">
				<h1>ABOUT</h1>
				<AboutCard 
				title="Who Am I" 
				src={Programmer }
				>
					lorem ipsum lorem ipsum lorem ipsum 
				</AboutCard>
				<AboutCard 
				title="My Accomplishments" 
				src={Programmer }
				>
					lorem ipsum lorem ipsum lorem ipsum 
				</AboutCard>
				<AboutCard 
				title="My Interests" 
				src={Programmer }
				>
					lorem ipsum lorem ipsum lorem ipsum 
				</AboutCard>
			</section>
		)
	}
}

export default About;