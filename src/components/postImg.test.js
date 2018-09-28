/* eslint-disable  jsx-a11y/heading-has-content */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import PosterImg from './posterImg';
import { IMAGE_ENDPOINT } from '../config/tmdb';
import missingImgPath from '../imgs/missing.jpg';

Enzyme.configure({ adapter: new Adapter() });

describe('Poster image', () => {
	let wrapper;

	describe('src and alt text provided', () => {
		beforeEach(() => {
			const src = 'image.jpg';
			const altText = 'alt Text';
			wrapper = shallow(<PosterImg path={src} alt={altText} />);
		});

		it('renders img with path provided', () => {
			const imgElement = wrapper.find('img');
			expect(imgElement.length).toBe(1);
			expect(imgElement.prop('src')).toEqual(`${IMAGE_ENDPOINT}image.jpg`);
			expect(imgElement.prop('alt')).toEqual('alt Text');
		});
	});

	describe('src not provided', () => {
		beforeEach(() => {
			const src = null;
			const altText = 'alt Text';
			wrapper = shallow(<PosterImg path={src} alt={altText} />);
		});

		it('renders img with missing img path', () => {
			const imgElement = wrapper.find('img');
			expect(imgElement.length).toBe(1);
			expect(imgElement.prop('src')).toEqual(`${missingImgPath}`);
		});
	});
});
