import React from 'react';

export class Comment extends React.Component{
	render(){
		return (
				<div className="container well">
					<p> {this.props.body} <em className="pull-right"> {this.props.author} </em></p>
					<button className="btn btn-info" onClick={this._handleDeleteComment.bind(this)}>Delete Comment</button>
				</div>
			)
		}
		
		_handleDeleteComment(event){
			event.preventDefault();
			console.log(this.props.comment);
			this.props.deleteComment(this.props.comment);
		}
		
	}	