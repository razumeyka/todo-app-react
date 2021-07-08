import React from 'react';

import Header from '../app-header/app-header';
import NewItem from '../app-new-item/app-new-item';
import TodoList from '../app-todo-list/app-todo-list';
import NewTask from '../app-task/app-task';

import './app.css';

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			tasks: []
		}
	}
	
	addTask = (task, status) => {
		this.setState( state => {
			let {tasks} = state;
			tasks.push({
				id: tasks.length !== 0 ? tasks.length : 0, 
				content: task, 
				done: status
			});
			return tasks;
		})
	}
	
	deleteTask = id => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState( state => {
			let {tasks} = state;
			delete tasks[index];
			return tasks;
		})
	};
	
	render () {
		
		const {tasks} = this.state;
		const activeTasks = tasks.filter(task => !task.done);
		const doneTasks = tasks.filter(task => task.done);
		
		
		const tasksList = [...activeTasks, ...doneTasks].map(item => {
			return <NewTask 
				task={item} 
				key={item.id} 
				deleteTask={ () => this.deleteTask(item.id)}
			></NewTask>
		});

		return (
			<main className="todo-screen">
				<Header/>
				<NewItem addTask={this.addTask}/>
				<TodoList tasksList={tasksList}/>
				<div className="todo-screen__note">Drag and drop to reorder list</div>
			</main>
		)
	}
}

export default App;