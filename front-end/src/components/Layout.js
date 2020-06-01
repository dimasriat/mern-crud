import React from 'react';

const Layout = (props) => (
	<div>
		<h1>{props.title}</h1>
		<div>{props.children}</div>
	</div>
);

export default Layout;
