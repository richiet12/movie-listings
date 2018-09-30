import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import { filterByGenre } from '../actions/filterMovieList';

export class GenreFilter extends Component {
	constructor() {
		super();
		this.state = { selectedOption: null };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectedOption) {
		this.setState({ selectedOption });
		this.props.filterByGenre(selectedOption);
	}

	render() {
		const { selectedOption } = this.state;
		const genres = this.props.genres.get('data').get('genres') || [];

		return (
			<Select
				className="filter-control filter-control--genre"
				value={selectedOption}
				onChange={this.handleChange}
				options={genres}
				placeholder="filter by genre"
				isMulti
			/>
		);
	}
}
function mapStateToProps({ genres }) {
	return { genres };
}

function mapDispathcToProps(dispatch) {
	return bindActionCreators({ filterByGenre }, dispatch);
}

export default connect(mapStateToProps, mapDispathcToProps)(GenreFilter);
