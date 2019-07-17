import React from 'react';
import './app-header.css'

const AppHeader = ({toDo, done}) => {
	return (
		<div className="header app-header">
			<h1>My Todo List</h1>
			<p> {toDo} more to do, {done} done</p>
		</div>
		);
};

export default AppHeader;