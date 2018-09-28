import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { GENRES_ENDPOINT } from '../config/tmdb';
import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS, fetchGenreList } from '../actions/fetchGenreList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch genre list async actions', () => {
	const mockAxios = new MockAdapter(axios);
	const data = { response: true };
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('creates FETCH_GENRES_REQUEST and FETCH_GENRES_SUCCESS when fetching genre list returns', () => {
		mockAxios.onGet(GENRES_ENDPOINT).reply(200, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_GENRES_REQUEST,
			},
			{
				type: FETCH_GENRES_SUCCESS,
				payload: data,
			},
		];

		return store.dispatch(fetchGenreList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it('creates FETCH_GENRES_REQUEST and FETCH_GENRES_FAILURE when fetching genres fails', () => {
		mockAxios.onGet(GENRES_ENDPOINT).reply(400, data);
		const expectedAction = [
			{
				payload: {},
				type: FETCH_GENRES_REQUEST,
			},
			{
				type: FETCH_GENRES_FAILURE,
				payload: 'Error: Request failed with status code 400',
			},
		];

		return store.dispatch(fetchGenreList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
