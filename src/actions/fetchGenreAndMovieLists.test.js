import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { GENRES_ENDPOINT, MOVIES_ENDPOINT } from '../config/tmdb';
import { FETCH_GENRES_AND_MOVIES_REQUEST, FETCH_GENRES_AND_MOVIES_SUCCESS, fetchGenreAndMovieList } from '../actions/fetchGenreAndMovieLists';
import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS } from '../actions/fetchGenreList';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from '../actions/fetchMovieList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch genre and movie lists async actions', () => {
	const mockAxios = new MockAdapter(axios);
	const data = { response: true };
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('creates FETCH_GENRES_AND_MOVIES_REQUEST and FETCH_GENRES_AND_MOVIES_SUCCESS when fetching genre and movie lists returns', () => {
		mockAxios.onGet(MOVIES_ENDPOINT).reply(200, data);
		mockAxios.onGet(GENRES_ENDPOINT).reply(200, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_GENRES_AND_MOVIES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_GENRES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_MOVIES_REQUEST,
			},
			{
				type: FETCH_GENRES_SUCCESS,
				payload: data,
			},
			{
				type: FETCH_MOVIES_SUCCESS,
				payload: data,
			},
			{
				type: FETCH_GENRES_AND_MOVIES_SUCCESS,
				payload: {},
			},
		];

		return store.dispatch(fetchGenreAndMovieList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it('creates FETCH_GENRES_AND_MOVIES_REQUEST and FETCH_GENRES_AND_MOVIES_SUCCESS when fetching genres fails', () => {
		mockAxios.onGet(MOVIES_ENDPOINT).reply(200, data);
		mockAxios.onGet(GENRES_ENDPOINT).reply(400, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_GENRES_AND_MOVIES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_GENRES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_MOVIES_REQUEST,
			},
			{
				type: FETCH_MOVIES_SUCCESS,
				payload: data,
			},
			{
				type: FETCH_GENRES_FAILURE,
				payload: 'Error: Request failed with status code 400',
			},
			{
				type: FETCH_GENRES_AND_MOVIES_SUCCESS,
				payload: {},
			},
		];

		return store.dispatch(fetchGenreAndMovieList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it('creates FETCH_GENRES_AND_MOVIES_REQUEST and FETCH_GENRES_AND_MOVIES_SUCCESS when fetching movies fails', () => {
		mockAxios.onGet(MOVIES_ENDPOINT).reply(400, data);
		mockAxios.onGet(GENRES_ENDPOINT).reply(200, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_GENRES_AND_MOVIES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_GENRES_REQUEST,
			},
			{
				payload: {},
				type: FETCH_MOVIES_REQUEST,
			},
			{
				type: FETCH_GENRES_SUCCESS,
				payload: data,
			},
			{
				type: FETCH_MOVIES_FAILURE,
				payload: 'Error: Request failed with status code 400',
			},
			{
				type: FETCH_GENRES_AND_MOVIES_SUCCESS,
				payload: {},
			},
		];

		return store.dispatch(fetchGenreAndMovieList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
