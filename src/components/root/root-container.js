import React from 'react';
// import Loader from '../loader/loader';
import Header from '../header/header';
import About from '../about/about';
import Hobbies from '../hobbies/hobbies';
import Footer from '../footer/footer';
import Parallax from '../parallax/parallax';
import Woods from '../../assets/woods.jpg';
import './root.css';

class Root extends React.Component {
	render() {
		return (
			<section className="root">
				<Header />
				<Parallax src={Woods}/>
				<About />
				<Parallax src={Woods}/>
				<Hobbies />
				<Parallax src={Woods}/>
				<Footer />
			</section>
		)
	}
}
export default Root;