import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducer';

let finalCreateStore = compose(
		applyMiddleware(createLogger())
		)(createStore);

export default function configureStore(initialState = {todos: []}){
	return finalCreateStore(reducer, initialState)
}