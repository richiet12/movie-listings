import sortOnPopularity from './sortDescendingPopularity';

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
		popularity: 150,
		vote_average: 5,
	},
	{
		title: 'Upgrade',
		genre_ids: [5],
		popularity: 300,
		vote_average: 6,
	},
];

const sortedMovieList = [
	{
		title: 'Upgrade',
		genre_ids: [5],
		popularity: 300,
		vote_average: 6,
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
		popularity: 150,
		vote_average: 5,
	},
	{
		title: 'The Predator',
		genre_ids: [27, 878, 28, 35],
		popularity: 100,
		vote_average: 3,
	},
];

describe('Sort', () => {
	describe('sort by popularity', () => {
		it('has results in descending order', () => {
			expect(movieList.sort(sortOnPopularity)).toEqual(sortedMovieList);
		});
	});
});
