export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_RATING = 'FILTER_BY_RATING';

export const filterByGenre = function (genres) {
	return {
		type: FILTER_BY_GENRE,
		payload: genres,
	};
};

export const filterByRating = function (rating) {
	return {
		type: FILTER_BY_RATING,
		payload: rating,
	};
};
