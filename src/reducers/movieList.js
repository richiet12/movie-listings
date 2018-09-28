import Immutable from 'immutable';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../actions/fetchMovieList';
import { FILTER_BY_GENRE } from '../actions/filterMovieList';
import sortDecendingPopularity from '../util/sortDecendingPopularity';

const immutableState = Immutable.Map({
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
	filteredData: Immutable.Map({}),
});

const filterMoviesByGenre = (action, state) => {
	const filteredGenreIds = action.payload.map(id => id.value);
	const allData = state.get('data');
	const allMoviesData = allData.get('results');

	return allMoviesData.filter((movie) => {
		let result = true;

		filteredGenreIds.map((filterId) => {
			result = result && (movie.genre_ids.indexOf(filterId) >= 0);
			return result;
		});

		return result;
	});
};

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_MOVIES_REQUEST:
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map())
				.set('filteredData', Immutable.Map());

		case FETCH_MOVIES_SUCCESS:
			// it looks like the tmdb already sorts on popularity
			// but I have added a backup sort incase the api changes
			if (action.payload.results) {
				action.payload.results.sort(sortDecendingPopularity);
			}
			return state
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map(action.payload))
				.set('filteredData', Immutable.Map(action.payload));

		case FETCH_MOVIES_FAILURE:
			return state
				.set('error', true)
				.set('errorMsg', action.payload)
				.set('data', Immutable.Map())
				.set('filteredData', Immutable.Map());

		case FILTER_BY_GENRE:
			return state
				.set('filteredData', Immutable.Map({ results: filterMoviesByGenre(action, state) }));

		default:
			return state;
	}
}
