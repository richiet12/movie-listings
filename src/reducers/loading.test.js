import Immutable from 'immutable';
import loadingListReducer from './loading';
import { FETCH_GENRES_AND_MOVIES_REQUEST, FETCH_GENRES_AND_MOVIES_FAILURE, FETCH_GENRES_AND_MOVIES_SUCCESS } from '../actions/fetchGenreAndMovieLists';

const loadingDefaultImmutableState = Immutable.Map({
	fetching: false,
});

describe('Loading state Reducer', () => {
	it('handles action with unknown type', () => {
		expect(loadingListReducer(undefined, {})).toEqual(loadingDefaultImmutableState);
	});

	it('handles action of type FETCH_GENRES_AND_MOVIES_REQUEST', () => {
		const payload = {};
		const expectedOutput = Immutable.Map({
			fetching: true,
		});
		const action = { type: FETCH_GENRES_AND_MOVIES_REQUEST, payload };
		expect(loadingListReducer(loadingDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_GENRES_AND_MOVIES_SUCCESS', () => {
		const expectedOutput = Immutable.Map({
			fetching: false,
		});
		const action = { type: FETCH_GENRES_AND_MOVIES_SUCCESS };
		expect(loadingListReducer(loadingDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_GENRES_AND_MOVIES_FAILURE', () => {
		const expectedOutput = Immutable.Map({
			fetching: false,
		});
		const action = { type: FETCH_GENRES_AND_MOVIES_FAILURE };
		expect(loadingListReducer(loadingDefaultImmutableState, action)).toEqual(expectedOutput);
	});
});
