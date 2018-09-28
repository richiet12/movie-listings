import Immutable from 'immutable';
import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS } from '../actions/fetchGenreList';

const immutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_GENRES_REQUEST:
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map());

		case FETCH_GENRES_SUCCESS:
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map(action.payload));

		case FETCH_GENRES_FAILURE:
			return state
				.set('error', true)
				.set('errorMsg', action.payload)
				.set('data', Immutable.Map());

		default:
			return state;
	}
}
