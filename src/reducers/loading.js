// Reducer - Loading
// handle request, failures and success actions
// so that we can determine 'loading' state

import Immutable from 'immutable';
import { FETCH_GENRES_AND_MOVIES_REQUEST, FETCH_GENRES_AND_MOVIES_FAILURE, FETCH_GENRES_AND_MOVIES_SUCCESS } from '../actions/fetchGenreAndMovieLists';

const immutableState = Immutable.Map({
	fetching: false,
});

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_GENRES_AND_MOVIES_REQUEST:
			return state.set('fetching', true);

		case FETCH_GENRES_AND_MOVIES_SUCCESS:
			return state.set('fetching', false);

		case FETCH_GENRES_AND_MOVIES_FAILURE:
			return state.set('fetching', false);

		default:
			return state;
	}
}
