export const filterMoviesByGenre = (movieList, filteredGenreIds) => (
	movieList.filter((movie) => {
		let result = true;

		filteredGenreIds.map((filterId) => {
			result = result && (movie.genre_ids.indexOf(filterId) >= 0);
			return result;
		});
		return result;
	})
);

export const filterMoviesByRating = (movieList, filterRating) => (
	movieList.filter((movie) => {
		if (movie.vote_average >= filterRating) {
			return true;
		}

		return false;
	})
);

export const filterMovies = (state) => {
	const filterRating = state.get('ratingFilter');
	const allData = state.get('data');
	const allMoviesData = allData.get('results');
	const filteredGenreIds = state.get('genreFilter').map(id => id.value);

	let filteredResults = filterMoviesByGenre(allMoviesData, filteredGenreIds);
	filteredResults = filterMoviesByRating(filteredResults, filterRating);

	return filteredResults;
};
