import { FILTER_BY_GENRE, filterByGenre } from './filterMovieList';

describe('filter movie list action', () => {
	it('has the correct type', () => {
		const action = filterByGenre();
		expect(action.type).toBe(FILTER_BY_GENRE);
	});

	it('has the correct payload', () => {
		const action = filterByGenre({ data: 'data' });
		expect(action.payload).toEqual({ data: 'data' });
	});
});
