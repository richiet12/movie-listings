import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RatingFilter } from './ratingFilter';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating filter', () => {
	let wrapper;
	const mockFilterByRatingfn = jest.fn();
	const defaultRatingValue = 3;

	beforeEach(() => {
		wrapper = shallow(<RatingFilter
			filterByRating={mockFilterByRatingfn}
		/>);
	});

	it('has default min rating value', () => {
		expect(wrapper.find('p').contains(defaultRatingValue)).toEqual(true);
	});
});
