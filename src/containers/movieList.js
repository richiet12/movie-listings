import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenreAndMovieList } from '../actions/fetchGenreAndMovieLists';
import MovieCard from '../components/movieCard';
import ErrorMsg from '../components/errorMsg';
import Header from '../components/header';


export const MovieList = class App extends Component {
	componentDidMount() {
		this.props.fetchGenreAndMovieList();
	}

	render() {
		const isFetchInProgress = this.props.loading.get('fetching');
		const isError = this.props.movies.get('error') || this.props.genres.get('error');
		const movieListData = this.props.movies.get('data');
		const genreListData = this.props.genres.get('data');
		const addGenreNames = function (movieList, genreList) {
			const moviesWithGenreNames = movieList;

			moviesWithGenreNames.map((movie, index) => {
				moviesWithGenreNames[index].genre_names = [];
				return movie.genre_ids.map((id) => {
					genreList.map((genre) => {
						if (genre.id === id) {
							movie.genre_names.push(genre.name);
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
			return <ErrorMsg msg={this.props.movies.get('errorMsg')} />;
		}

		if (isFetchInProgress) {
			return <p>loading...</p>;
		}

		if (movieListData.get('results') && genreListData.get('genres')) {
			movies = movieListData.get('results');
			genres = genreListData.get('genres');

			if (genres) {
				movies = addGenreNames(movies, genres);
			}
		}

		return (
			<div>
				<Header title="Movies out now" />
				<main className="container">
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
			</div>
		);
	}
};

function mapStateToProps({ movies, genres, loading }) {
	return { movies, genres, loading };
}

function mapDispathcToProps(dispatch) {
	return bindActionCreators({ fetchGenreAndMovieList }, dispatch);
}

export default connect(mapStateToProps, mapDispathcToProps)(MovieList);
