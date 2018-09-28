import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieList } from '../actions/fetchMovieList';
import MovieCard from '../components/movieCard';
import ErrorMsg from '../components/errorMsg';
import Header from '../components/header';


export const MovieList = class App extends Component {
	componentDidMount() {
		this.props.fetchMovieList();
	}

	render() {
		const isFetchInProgress = this.props.movies.get('fetching');
		const isError = this.props.movies.get('error');
		const movieListData = this.props.movies.get('data');
		let movies = [];

		if (isError) {
			return <ErrorMsg msg={this.props.movies.get('errorMsg')} />;
		}

		if (isFetchInProgress) {
			return <p>loading...</p>;
		}

		if (movieListData.get('results')) {
			movies = movieListData.get('results');
		}

		return (
			<div>
				<Header title="Movies out now" />
				<main className="container">
					<ul className="movie-list">
						{movies.map(movie => (
							<MovieCard
								title={movie.title}
								genres={movie.genre_ids}
								imgPath={movie.poster_path}
								averageVote={movie.vote_average}
								key={movie.id}
							/>
						))}
					</ul>
				</main>
			</div>
		);
	}
};

function mapStateToProps(movies) {
	return { movies };
}

function mapDispathcToProps(dispatch) {
	return bindActionCreators({ fetchMovieList }, dispatch);
}

export default connect(mapStateToProps, mapDispathcToProps)(MovieList);
