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
	const genreSuccesState = Immutable.Map({
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
	let header;
	let movieCards;

	describe('fetching', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadingState}
				movies={moviesSuccessState}
				genres={genreSuccesState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			header = wrapper.find('Header').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
		});

		it('has loading text', () => {
			expect(hasLoadingText).toEqual(true);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has no header', () => {
			expect(header).toEqual(false);
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
				genres={genreSuccesState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			header = wrapper.find('Header').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has error component', () => {
			expect(hasErrorComponent).toEqual(true);
		});

		it('has no header', () => {
			expect(header).toEqual(false);
		});

		it('has no movie card list', () => {
			expect(movieCards).toEqual(false);
		});
	});

	describe('succesful movie fetch', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList
				loading={loadedState}
				movies={moviesSuccessState}
				genres={genreSuccesState}
				fetchGenreAndMovieList={mockFetchGenreAndMovieListfn}
			/>);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			header = wrapper.find('Header').length === 1;
			movieCards = wrapper.find('.movie-list').length === 1;
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has header', () => {
			expect(header).toEqual(true);
		});

		it('has movie card list', () => {
			expect(movieCards).toEqual(true);
		});
	});
});
