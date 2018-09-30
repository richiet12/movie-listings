import Immutable from 'immutable';
import genreListReducer from './genreList';
import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS } from '../actions/fetchGenreList';

const genreDefaultImmutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

describe('Genre List Reducer', () => {
	it('handles action with unknown type', () => {
		expect(genreListReducer(undefined, {})).toEqual(genreDefaultImmutableState);
	});

	it('handles action of type FETCH_GENRES_REQUEST', () => {
		const payload = {};
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_GENRES_REQUEST, payload };
		expect(genreListReducer(genreDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_GENRES_SUCCESS', () => {
		const payload = {
			data: {
				results: [

				],
			},
		};
		const expectedOutput = Immutable.Map({
			error: false,
			errorMsg: '',
			data: Immutable.Map({ data: { results: [] } }),
		});
		const action = { type: FETCH_GENRES_SUCCESS, payload };
		expect(genreListReducer(genreDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_GENRES_FAILURE', () => {
		const payload = 'an error occurred';
		const expectedOutput = Immutable.Map({
			error: true,
			errorMsg: 'an error occurred',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_GENRES_FAILURE, payload };
		expect(genreListReducer(genreDefaultImmutableState, action)).toEqual(expectedOutput);
	});
});
