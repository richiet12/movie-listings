import { combineReducers } from 'redux';
import MovieListReducer from './movieList';
import GenreListReducer from './genreList';
import LoadingReducer from './loading';

const rootReducer = combineReducers({
	movies: MovieListReducer,
	genres: GenreListReducer,
	loading: LoadingReducer,
});

export default rootReducer;
