import Immutable from 'immutable';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../actions/fetchMovieList';
import sortDecendingPopularity from '../util/sortDecendingPopularity';

const immutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_MOVIES_REQUEST:
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map());

		case FETCH_MOVIES_SUCCESS:
			// it looks like the tmdb already sorts on popularity
			// but I have added a backup sort incase the api changes
			if (action.payload.results) {
				action.payload.results.sort(sortDecendingPopularity);
			}
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map(action.payload));

		case FETCH_MOVIES_FAILURE:
			return state
				.set('error', true)
				.set('errorMsg', action.payload)
				.set('data', Immutable.Map());

		default:
			return state;
	}
}