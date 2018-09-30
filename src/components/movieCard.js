// Component - Movie card
// Render movie cards with movie info and poster image

import React from 'react';
import PosterImg from '../components/posterImg';

const MovieCard = props => (
	<li className="movie-card clearfix">
		<PosterImg className="movie-card__img" path={props.imgPath} alt={props.title} />
		<div className="movie-card__info">
			<h3 className="heading heading--3 movie-card__title">{props.title}</h3>
			<p className="movie-card__vote">Rating: {props.averageVote}</p>
			<p className="movie-card__popularity">Popularity: {props.popularity}</p>
			<p> Genres:
				{props.genres.map(genre => <span key={genre} className="movie-card__genre">{genre}</span>)}
			</p>
		</div>
	</li>
);

export default MovieCard;
