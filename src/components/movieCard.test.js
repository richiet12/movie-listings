/* eslint-disable  jsx-a11y/heading-has-content */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import MovieCard from './movieCard';

Enzyme.configure({ adapter: new Adapter() });

describe('Movie card', () => {
	let wrapper;
	const sampleMovie = {
		title: 'The Predator',
		genre_ids: [1, 2, 3],
		poster_path: 'wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
		averageVote: '5.4',
		id: 1,
	};
	let movieTitle;
	let averageVote;
	let posterImg;

	describe('image path provided', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieCard
				title={sampleMovie.title}
				genres={sampleMovie.genre_ids}
				imgPath={sampleMovie.poster_path}
				averageVote={sampleMovie.vote_average}
				key={sampleMovie.id}
			/>);

			movieTitle = wrapper.find('.movie-card__title');
			averageVote = wrapper.find('.movie-card__vote');
			posterImg = wrapper.find('.movie-card__img');
		});

		it('movie card has a title', () => {
			expect(movieTitle.length).toBe(1);
			expect(movieTitle.contains(sampleMovie.title)).toEqual(true);
		});

		it('movie card has an average vote score', () => {
			expect(averageVote.length).toBe(1);
		});

		it('movie card has an img', () => {
			expect(posterImg.length).toBe(1);
		});
	});

	describe('no image provided', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieCard
				title={sampleMovie.title}
				genres={sampleMovie.genre_ids}
				averageVote={sampleMovie.vote_average}
				key={sampleMovie.id}
			/>);
			posterImg = wrapper.find('.movie-card__img');
		});

		it('movie card still has an img', () => {
			expect(posterImg.length).toBe(1);
		});
	});
});
