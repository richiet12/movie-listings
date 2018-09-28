import React from 'react';
import PosterImg from '../components/posterImg';

const AlbumCard = props => (
	<li className="movie-card clearfix">
		<PosterImg className="movie-card__img" path={props.imgPath} alt={props.title} />
		<div className="movie-card__info">
			<h3 className="heading heading--3 movie-card__title">{props.title}</h3>
			<p className="movie-card__vote">Average Vote {props.averageVote}</p>
			{props.genres.map(genre => <span key={genre} className="movie-card__genre">{genre}</span>)}
		</div>
	</li>
);

export default AlbumCard;
