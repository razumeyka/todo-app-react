import React from 'react';

const NewTask = ({task, ...props}) => {
	return (
		<li className="todo-list__item">
			<label className="checkbox">
				<input 
					type="checkbox" 
					defaultChecked = {task.done}
				></input>
				<span className="checkbox__field">{task.content}</span>
			</label>
			<div className="todo-list__remove-btn" onClick={props.deleteTask}></div>
		</li>
	);
}

export default NewTask;