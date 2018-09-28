import { fetchGenreList } from './fetchGenreList';
import { fetchMovieList } from './fetchMovieList';

export const FETCH_GENRES_AND_MOVIES_FAILURE = 'FETCH_GENRES_AND_MOVIES_FAILURE';
export const FETCH_GENRES_AND_MOVIES_REQUEST = 'FETCH_GENRES_AND_MOVIES_REQUEST';
export const FETCH_GENRES_AND_MOVIES_SUCCESS = 'FETCH_GENRES_AND_MOVIES_SUCCESS';

const fetchGenresAndMoviesFailure = function (body) {
	return {
		type: FETCH_GENRES_AND_MOVIES_FAILURE,
		payload: body,
	};
};

const fetchGenresAndMoviesRequest = function () {
	return {
		type: FETCH_GENRES_AND_MOVIES_REQUEST,
		payload: {},
	};
};

const fetchGenresAndMoviesSuccess = function () {
	return {
		type: FETCH_GENRES_AND_MOVIES_SUCCESS,
		payload: {},
	};
};

export const fetchGenreAndMovieList = function () {
	return (
		(dispatch) => {
			dispatch(fetchGenresAndMoviesRequest());

			return Promise.all([
				dispatch(fetchGenreList()),
				dispatch(fetchMovieList()),
			]).then(() => {
				dispatch(fetchGenresAndMoviesSuccess());
			}).catch(() => {
				dispatch(fetchGenresAndMoviesFailure());
			});
		}
	);
};
