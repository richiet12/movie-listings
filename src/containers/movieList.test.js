import Immutable from 'immutable';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MovieList } from './movieList';

Enzyme.configure({ adapter: new Adapter() });

describe('Movie list container', () => {
	const mockFetchGenreAndMovieListfn = jest.fn();
	const loadingState = Immutable.Map({
		fetching: true,
	});
	const loadedState = Immutable.Map({
		fetching: false,
	});
	const moviesErrorState = Immutable.Map({
		error: true,
		errorMsg: 'x went wrong',
		data: Immutable.Map({}),
		filteredData: Immutable.Map({}),
	});
	const moviesSuccessState = Immutable.Map({
		error: false,
		errorMsg: '',
		data: Immutable.Map({
			results: [
				{
					id: 346910,
					vote_average: 5.4,
					title: 'The Predator',
					poster_path: 'wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
					genre_ids: [
						28,
					],
				},
			],
		}),
		filteredData: Immutable.Map({
			results: [
				{
					id: 346910,
					vote_average: 5.4,
					title: 'The Predator',
					poster_path: 'wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
					genre_ids: [
						28,
					],
				},
			],
		}),
	});
	const moviesSuccessNoResultsState = Immutable.Map({
		error: false,
		errorMsg: '',
		data: Immutable.Map({
			results: [],
		}),
		filteredData: Immutable.Map({
			results: [],
		}),
	});
	const genreSuccessState = Immutable.Map({
		error: false,
		errorMsg: '',
		data: Immutable.Map({
			genres: [
				{
					id: 28,
					name: 'Action',
				},
			],
		}),
	});
	let wrapper;
	let hasLoadingText;
	let hasErrorComponent;
	let movieCards;
	let hasNoResultsText;

	describe('fetching', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadingState}
				movies={moviesSuccessState}
				genres={genreSuccessState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
		});

		it('has loading text', () => {
			expect(hasLoadingText).toEqual(true);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has no movie card list', () => {
			expect(movieCards).toEqual(false);
		});
	});

	describe('error with move fetch', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadedState}
				movies={moviesErrorState}
				genres={genreSuccessState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
			hasNoResultsText = wrapper.contains('no results for this selection');
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has error component', () => {
			expect(hasErrorComponent).toEqual(true);
		});

		it('has no movie card list', () => {
			expect(movieCards).toEqual(false);
		});

		it('has no no-results text', () => {
			expect(hasNoResultsText).toEqual(false);
		});
	});

	describe('succesful movie fetch', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadedState}
				movies={moviesSuccessState}
				genres={genreSuccessState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
			hasNoResultsText = wrapper.contains('no results for this selection');
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has movie card list', () => {
			expect(movieCards).toEqual(true);
		});

		it('has no no-results text', () => {
			expect(hasNoResultsText).toEqual(false);
		});
	});

	describe('no movies in filtered data', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadedState}
				movies={moviesSuccessNoResultsState}
				genres={genreSuccessState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
			hasNoResultsText = wrapper.contains('no results for this selection');
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has no movie card list', () => {
			expect(movieCards).toEqual(false);
		});

		it('has no-results text', () => {
			expect(hasNoResultsText).toEqual(true);
		});
	});
});
