import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { MOVIES_ENDPOINT } from '../config/tmdb';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, fetchMovieList } from '../actions/fetchMovieList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch movie list async actions', () => {
	const mockAxios = new MockAdapter(axios);
	const data = { response: true };
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('creates FETCH_MOVIES_REQUEST and FETCH_MOVIES_SUCCESS when fetching movie list returns', () => {
		mockAxios.onGet(MOVIES_ENDPOINT).reply(200, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_MOVIES_REQUEST,
			},
			{
				type: FETCH_MOVIES_SUCCESS,
				payload: data,
			},
		];

		return store.dispatch(fetchMovieList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it('creates FETCH_MOVIES_REQUEST and FETCH_MOVIES_FAILURE when fetching movies fails', () => {
		mockAxios.onGet(MOVIES_ENDPOINT).reply(400, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_MOVIES_REQUEST,
			},
			{
				type: FETCH_MOVIES_FAILURE,
				payload: 'Error: Request failed with status code 400',
			},
		];

		return store.dispatch(fetchMovieList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
