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
		expect(wrapper.find('StateManager').prop('options').length).toBe(1);
	});

	it('has placeholder', () => {
		expect(wrapper.find('StateManager').prop('placeholder')).toBe('select genre');
	});

	it('allow multi select', () => {
		expect(wrapper.find('StateManager').prop('isMulti')).toEqual(true);
	});
});
