import React, { useState } from "react"
import Button from "./Button"
import "../css/AddTask.css"

const AddTask = ({ handleAddTask }) => {
	const [inputData, setInputData] = useState("")

	const handleInputChange = (e) => {
		setInputData(e.target.value)
	}

	const handleAddTaskClick = () => {
		handleAddTask(inputData)
		setInputData("")
	}

	return (
		<div className='add-task-container'>
			<input
				onChange={handleInputChange}
				value={inputData}
				className='add-task-input'
				type='text'
			/>
			<div className='add-task-button-container'>
				<Button onClick={handleAddTaskClick}>Add task</Button>
			</div>
		</div>
	)
}

export default AddTask
