import React from 'react';

class NewItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			input: '',
			checked: false
		};
	}
	
	addTask = () => {
		let {input, checked} = this.state;
			
		if (input) {
			this.props.addTask(input, checked);
			this.setState({input: ''});
		}
	}
	
	handleEnter = event => {
		if (event.key === "Enter") this.addTask();
	}
	
	inputChange = event => {
		this.setState({input: event.target.value});
	}
	
	checkboxChange = () => {
		let {checked} = this.state;
		this.setState({checked: !checked});
	}
	
	render() {
		const {input} = this.state;
		
		return (
			<div className="todo-new-item">
				<label className="checkbox">
					<input 
						type="checkbox" 
						id="" 
						name="" 
						value=""
						onChange={this.checkboxChange}
					></input>
					<span className="checkbox__field"></span>
					<input 
						type="text" 
						className="new-item" 
						placeholder="Enter task"
						onChange={this.inputChange}
						onKeyPress={this.handleEnter}
					></input>
				</label>
			</div>
		)
	}
}

export default NewItem;