import Immutable from 'immutable';
import movieListReducer from './movieList';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../actions/fetchMovieList';
import { FILTER_BY_GENRE, FILTER_BY_RATING } from '../actions/filterMovieList';

const movieDefaultImmutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
	filteredData: Immutable.Map({}),
	genreFilter: [],
	ratingFilter: 3,
});

const unsortedResults = [
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
	{
		title: 'The Nun',
		genre_ids: [27, 9648, 53],
		popularity: 200,
		vote_average: 4,
	},
];

const sortedResults = [
	{
		title: 'The Nun',
		genre_ids: [27, 9648, 53],
		popularity: 200,
		vote_average: 4,
	},
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
];

const filteredResultsOnAction = [
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
];

const filteredResultsOnRating = [
	{
		title: 'The Nun',
		genre_ids: [27, 9648, 53],
		popularity: 200,
		vote_average: 4,
	},
];

const moviePopulatedImmutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({ results: unsortedResults }),
	filteredData: Immutable.Map({ results: unsortedResults }),
	genreFilter: [],
	ratingFilter: 3,
});

describe('Movie List Reducer', () => {
	it('handles action with unknown type', () => {
		expect(movieListReducer(undefined, {})).toEqual(movieDefaultImmutableState);
	});

	it('handles action of type FETCH_MOVIES_REQUEST', () => {
		const payload = {};
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({}),
			filteredData: Immutable.Map({}),
			genreFilter: [],
			ratingFilter: 3,
		});
		const action = { type: FETCH_MOVIES_REQUEST, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_MOVIES_SUCCESS', () => {
		const payload = {
			results: unsortedResults,
		};
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({ results: sortedResults }),
			filteredData: Immutable.Map({ results: sortedResults }),
			genreFilter: [],
			ratingFilter: 3,
		});
		const action = { type: FETCH_MOVIES_SUCCESS, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_MOVIES_FAILURE', () => {
		const payload = 'an error occurred';
		const expectedOutput = Immutable.Map({
			error: true,
			errorMsg: 'an error occurred',
			data: Immutable.Map({}),
			filteredData: Immutable.Map({}),
			genreFilter: [],
			ratingFilter: 3,
		});
		const action = { type: FETCH_MOVIES_FAILURE, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FILTER_BY_GENRE', () => {
		const payload = [
			{
				value: 28,
				label: 'Action',
			},
		];
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({ results: unsortedResults }),
			filteredData: Immutable.Map({ results: filteredResultsOnAction }),
			genreFilter: [{ label: 'Action', value: 28 }],
			ratingFilter: 3,
		});
		const action = { type: FILTER_BY_GENRE, payload };
		expect(movieListReducer(moviePopulatedImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FILTER_BY_RATING', () => {
		const payload = 4;
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({ results: unsortedResults }),
			filteredData: Immutable.Map({ results: filteredResultsOnRating }),
			genreFilter: [],
			ratingFilter: 4,
		});
		const action = { type: FILTER_BY_RATING, payload };
		expect(movieListReducer(moviePopulatedImmutableState, action)).toEqual(expectedOutput);
	});
});
