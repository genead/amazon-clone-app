import React, { useEffect, useState } from 'react'
import "./ImageSlider.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ImageSlider = ({ images }) => {
	const [index, setIndex] = useState(0);
	// const length = slides.length;

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, images]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);


	return (
		<div className='section'>
			<div className='section__center'>
				{images.map((image, indexImage) => {
					let position = "nextSlide";
					if (indexImage === index) {
						position = "activeSlide";
					}
					if (
						indexImage === index - 1 ||
						(index === 0 && indexImage === images.length - 1)
					) {
						position = "lastSlide";
					}
					return (
						<article className={position} key={indexImage}>
							<img src={image.image} alt="banner-images" className="banner__img" />
						</article>
					)
				})}
				<p className="prev" onClick={() => setIndex(index - 1)}>
					<ArrowBackIosIcon />
				</p>
				<p className="next" onClick={() => setIndex(index + 1)}>
					<ArrowForwardIosIcon />
				</p>
			</div>
		</div>
	)
}

export default ImageSlider


