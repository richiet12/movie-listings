import Immutable from 'immutable';
import movieListReducer from './movieList';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../actions/fetchMovieList';

const movieDefaultImmutableState = Immutable.Map({
	fetching: false,
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

describe('Movie List Reducer', () => {
	it('handles action with unknown type', () => {
		expect(movieListReducer(undefined, {})).toEqual(movieDefaultImmutableState);
	});

	it('handles action of type FETCH_MOVIES_REQUEST', () => {
		const payload = {};
		const expectedOutput = Immutable.Map({
			fetching: true,
			error: false,
			errorMsg: '',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_MOVIES_REQUEST, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_MOVIES_SUCCESS', () => {
		const payload = {
			data: {
				results: [

				],
			},
		};
		const expectedOutput = Immutable.Map({
			fetching: false,
			error: false,
			errorMsg: '',
			data: Immutable.Map({ data: { results: [] } }),
		});
		const action = { type: FETCH_MOVIES_SUCCESS, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_MOVIES_FAILURE', () => {
		const payload = 'an error occured';
		const expectedOutput = Immutable.Map({
			fetching: false,
			error: true,
			errorMsg: 'an error occured',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_MOVIES_FAILURE, payload };
		expect(movieListReducer(movieDefaultImmutableState, action)).toEqual(expectedOutput);
	});
});
