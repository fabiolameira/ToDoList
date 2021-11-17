import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import "./css/App.css"

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Regar as plantas.",
			completed: false,
		},
		{
			id: "2",
			title: "Alimentar o pássaro.",
			completed: true,
		},
	])

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
		<div className='container'>
			<Header />
			<AddTask handleAddTask={handleAddTask} />
			<Tasks
				tasks={tasks}
				handleClickTask={handleClickTask}
				handleRemoveTask={handleRemoveTask}
			/>
		</div>
	)
}

export default App
