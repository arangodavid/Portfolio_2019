import React from 'react';
import './gallery.css';
import GallerySlider from '../gallerySlider/gallery-slider';

const interests = [
	{
		mainImg: "../gallery/assets/main-one.jpg", 
		mainDesc: "Images of ...",
		subImg: ["../gallery/assets/main-one-sub.jpg", "../gallery/assets/main-one-sub.jpg", "../gallery/assets/main-one-sub.jpg"],
		subImgDesc: "Images of..."
	}, 
	{
		mainImg: "../gallery/assets/main-two.jpg", 
		mainDesc: "Images of ...",
		mainSubImg: ["../gallery/assets/main-two-sub.jpg", "../gallery/assets/main-two-sub.jpg", "../gallery/assets/main-two-sub.jpg"],
		subImgDesc: "Images of..."
	}, 
	{
		mainImg: "./assets/main-three.jpg", 
		mainDesc: "Images of ...",
		mainSubImg: ["../gallery/assets/main-three-sub.jpg", "../gallery/assets/main-three-sub.jpg", "../gallery/assets/main-three-sub.jpg"],
		subImgDesc: "Images of..."
	}
];

class Gallery extends React.Component {

	initGallery(interests) {
		
	}	

	render() {
		return (
			<section className="gallery_root">
	
			</section>
		);
	}
}

export default Gallery;