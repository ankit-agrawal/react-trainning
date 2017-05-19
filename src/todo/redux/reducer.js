export default function reducer(state, action){
	switch(action.type){
		case "ADD_TODO":
			return Object.assign({}, state, {
				todos: [{
					id: state.todos.length+1,
					completed: false,
					text: action.text
				}, ...state.todos]
			})
		default:
			return state;
	}
}