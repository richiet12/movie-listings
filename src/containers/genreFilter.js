// Container - Genre filter
// Render genre filter using the react select plugin
// list of genres comes from the genreReducer
// on change dispatch the filterByGenre action

/* eslint-disable jsx-a11y/label-has-for */

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
			<div className="filter-control filter-control--genre">
				<label htmlFor="react-select-2-input" className="filter-control__label">Genre filter</label>
				<Select
					value={selectedOption}
					onChange={this.handleChange}
					options={genres}
					placeholder="select genre"
					isMulti
					label="genre filter"
					classNamePrefix
				/>
			</div>
		);
	}
}
function mapStateToProps({ genres }) {
	return { genres };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ filterByGenre }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
