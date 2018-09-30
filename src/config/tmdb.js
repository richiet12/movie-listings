// config for the movie database endpoints

const API_DOMAIN = 'https://api.themoviedb.org/3/';
const MOVIES_NOW_PLAYING_PATH = 'movie/now_playing';
const GENRES_PATH = 'genre/movie/list';
const API_KEY = 'f4b4bdd0346b92f63933cc809968f98b';
const LANGUAGE = 'en-UK';
const REGION = 'GB';
const IMAGE_API_DOMAIN = 'https://image.tmdb.org/t/p/';
const POSTER_IMG_SIZE = 'w500/';

export const MOVIES_ENDPOINT =
	`${API_DOMAIN}${MOVIES_NOW_PLAYING_PATH}?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`;

export const GENRES_ENDPOINT =
`${API_DOMAIN}${GENRES_PATH}?api_key=${API_KEY}&language=${LANGUAGE}`;

export const IMAGE_ENDPOINT =
	`${IMAGE_API_DOMAIN}${POSTER_IMG_SIZE}`;
