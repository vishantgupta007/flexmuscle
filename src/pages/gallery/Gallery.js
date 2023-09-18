import React from "react";
import './Gallery.css';
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../componenets/Header";

const Gallery = () => {
	const galleryImages = 15;
	const images = [];

	for (let i = 1; i <= galleryImages; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}

	return (
		<>
			<Header title="Our Gallery" image={HeaderImage}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo soluta
				repudiandae voluptas? Nihil quam eligendi et esse facere placeat
				voluptate.
			</Header>
			<section className="gallery">
				<div className="container gallery-container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt="Club Images" />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Gallery;
