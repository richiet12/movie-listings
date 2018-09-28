import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenreAndMovieList } from '../actions/fetchGenreAndMovieLists';
import MovieCard from '../components/movieCard';
import ErrorMsg from '../components/errorMsg';
import GenreFilterContainer from './genreFilter';

export class MovieList extends Component {
	componentDidMount() {
		this.props.fetchGenreAndMovieList();
	}

	render() {
		const isFetchInProgress = this.props.loading.get('fetching');
		const isError = this.props.movies.get('error') || this.props.genres.get('error');
		const movieListData = this.props.movies.get('filteredData');
		const genreListData = this.props.genres.get('data');
		const addGenreNames = function (movieList, genreList) {
			const moviesWithGenreNames = movieList;

			moviesWithGenreNames.map((movie, index) => {
				moviesWithGenreNames[index].genre_names = [];
				return movie.genre_ids.map((id) => {
					genreList.map((genre) => {
						if (genre.value === id) {
							movie.genre_names.push(genre.label);
						}
						return true;
					});
					return true;
				});
			});
			return moviesWithGenreNames;
		};
		let movies = [];
		let genres = [];

		if (isError) {
			return <main className="container"><ErrorMsg msg={this.props.movies.get('errorMsg')} /></main>;
		}

		if (isFetchInProgress) {
			return <main className="container"><p>loading...</p></main>;
		}

		if (movieListData.get('results') && genreListData.get('genres')) {
			movies = movieListData.get('results');
			genres = genreListData.get('genres');

			if (genres) {
				movies = addGenreNames(movies, genres);
			}
		}

		if (movies.length === 0) {
			return (
				<main className="container">
					<GenreFilterContainer />
					<p>no results for this selection</p>
				</main>
			);
		}

		return (
			<main className="container">
				<GenreFilterContainer />
				<ul className="movie-list">
					{movies.map(movie => (
						<MovieCard
							title={movie.title}
							genres={movie.genre_names}
							imgPath={movie.poster_path}
							averageVote={movie.vote_average}
							popularity={movie.popularity}
							key={movie.id}
						/>
					))}
				</ul>
			</main>
		);
	}
}

function mapStateToProps({ movies, genres, loading }) {
	return { movies, genres, loading };
}

function mapDispathcToProps(dispatch) {
	return bindActionCreators({ fetchGenreAndMovieList }, dispatch);
}

export default connect(mapStateToProps, mapDispathcToProps)(MovieList);
