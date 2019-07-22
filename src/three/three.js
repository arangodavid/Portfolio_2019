import React from 'react';
import * as THREE from 'three';

class Three extends React.Component {
	componentDidMount() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
	}


	render() {
		return (
			<section>Test</section>
		)
	}
}

export default Three;