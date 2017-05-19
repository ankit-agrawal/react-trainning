import React from 'react';
import actions from './redux/action';

export class TodoInput extends React.Component{
	render(){
		return (
			<div className="container">
				<h1>Add Todo here </h1>
				<div>
					<input type="text"
						placeholder="Enter your list: "
						className="form-control"
						value={this.state.text}
						onChange={this._handleChange.bind(this)} />
					<button className="btn btn-info"
						onClick={this._handleClick.bind(this)}>Add Todo</button>
				</div>
			</div>
		)
	}
	
	_handleClick(event){
		event.preventDefault();
		console.log("botton cliecked");
		this.props.dispatch(actions.addTodo(this.state.text))
	}
	
	_handleChange(event){
		this.setState({
			text: event.target.value
		})
	}
	
	constructor(){
		super()
		this.state = {text: ''};
	}
}