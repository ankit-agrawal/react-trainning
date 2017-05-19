import React from 'react';

export class TodoList extends React.Component{
	render(){
		return (
			<div className="container">
				<h2>My Todo List ....</h2>
				<ul className="list-unstyled">
				{
					this.props.todos.map((todo)=>{
						return(<li className="well" key={todo.id}>{todo.text}</li>)
					})
				}
				</ul>
			</div>
		)
	}
}