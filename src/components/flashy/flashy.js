import React from 'react';
import './flashy.css';
import LoadingNav from '../loadingNav/loading-nav';
import Gallery from '../gallery/gallery';

const visible = {
	display: 'block'
}

const hidden = {
	display: 'none'
}

class Flashy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	loading() {
		this.setState({loading: true});
	}

	componentWillMount() {
		this.loading();
	}

	render() {
		return (
			<section style={!this.state.loading ? hidden : visible} className="flashy_on">
				<LoadingNav />
				<Gallery />
			</section>
		)
	}
}

export default Flashy;