/* eslint-disable  jsx-a11y/heading-has-content */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Header from './header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
	let wrapper;

	describe('title provided', () => {
		beforeEach(() => {
			const title = 'Movies';
			wrapper = shallow(<Header title={title} />);
		});

		it('renders header with title', () => {
			const textHeader =
				<h1 className="heading heading--1 header__title container">Movies</h1>;
			expect(wrapper.contains(textHeader)).toEqual(true);
		});
	});

	describe('no title provided', () => {
		beforeEach(() => {
			wrapper = shallow(<Header />);
		});

		it('renders header without title', () => {
			const textHeader = <h1 className="heading heading--1 header__title container" />;
			expect(wrapper.contains(textHeader)).toEqual(true);
		});
	});
});
