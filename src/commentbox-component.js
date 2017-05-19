import React from 'react';
import { Comment } from  './comment-component';
import { CommentForm } from './commentform';
import jQuery from 'jquery';

export class CommentBox extends React.Component{
	render(){
		const now = new Date();
		
			
			const commentList = this.state.comments.map((comment)=>{
				return (<Comment author={comment.author} body={comment.body} comment={comment} deleteComment={this._deleteComment.bind(this)}/>)
				})
				
				
			let buttonText = "Show Comments";
			let commentNode;	
			if(this.state.showComments){
				commentNode = <div> { commentList } </div>
				buttonText = "Hide Comments"
			}
		
		return  (<div className='container'>
					<h2>Comment box component loaded successfully !!!!!</h2>
					<p>Current Time : {now.toTimeString()}</p>
					<h2>{ this.state.comments.length } {this._getCommentTitle(this.state.comments.length)}</h2>
						<em className="pull-right">
						<button className="btn btn-primary" onClick={this._handleClick.bind(this) }>
							{buttonText}
							</button>
						</em>
						
						< CommentForm addComment={this._addComment.bind(this)}/>
						{ commentNode }
				</div>)
		}
		
		
		componentDidMount(){
			this._timer = setInterval(()=>this._fetchData(),5000000000);
			}
		
		componentWillUnmount(){
			clearInterval(this._timer);
			}
		
		
		componentWillMount(){
			this._fetchData();
			
		}
		
		
		_fetchData(){
			console.log("Fetch Data Called")
			jQuery.ajax({
				method : 'GET',
				url : "http://localhost:3000//comment-data.json",
				success : (comments)=>{
					console.log(comments);
					console.log("success callback")
				},
				error : (err)=>{
					console.log("Error Occured:"+ err)
				}
						
			})
		}
		
		
		_addComment(author, body){	
			const comment ={
				id: this.state.comments.length+1,
				author,
				body
			}	
			
				this.setState({
					showcomment : true,
					comments : this.state.comments.concat[comment]}
					)
	}	
		
		_deleteComment(comment){
			let comments = this.state.comments;
			comments.splice(comments.indexOf(comment),1);

	}
		
		
		_handleClick(event){
			event.preventDefault();
			this.setState({
				showComments: !this.state.showComments
			})
		}

		
		
		constructor(){
			super();
			this.state={
				showComments : false,
					'comments' : [{
				id : 1,
				author : "foo",
				body : "my awsome comment 1"
				},{
				id : 2,
				author : "Bar",
				body : "my awsome comment 2"
				},
				
			]
		}
	}
		

	_getCommentTitle(len){
		if (len===0){
			return 'No comment';
		}
		else if(len===1){
			return 'comment';
		}
		else{
			return 'comments'
			}
		}
	}
	