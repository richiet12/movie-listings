import Immutable from 'immutable';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GenreFilter } from './genreFilter';

Enzyme.configure({ adapter: new Adapter() });

describe('Genre filter container', () => {
	let wrapper;
	const mockFilterByGenrefn = jest.fn();
	const genreSuccessState = Immutable.Map({
		error: false,
		errorMsg: '',
		data: Immutable.Map({
			genres: [
				{
					value: 28,
					label: 'Action',
				},
			],
		}),
	});

	beforeEach(() => {
		wrapper = shallow(<GenreFilter
			filterByGenre={mockFilterByGenrefn}
			genres={genreSuccessState}
		/>);
	});

	it('has one option in the select', () => {
		expect(wrapper.prop('options').length).toBe(1);
	});

	it('has placeholder', () => {
		expect(wrapper.prop('placeholder')).toBe('filter by genre');
	});

	it('allow multi select', () => {
		expect(wrapper.prop('isMulti')).toEqual(true);
	});
});
