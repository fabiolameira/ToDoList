import React from "react"
import { useSelector } from "react-redux"
import AddTask from "../components/AddTask"
import Tasks from "../components/Tasks"

const TasksPage = () => {
	const tasks = useSelector((state) => state.tasks)

	return (
		<>
			<AddTask />
			<Tasks tasks={tasks} />
		</>
	)
}

export default TasksPage
