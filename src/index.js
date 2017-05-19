import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo/todo-component';
import configureStore from './todo/redux/store';
import { Provider } from 'react-redux';
//import App from './App';
//import './index.css';
//import './bootstrap.css';
//import {CommentBox} from './commentbox-component';
//import {BrowserRouter, Route, Link} from 'react-router-dom';
//import {AboutComponent} from './about-component';
//import {ContactComponent} from './contact-component';



/*ReactDOM.render(
<BrowserRouter>
	<div>
		<ul className="List unstyles nav navbar-nav navbar-default">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
		<br/><br/>
		<Route exact path="/" component={CommentBox}/>
		<Route exact path="/about" component={AboutComponent}/>
		<Route exact path="/contact" component={ContactComponent}/>
	</div>	
			
  </BrowserRouter >,
  document.getElementById('root')
);
*/

let initialState = {
	todos: [{id: 1,
	completed: false,
	text: "Sample todo for demo purpose"
	}]
}

let store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById("root")
)