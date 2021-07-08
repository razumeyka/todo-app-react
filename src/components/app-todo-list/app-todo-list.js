import React from 'react';

const TodoList = (props) => {
	return (
		<div className="todo-list">
			<div className="todo-list__no-items show">You don't have any tasks</div>
			<ul>{props.tasksList}</ul>
			<div className="todo-list__bottom-line">
				<div className="todo-list__left-items"><span>0</span> items left</div>
				<ul className="todo-list__nav">
					<li className="todo-list__all-btn active">All</li>
					<li className="todo-list__active-btn">Active</li>
					<li className="todo-list__complited-btn">Completed</li>
				</ul>
				<div className="todo-list__clear">Clear Completed</div>
			</div>
		</div>
	)
}

export default TodoList;