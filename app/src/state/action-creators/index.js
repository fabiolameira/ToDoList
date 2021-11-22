export const addTask = (task) => (dispatch) => {
	dispatch({
		type: "ADD",
		payload: task,
	})
}

export const editTask = (task) => (dispatch) => {
	dispatch({
		type: "EDIT",
		payload: task,
	})
}

export const removeTask = (task) => (dispatch) => {
	dispatch({
		type: "REMOVE",
		payload: task,
	})
}
