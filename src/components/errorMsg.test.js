import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ErrorMsg from './errorMsg';

Enzyme.configure({ adapter: new Adapter() });

describe('Error Message', () => {
	let wrapper;

	describe('message provided', () => {
		beforeEach(() => {
			const message = 'x went wrong';
			wrapper = shallow(<ErrorMsg msg={message} />);
		});

		it('renders header with message', () => {
			const errorMessage =
				<div><h3>An error has occured</h3><strong>More details:</strong><p>x went wrong</p></div>;
			expect(wrapper.contains(errorMessage)).toEqual(true);
		});
	});

	describe('no message provided', () => {
		beforeEach(() => {
			wrapper = shallow(<ErrorMsg />);
		});

		it('renders error without message', () => {
			const errorMessage =
				<h3>An error has occured</h3>;
			expect(wrapper.contains(errorMessage)).toEqual(true);
		});
	});
});
