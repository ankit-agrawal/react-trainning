import React from 'react';


export class CommentForm extends React.Component{
	render (){
		return(
				<div className="container">
				<h2 className="text-center">Join the discussion</h2>
					<form className="form" onSubmit={this._submitHandler.bind(this)}>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Name: " ref={(input)=>this._author=input} />
							<textarea placeholder="Enter your Message: " className="form-control" ref={(textarea)=>this._body=textarea} />
							<input type="submit" className="btn btn-warning" value="Post comment" />
						</div>
					</form>
				</div>
			)
		}
	
	_submitHandler(event){
		event.preventDefault();
		let author = this._author;
		let body = this._body;
		console.log("Auhor: " + author.value);
		console.log("Body: " + body.value);
		this.props.addComment(author.value, body.value);
	}
}
