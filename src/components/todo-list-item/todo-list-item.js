import React from 'react';
import './todo-list-item.css';


class TodoListItem extends React.Component {

	render() {

		const { label, onDeleted, 
				onToggleImportant, onToggleDone, important, done } = this.props;

		let classNames = 'todo-list-item';

		if (important) {
			classNames += ' important';
		}	

		if (done) {
			classNames += ' done'
		}

		return (
			<div className = {classNames}>
				<span  className = 'todo-list-text' 
						onClick={onToggleDone} > 
					{ label }
				</span>
				<span>
					<button type="button" 
							className="btn btn-outline-danger btn-small"
							onClick={onDeleted}>
						<i className="fa fa-trash-o" />
					</button>

					<button type="button" className="btn btn-outline-success btn-small"
					onClick={onToggleImportant}>
						<i className="fa fa-exclamation" />
					</button>				

				</span>
			</div>
		);
	}
}

export default TodoListItem;