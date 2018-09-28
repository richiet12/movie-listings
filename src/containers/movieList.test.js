import Immutable from 'immutable';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MovieList } from './movieList';

Enzyme.configure({ adapter: new Adapter() });

describe('Movie list container', () => {
	const mockFetchMovieListfn = jest.fn();
	const loadingState = Immutable.Map({
		fetching: true,
		error: false,
		errorMsg: '',
		data: Immutable.Map({}),
	});
	const errorState = Immutable.Map({
		fetching: false,
		error: true,
		errorMsg: 'x went wrong',
		data: Immutable.Map({}),
	});
	const successState = Immutable.Map({
		fetching: false,
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
						27,
						878,
						28,
						35,
					],
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
			wrapper = shallow(<MovieList movies={loadingState} fetchMovieList={mockFetchMovieListfn} />);
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

	describe('error', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList movies={errorState} fetchMovieList={mockFetchMovieListfn} />);
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

	describe('real album data', () => {
		beforeEach(() => {
			wrapper = shallow(<MovieList movies={successState} fetchMovieList={mockFetchMovieListfn} />);
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
