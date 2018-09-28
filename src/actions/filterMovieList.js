export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

export const filterByGenre = function (genres) {
	return {
		type: FILTER_BY_GENRE,
		payload: genres,
	};
};
