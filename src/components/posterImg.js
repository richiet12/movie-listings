import React from 'react';
import { IMAGE_ENDPOINT } from '../config/tmdb';
import missingImgPath from '../imgs/missing.jpg';

const Img = (props) => {
	let imgSrc = missingImgPath;

	if (props.path) {
		imgSrc = IMAGE_ENDPOINT + props.path;
	}
	return <img className={props.className} src={imgSrc} alt={props.alt} />;
};

export default Img;
