import React from 'react';
// import Loader from '../loader/loader';
import Header from '../header/header';
import About from '../about/about';
import Hobbies from '../hobbies/hobbies';
import Footer from '../footer/footer';
import Parallax from '../parallax/parallax';

class Root extends React.Component {
	render() {
		return (
			<section className="root">
				<Header />
				<Parallax />
				<About />
				<Parallax />
				<Hobbies />
				<Parallax />
				<Footer />
			</section>
		)
	}
}
export default Root;