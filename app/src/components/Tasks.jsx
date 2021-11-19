import React from "react"
import Task from "./Task"

const Tasks = ({ tasks, handleClickTask, handleRemoveTask }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleClickTask={handleClickTask}
					handleRemoveTask={handleRemoveTask}
				/>
			))}
		</>
	)
}

export default Tasks
