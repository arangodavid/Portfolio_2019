import React from 'react';
import './loader.css';

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loading: false};
	}

	loading(loading) {
		this.setState({loading: loading});
	}

	componentWillMount() {
		this.loading(true);
	}

	componentDidMount() {
		setTimeout(() => {
			this.loading(false);
			setTimeout(() => {
				document.querySelector('.loader').style.display = 'none';
			}, 1000);
		}, 4000);
	}

	render() {
		return (
			<section className={`loader ${this.state.loading ? 'loader-active' : 'loader-inactive'}`}>
				Test
			</section>
		)
	}
}

export default Loader;