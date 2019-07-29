import React from 'react';
// import Loader from '../loader/loader';
import Header from '../header/header';
import About from '../about/about';
import Technology from '../technology/technology';
import Footer from '../footer/footer';
import Parallax from '../parallax/parallax';

const Root = () => {
	return (
		<section className="root">
			<Header />
			<Parallax />
			<About />
			<Parallax />
			<Technology />
			<Parallax />
			<Footer />
		</section>
	)
}
export default Root;