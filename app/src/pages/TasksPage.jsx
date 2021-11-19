import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import AddTask from "../components/AddTask"
import Tasks from "../components/Tasks"

const TasksPage = () => {
	const [tasks, setTasks] = useState([])

	const handleAddTask = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				id: uuidv4(),
				title: taskTitle,
				completed: false,
			},
		]
		setTasks(newTasks)
	}

	const handleRemoveTask = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId)
		setTasks(newTasks)
	}

	const handleClickTask = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId)
				return { ...task, completed: !task.completed }
			return task
		})
		setTasks(newTasks)
	}

	return (
		<>
			<AddTask handleAddTask={handleAddTask} />
			<Tasks
				tasks={tasks}
				handleClickTask={handleClickTask}
				handleRemoveTask={handleRemoveTask}
			/>
		</>
	)
}

export default TasksPage
