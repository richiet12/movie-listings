import { filterMoviesByGenre, filterMoviesByRating } from './filterMovies';

const movieList = [
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
	{
		title: 'The Nun',
		genre_ids: [27, 9648, 53],
		popularity: 200,
		vote_average: 4,
	},
	{
		title: 'Venom',
		genre_ids: [48, 53],
		popularity: 200,
		vote_average: 5,
	},
	{
		title: 'Upgrade',
		genre_ids: [5],
		popularity: 200,
		vote_average: 6,
	},
];

const movieListFilteredByGenre = [
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
];

const movieListFilteredByRating = [
	{
		title: 'Venom',
		genre_ids: [48, 53],
		popularity: 200,
		vote_average: 5,
	},
	{
		title: 'Upgrade',
		genre_ids: [5],
		popularity: 200,
		vote_average: 6,
	},
];

describe('Filters', () => {
	describe('filter by genre', () => {
		it('has filtered results', () => {
			expect(filterMoviesByGenre(movieList, [27, 28])).toEqual(movieListFilteredByGenre);
		});
	});

	describe('filter by rating', () => {
		it('has filtered results', () => {
			expect(filterMoviesByRating(movieList, 5)).toEqual(movieListFilteredByRating);
		});
	});
});
