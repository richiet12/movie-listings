// Action - Fetch genres

import axios from 'axios';
import { GENRES_ENDPOINT } from '../config/tmdb';

export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';
export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

const fetchGenresFailure = function (body) {
	return {
		type: FETCH_GENRES_FAILURE,
		payload: body,
	};
};

const fetchGenresRequest = function () {
	return {
		type: FETCH_GENRES_REQUEST,
		payload: {},
	};
};

const fetchGenresSuccess = function (body) {
	return {
		type: FETCH_GENRES_SUCCESS,
		payload: body,
	};
};

export const fetchGenreList = function () {
	return (
		(dispatch) => {
			dispatch(fetchGenresRequest());

			return axios.get(GENRES_ENDPOINT)
				.then((response) => {
					if (response.data) {
						dispatch(fetchGenresSuccess(response.data));
					} else if (response.errors.length >= 0) {
						dispatch(fetchGenresFailure(response));
					}
				})
				.catch(response =>
					dispatch(fetchGenresFailure(response.toString())));
		});
};
