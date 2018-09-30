import { FILTER_BY_GENRE, FILTER_BY_RATING, filterByGenre, filterByRating } from './filterMovieList';

describe('filter movie list action', () => {
	describe('filter by genre', () => {
		describe('filter nbt type', () => {
			const action = filterByGenre();
			expect(action.type).toBe(FILTER_BY_GENRE);
		});

		it('has the correct payload', () => {
			const action = filterByGenre({ data: 'data' });
			expect(action.payload).toEqual({ data: 'data' });
		});
	});

	describe('filter by rating', () => {
		it('has the correct type', () => {
			const action = filterByRating();
			expect(action.type).toBe(FILTER_BY_RATING);
		});

		it('has the correct payload', () => {
			const action = filterByRating({ data: 'data' });
			expect(action.payload).toEqual({ data: 'data' });
		});
	});
});
