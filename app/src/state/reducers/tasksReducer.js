const initialState = []
const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload]
		case "EDIT":
			return state.map((task) => {
				if (task.id === action.payload.id) return action.payload
				return task
			})
		case "REMOVE":
			return state.filter((task) => task.id !== action.payload.id)
		default:
			return state
	}
}

export default tasksReducer
