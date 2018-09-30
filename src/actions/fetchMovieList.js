// Action - Fetch movies

import axios from 'axios';
import { MOVIES_ENDPOINT } from '../config/tmdb';

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

const fetchMoviesFailure = function (body) {
	return {
		type: FETCH_MOVIES_FAILURE,
		payload: body,
	};
};

const fetchMoviesRequest = function () {
	return {
		type: FETCH_MOVIES_REQUEST,
		payload: {},
	};
};

const fetchMoviesSuccess = function (body) {
	return {
		type: FETCH_MOVIES_SUCCESS,
		payload: body,
	};
};

export const fetchMovieList = function () {
	return (
		(dispatch) => {
			dispatch(fetchMoviesRequest());

			return axios.get(MOVIES_ENDPOINT)
				.then((response) => {
					if (response.data) {
						dispatch(fetchMoviesSuccess(response.data));
					} else if (response.errors.length >= 0) {
						dispatch(fetchMoviesFailure(response));
					}
				})
				.catch(response =>
					dispatch(fetchMoviesFailure(response.toString())));
		});
};
