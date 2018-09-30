// Component - Error message
// Render error message e.g. when there is an error from fetch

import React from 'react';

const ErrorMsg = (props) => {
	if (props.msg) {
		return (
			<div>
				<h3>An error has occurred</h3>
				<strong>More details:</strong>
				<p>{props.msg}</p>
			</div>
		);
	}

	return <h3>An error has occurred</h3>;
};

export default ErrorMsg;
