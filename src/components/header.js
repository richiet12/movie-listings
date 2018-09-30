// Component - Header
// Render page header with h1

import React from 'react';

const Header = props => (
	<header className="header">
		<h1 className="heading heading--1 header__title container">{props.title}</h1>
	</header>
);

export default Header;
