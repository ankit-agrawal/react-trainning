import React from 'react';
import {TodoInput} from './todo-input-component';
import {TodoList} from './todo-list-component';
import {connect} from 'react-redux';

class TodoApp extends React.Component{
	render(){
		return (
			<div className="container">
				<h1>My Todo App</h1>
				<TodoInput dispatch={this.props.dispatch}/>
				<TodoList todos={this.props.todos} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(TodoApp);