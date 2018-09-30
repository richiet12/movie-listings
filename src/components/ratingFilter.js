import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { filterByRating } from '../actions/filterMovieList';


export class RatingFilter extends Component {
	constructor() {
		super();
		this.state = { rating: 3 };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(rating) {
		this.setState({ rating });
		this.props.filterByRating(rating);
	}

	render() {
		return (
			<div className="filter-control filter-control--rating">
				<p className="filter-control__label">Min rating: {this.state.rating} </p>
				<Slider
					defaultValue={3}
					min={0}
					max={10}
					step={0.5}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ filterByRating }, dispatch);
}

export default connect(null, mapDispatchToProps)(RatingFilter);
