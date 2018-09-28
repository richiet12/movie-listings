import Immutable from 'immutable';
import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS } from '../actions/fetchGenreList';

const immutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

const renameKeys = (keysMap, obj) => Object
	.keys(obj)
	.reduce((acc, key) => ({
		...acc,
		...{ [keysMap[key] || key]: obj[key] },
	}), {});

const keysMap = {
	id: 'value',
	name: 'label',
};
let reNamedPayload;

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_GENRES_REQUEST:
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map());

		case FETCH_GENRES_SUCCESS:
			// it looks like the tmdb already sorts on popularity
			// but I have added a backup sort incase the api changes
			reNamedPayload = action.payload;
			if (reNamedPayload.genres) {
				reNamedPayload.genres = reNamedPayload.genres.map(genre =>
					renameKeys(keysMap, genre));
			}

			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map(reNamedPayload));

		case FETCH_GENRES_FAILURE:
			return state
				.set('error', true)
				.set('errorMsg', action.payload)
				.set('data', Immutable.Map());

		default:
			return state;
	}
}
